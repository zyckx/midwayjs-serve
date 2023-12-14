import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import * as orm from '@midwayjs/typeorm';
import * as jwt from '@midwayjs/jwt';
import * as captcha from '@midwayjs/captcha';
import * as cache from '@midwayjs/cache';
import * as crossDomain from '@midwayjs/cross-domain';
import * as upload from '@midwayjs/upload';
import * as swagger from '@midwayjs/swagger';
import { join } from 'path';
import { DefaultErrorFilter } from './filter/default.filter';
import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
import { AuthMiddleware } from './middleware/auth.middleware';
import * as view from '@midwayjs/view-nunjucks';

@Configuration({
  imports: [
    koa,
    validate,
    orm,
    view,
    jwt,
    captcha,
    upload,
    cache,
    crossDomain,
    swagger,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware, AuthMiddleware]);
    // add filter
    this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
    // this.app.useFilter([WeatherErrorFilter]);
  }
}
