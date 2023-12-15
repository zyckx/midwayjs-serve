import { Catch } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { Result } from '../utils';
@Catch()
export class DefaultErrorFilter {
  async catch(err, ctx: Context) {
    ctx.logger.error(err);
    // 所有的未分类错误会到这里
    return Result.error({
      code: err.status ?? 500,
      message: err.message,
    });
  }
}
