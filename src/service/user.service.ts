import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@midwayjs/jwt';
import { CaptchaService } from '@midwayjs/captcha';
import { CacheManager } from '@midwayjs/cache';
import * as bcryptjs from 'bcryptjs';
import { UserLoginDto } from '../dto/user';
import { User } from '../entity/user.entity';
import { CustomHttpError } from '../error/customHttp.error';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModal: Repository<User>;

  @Inject()
  cacheService: CacheManager;

  @Inject()
  captchaService: CaptchaService;

  @Inject()
  jwtService: JwtService;

  async login(body: UserLoginDto) {
    const passed = await this.captchaService.check(body.captchaId, body.code);
    if (!passed) {
      throw new CustomHttpError('验证码错误', 408);
    }
    const user = await this.userModal.findOne({
      where: {
        username: body.username,
      },
    });
    if (!user) {
      // return '用户不存在';
      throw new CustomHttpError('用户不存在', 408);
    }
    const isPasswordValid = bcryptjs.compareSync(body.password, user.password);
    if (!isPasswordValid) {
      return '密码错误';
    }
    const { id, username, status } = user;
    const userInfo = {
      id,
      username,
      status,
    };
    const token = await this.jwtService.sign(userInfo);
    console.log(token);
    await this.cacheService.set(`userId:${id}`, token);
    return {
      token,
      userInfo,
    };
  }

  async register(body: any) {
    if (body.password !== body.confirmPassword) {
      return '密码不一致';
    }
    //检查是否存在
    const res = await this.userModal.findOne({
      where: {
        username: body.username,
      },
    });
    if (res) {
      console.log('res', res);
      return '用户已存在';
    }
    //进行注册
    const user = new User();
    user.username = body.username;
    user.password = body.password;
    user.password = bcryptjs.hashSync(user.password, 10);
    const result = await this.userModal.save(user);
    if (result) {
      return '注册成功';
    }
  }
  async Merchant(body) {
    console.log(body);
    return '!1';
  }
  async getCaptcha() {
    const { id, imageBase64 } = await this.captchaService.image({
      width: 120,
      height: 40,
    });
    return {
      id, // 验证码 id
      imageBase64, // 验证码 SVG 图片的 base64 数据，可以直接放入前端的 img 标签内
    };
  }
}
