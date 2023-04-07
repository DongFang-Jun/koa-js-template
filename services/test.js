const { Test } = require('../models')
module.exports = {
  listService: (id) => {
    return Test.findOne({ where: { id } })
  }
}
