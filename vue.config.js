const path = require('path');
// const SkeletonWebpackPlugin = require('../../lib');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
  configureWebpack: (config)=>{
    // console.log(config);
    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: path.join(__dirname, './src/skeleton.js'),
        },
      },
      minimize: true,
      quiet: true,
    }))
    
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "@/common.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },

};
