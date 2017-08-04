const path = require('path');

module.exports = {
  PORT: '3000',
  HOST: '0.0.0.0',
  PATH: {
    src: path.resolve(process.cwd(), "src"),
    srcIndex: path.resolve(process.cwd(), "src/index.js"),
    build: path.resolve(process.cwd(), "build"),
    projectRoot: path.resolve(process.cwd()),
    nodeModules: path.resolve(process.cwd(), "node_modules"),
  }
}
