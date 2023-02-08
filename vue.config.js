const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
})

// const path = require('path');
// derServer : {
//   contentBase: path.join(__dirname, ''),//설정하면 url(/src/assets") 경로 사용 가능
// }
