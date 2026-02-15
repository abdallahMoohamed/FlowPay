export default () => ({
  applicationName: 'FlowPay',
  version: process.env.VERSION || 'latest',
  env: process.env.ENV_NAME,
  NODE_ENV: 'dev',
  port: parseInt(process.env.PORT, 10) || 3000,
  logLevel: 'debug',
  baseUrl: process.env.API_BASE_URL,

  database: {
    url: process.env.MONGODB_URL,
  },
});
