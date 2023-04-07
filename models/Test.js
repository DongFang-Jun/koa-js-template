const sequelize = require('../services/pool')
const { Model, DataTypes } = require('sequelize')

// 定义管理员模型
class Test extends Model {}

// 初始管理员模型
Test.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键ID'
    },

    consumption_times: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      comment: '消费次数'
    },

    consumption_amount: {
      type: DataTypes.DECIMAL(2),
      defaultValue: 0,
      comment: '消费金额'
    },

    token: {
      type: DataTypes.STRING,
      comment: '用户token',
      defaultValue: null
    },

    avatar: {
      type: DataTypes.STRING,
      comment: '微信头像',
      defaultValue: null
    },

    wx_openid: {
      type: DataTypes.STRING,
      comment: '微信openid',
      defaultValue: null
    },

    wx_unionid: {
      type: DataTypes.STRING,
      comment: '微信生态唯一id',
      defaultValue: null
    },

    project: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'game',
      comment: '项目标识'
    },

    mobile: {
      type: DataTypes.STRING,
      comment: '手机号'
    },

    password: {
      type: DataTypes.STRING,
      comment: '账号密码',
      defaultValue: '123456'
    },

    email: {
      type: DataTypes.STRING,
      comment: '邮箱',
      defaultValue: null
    }
  },
  {
    sequelize,
    modelName: 'test',
    freezeTableName: true
  }
)

module.exports = Test
