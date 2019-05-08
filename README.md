<div align="center">
  <h1>MultiHTML Webpack Plugin</h1>
</div>
<p>在html-webpack-plugin的基础上，添加了multihtmlCache参数，在配置多入口时设置为true，可缓存未更新的页面，以此解决编译速度慢的问题。</p>

<h2 align="center">安装</h2>


```bash
  npm i --save-dev multihtml-webpack-plugin
```

```bash
  yarn add --dev multihtml-webpack-plugin
```
 

<h2 align="center">使用</h2>

### `配置多入口文件`

**webpack.config.js**
```js
const HtmlWebpackPlugin = require('multihtml-webpack-plugin')
module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      multihtmlCache: true, // 设置多入口缓存，默认false
      ...其他配置
    }), // Generates default index.html
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'test.html',
      template: 'src/assets/test.html',
      multihtmlCache: true, // 设置多入口缓存，默认false
      ...其他配置
    })
  ]
}
```

其他配置请参考html-webpack-plugin。