const path = require('path');

module.exports = {
  output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
      libraryTarget: "umd"
  },
  externals: [
      "add",
      {
          "subtract": {
              root: "subtract",
              commonjs2: "./subtract",
              commonjs: ["./math", "subtract"],
              amd: "subtract"
          }
      }
  ]
}