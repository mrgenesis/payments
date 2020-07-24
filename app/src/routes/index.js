const fs = require('fs');
const path = require('path');

const filesHere = fs.readdirSync(__dirname);
module.exports = app => {
  filesHere
    .filter(file => file !== 'index.js' && file.indexOf('.') !== -1)
    .forEach(file => require(path.resolve(__dirname, file))(app));
};