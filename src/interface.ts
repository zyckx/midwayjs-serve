/**
 * @description UserEntity-Service parameters
 */
export interface IUserOptions {
  uid: number;
}
export interface IRegisterParams {
  username: string;
  password: string;
  confirmPassword: string;
}
export interface ILoginParams {
  username: string;
  password: string;
}

export interface Error {
  message: string;
  code: string;
  stack?: string;
  cause?: string;
  status: number | string;
}
