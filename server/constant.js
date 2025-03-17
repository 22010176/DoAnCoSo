const path = require('path')

const publicFolder = path.resolve(__dirname, '../public')
const viewFolder = path.resolve(publicFolder, 'dist')
const resourceFolder = path.resolve(publicFolder, 'storage')

module.exports = {
  publicFolder,
  viewFolder,
  resourceFolder
}