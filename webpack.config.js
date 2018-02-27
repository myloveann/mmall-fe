const path = require('path');

module.exports = {
  entry: './src/page/index/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
};