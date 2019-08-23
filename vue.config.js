const package = require('./package.json');

process.env.VUE_APP_VERSION = package ? package.version : '1.0.0';

module.exports = {
  devServer: {
    port: 8080
  }
};
