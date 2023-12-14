import { Catch } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { Result } from '../utils';

@Catch()
export class DefaultErrorFilter {
  async catch(err: Error, ctx: Context) {
    // 所有的未分类错误会到这里
    ctx.logger.error(err);
    console.log('filter error', err);

    return Result.error({
      // code: 1,
      code: 1,
      message: err.message,
    });
  }
}
