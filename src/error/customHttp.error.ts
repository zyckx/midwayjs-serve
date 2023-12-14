import { MidwayError } from '@midwayjs/core';

// export class CustomHttpError extends MidwayHttpError {
//   constructor(message: any, code = HttpStatus.BAD_REQUEST) {
//     super(message || '服务器出错啦！！！', code);
//   }
// }
export class CustomHttpError extends MidwayError {
  constructor(err?: Error) {
    super('error', {
      cause: err,
    });
    console.log('error是', err);
    if (err?.stack) {
      this.stack = err.stack;
    }
  }
}
