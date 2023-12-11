import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1701238588295_9977',
  koa: {
    port: 7001,
  },
  jwt: {
    secret: 'zy-galaxy', // fs.readFileSync('xxxxx.key')
    expiresIn: '2h', // https://github.com/vercel/ms
  },
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'midway_test',
        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,
        // 或者扫描形式
        entities: ['**/entity/*.entity{.ts,.js}'],
      },
    },
  },
  view: {
    defaultViewEngine: 'nunjucks',
  },
} as MidwayConfig;
