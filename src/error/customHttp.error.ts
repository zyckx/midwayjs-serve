import { HttpStatus, MidwayHttpError } from '@midwayjs/core';

// export class CustomHttpError extends MidwayHttpError {
//   constructor(message: any, code = HttpStatus.BAD_REQUEST) {
//     super(message || '服务器出错啦！！！', code);
//   }
// }
export class CustomHttpError extends MidwayHttpError {
  constructor(message, status = HttpStatus.BAD_REQUEST) {
    super(message || '服务器出错啦！！！', status);
  }
}
