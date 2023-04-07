const { Sequelize } = require('sequelize')
const { DATABASE, ENV } = require('../config/config')
const { logger } = require('../logs/log')

const { dbName, user, password, host, port } =
  process.env.NODE_ENV === ENV.production ? DATABASE.production : DATABASE.development

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host: host,
  port: port,
  timezone: '+08:00',
  logging: false,
  define: {
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    // 把驼峰命名转换为下划线
    underscored: true
  }
})

// 创建模型
sequelize.sync({ force: false, alter: true })

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    logger.error(err.message)
  })

module.exports = sequelize
