module.exports = {
  FIXED_KEY: {
    port: '3232'
  },

  JWT: {
    secret: 'secret',
    expires: 60 * 60 * 24 * 30 // 30天
  },

  ENV: {
    development: 'development',
    production: 'production'
  },

  DATABASE: {
    development: {
      dbName: 'test',
      user: 'root',
      password: '8322640.wjj',
      host: 'localhost',
      port: 3306
    },
    production: {
      dbName: 'test',
      user: 'root',
      password: '8322640.wjj',
      host: 'localhost',
      port: 3306
    }
  }
}
