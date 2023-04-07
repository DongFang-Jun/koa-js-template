const { ENV } = require('./config')

module.exports = {
  apps: [
    {
      name: 'production', //需与package.json里--only 后缀名相同
      script: './bin/www',
      args: 'one two',
      instances: 1,
      cron_restart: '0 03 * * *',
      autorestart: true,
      watch: true,
      ignore_watch: [
        // 不用监听的文件
        'node_modules',
        '.idea',
        'log'
      ],
      max_memory_restart: '300M',
      env: {
        NODE_ENV: ENV.production //process.env.NODE_ENV值
      }
    },
    {
      name: 'test', //需与package.json里--only 后缀名相同
      script: './bin/www',
      args: 'one two',
      instances: 1,
      cron_restart: '0 03 * * *',
      autorestart: true,
      watch: true,
      ignore_watch: [
        // 不用监听的文件
        'node_modules',
        '.idea',
        'log'
      ],
      max_memory_restart: '300M',
      env: {
        NODE_ENV: ENV.development //process.env.NODE_ENV值
      }
    }
  ]
}
