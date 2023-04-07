const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec

let controllers = {}
function readFileList(dir) {
  const files = fs.readdirSync(dir)
  files.forEach((item, index) => {
    if (item === 'index.js') return

    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      readFileList(path.join(dir, item))
    } else {
      let temp = fullPath.split(__dirname + '/')[1]
      let obj_temp = temp.replaceAll('/', '_').split('.js')[0]
      controllers[obj_temp] = require(`./${temp}`)
    }
  })
}
readFileList(__dirname)

module.exports = controllers
