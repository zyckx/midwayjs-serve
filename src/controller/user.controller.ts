import { Body, Controller, Get, Inject, Post } from '@midwayjs/core';
import { UserService } from '../service/user.service';
import { CaptchaService } from '@midwayjs/captcha';
import { UserLoginDto, UserRegisterDto } from '../dto/user';
import { Validate } from '@midwayjs/validate';
import { BaseController } from './base.controller';

@Controller('/user')
export class UserController extends BaseController {
  @Inject()
  userService: UserService;

  @Inject()
  captchaService: CaptchaService;

  @Get('/')
  async test() {
    return 'hello test';
  }

  @Post('/login')
  async login(@Body() body: UserLoginDto) {
    const result = await this.userService.login(body);
    return this.success(result);
  }

  @Post('/register')
  @Validate({
    errorStatus: 405,
  })
  async register(@Body() body: UserRegisterDto) {
    const res = await this.userService.register(body);
    return this.success(res);
  }
  @Post('/Merchant')
  async Merchant(@Body() body: UserRegisterDto) {
    const res = await this.userService.Merchant(body);
    return this.success(res);
  }
  @Get('/captcha')
  async captcha() {
    const res = await this.userService.getCaptcha();
    return this.success(res);
  }
}
