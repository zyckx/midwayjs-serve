/**
 * @description UserEntity-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export interface WeatherInfo {
  weatherinfo: {
    city: string;
    cityid: string;
    temp: string;
    WD: string;
    WS: string;
    SD: string;
    AP: string;
    njd: string;
    WSE: string;
    time: string;
    sm: string;
    isRadar: string;
    Radar: string;
  };
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
