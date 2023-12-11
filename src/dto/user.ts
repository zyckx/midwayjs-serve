// src/dto/user.ts
import { Rule, RuleType } from '@midwayjs/validate';

export class UserLoginDto {
  @Rule(RuleType.string().required().error(new Error('用户名不能为空')))
  username: string;

  @Rule(RuleType.string().max(25).min(7).error(new Error('密码长度为7-25位')))
  password: string;

  @Rule(RuleType.string().required())
  captchaId: string;

  @Rule(RuleType.string().required())
  code: string;
}

export class UserRegisterDto {
  @Rule(RuleType.string().required().error(new Error('用户名不能为空')))
  username: string;

  @Rule(RuleType.string().max(25).min(7).error(new Error('密码长度为7-25位')))
  password: string;

  @Rule(RuleType.string().max(25).min(7).error(new Error('密码长度为7-25位')))
  confirmPassword: string;
}
