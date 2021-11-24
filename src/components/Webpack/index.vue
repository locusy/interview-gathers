<template>
    <div>
      <p>1、排除打包文件的办法</p>
      <p>2、模块化解决了前端的哪些痛点</p>
      <p>3、webpack和其他自动化构建工具（gulp、grunt、rollup）有哪些区别</p>
      <p>4、webpack的loader和plugin区别，举几个常用的loader和plugin并说出作用</p>
      <p>5、webpack编译打包的过程</p>
      <p>6、webpack打包之后生成哪些文件</p>
      <p>7、webpack打包出来的文件体积过大怎么办</p>
      <p>8、怎么将js文件打包成多个js文件</p>
      <p>9、webpack热部署的原理</p>
      <p>10、webpack打包速度过慢怎么办？</p>
      <p>11、less-loader实现原理（商汤科技）</p>
      <p>12、压缩js代码是怎么实现优化性能的？（商汤科技）</p>
      <p>13、tree-shakeing是如何干掉无用重复的代码的？</p>
      <p>14、有没有去研究webpack的一些原理和机制，怎么实现的</p>
      <p>15、构建性能有哪些</p>
      <p>16、webpack的入口问津怎么配置，多个入口如何分割。</p>
      <p>17、Babel插件transform-runtime以及stage-2说一下他们的作用</p>
      <p>18、webpack配置用到webpack.optimize.UglifyJsPlugin这个插件</p>
      <p>19、babel把es6转换成es5这类的原理是什么</p>
    </div>
</template>

<script>
/*
    1、排除打包文件的办法
      https://juejin.cn/post/6844903825250189319
      (1)排除某个模块
        使用引入外部模块的方式
        externals: {
          jquery: "jQuery"
        },

      (2)忽略依赖库的解析
        module: {
          noParse: /jquery|lodash/, //不去解析jquery | lodash 中的依赖库
        }

      (3)解析时指定和排除查找目录
        rules:[
          {
            test:/\.js$/,
            exclude:/node_modules/, // 解析不包含的目录,两者写其一即可
            include:path.resolve('src'), // 即系包含的目录,两者写其一即可
            use:{...}
          }
        ]

      (4)指定目录不打包:IgnorePlugin使用
        let Webpack = require('webpack');
        plugins:[
          new Webpack.IgnorePlugin(/\.\/locale/,/moment/)
        ]

      (5)DllPlugin动态链接库
        将react和react-dom单独打包好，然后动态链接引入即可。
        如果第二次打包，那么发现react和react-dom已经被打包好了，那么直接找到打包好的文件，不需要再次打包
        let path = require('path');
        let webpack = require('webpack');
        module.exports = {
          mode:'development',
          entry:{
            react:['react','react-dom']
          },
          output:{
            filename:'_dll_[name].js',//产生的文件名_dll_react.js 
            path:path.resolve(__dirname,'dist'),
            library:'_dll_[name]',//_dll_react // 
            // libraryTarget:'var',
          },
          plugins:[
            new webpack.DllPlugin({
              name:'_dll_[name]',//这个name要与output中的library同名
              path:path.resolve(__dirname,'dist','manifest.json')
            })
          ]
        }
        引入：
        <!DOCTYPE html>
          <html>
          <head>
            <title></title>
          </head>
          <body>
            <div id="root"></div>
            <script type="text/javascript" src="/_dll_react.js"></script>
          </body>
        </html>


      (6)抽离公共代码
        如果将这些公共代码抽取出来，并让浏览器缓存起来，用户在请求资源的时候，
        可以直接读取缓存中的这些代码，这样就能解决以上问题。
        使用optimization的splitChunks属性


    2、模块化解决了前端的哪些痛点
      命名冲突
      文件依赖
      代码复用

    3、webpack和其他自动化构建工具（gulp、grunt、rollup）有哪些区别
      webpack 是 module bundle
      gulp 是 tast runner
      Rollup 是在 Webpack 流行后出现的替代品。
      Rollup 在用于打包 JavaScript 库时比 Webpack 更加有优势，因为其打包出来的代码更小更快。 
      但功能不够完善，很多场景都找不到现成的解决方案。

      webpack和gulp的区别
      https://www.cnblogs.com/iovec/p/7921177.html
      https://www.cnblogs.com/lovesong/p/6413546.html  
    
    4、webpack的loader和plugin区别，举几个常用的loader和plugin并说出作用
      loader：
        用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。
        因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。
        loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。
        loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！
        因为 webpack 本身只能处理 JavaScript，如果要处理其他类型的文件，就需要使用 loader 进行转换，
        loader 本身就是一个函数，接受源文件为参数，返回转换的结果。
      Plugin：
        是用来扩展 Webpack 功能的，通过在构建流程里注入钩子实现，它给 Webpack 带来了很大的灵活性。
        通过plugin（插件）webpack可以实 loader 所不能完成的复杂功能，
        使用 plugin 丰富的自定义 API 以及生命周期事件，可以控制 webpack 打包流程的每个环节，
        实现对 webpack 的自定义功能扩展。

    5、webpack编译打包的过程
      读取文件，分析模块依赖
      对模块进行解析执行（深度遍历）
      针对不同的模块使用不同的 loader
      编译模块，生成抽象语法树（AST）
      遍历 AST，输出 JS

    6、webpack打包之后生成哪些文件
      html
      css
      js 压缩后的bundle.js  有一个参数modules为一个数组，包含了我们所有要打包的模块

    7、webpack打包出来的文件体积过大怎么办
    https://www.jianshu.com/p/a64735eb0e2b
    https://juejin.cn/post/6844903569917739021
    (1)去除不必要的插件
      开发环境和生产环境用的是同一个 webpack 配置文件，导致生产环境打包的 JS 文件包含了一大堆没必要的插件，
      比如 HotModuleReplacementPlugin, NoErrorsPlugin
    (2)提取第三方库
      *比如react的使用
      {
        entry: {
        bundle: 'app'
          vendor: ['react']
        }

        plugins: {
          new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
        }
      }
      打包后会生成一个vendor.js，在index.html引用
      <script src="/build/vendor.js"></script>
      <script src="/build/bundle.js"></script>

      *或者引用外部文件的方式引入第三方库
      {
        externals: {
          'react': 'React'
        }
      }
      externals 对象的 key 是给 require 时用的，比如 require('react')，
      对象的 value 表示的是如何在 global 中访问到该对象，这里是 window.React，
      这时候 index.html 就变成下面这样
      <script src="//cdn.bootcss.com/react/0.14.7/react.min.js"></script>
      <script src="/build/bundle.js"></script>
    (3)代码压缩
      {
        plugins: [
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
          })
        ]
      }
    (4)开启gzip压缩
     const CompressionPlugin = require("compression-webpack-plugin");
      plugins:[
        new CompressionPlugin({
          asset: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
          algorithm: 'gzip',//算法
          test: new RegExp(
                '\\.(js|css)$'    //压缩 js 与 css
          ),
          threshold: 10240,//只处理比这个值大的资源。按字节计算
          minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
        })
      ]
    (5)开启html压缩，自动添加上面生成的静态资源
      npm install html-webpack-plugin --save-dev
      plugins:[
        new HtmlWebpackPlugin({
            title: '',
              template: __dirname + '/../public/index.html',
              minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
              },
              chunksSortMode:'dependency'
          }),
      ]
    (6)代码分割
      code split 
    (7)设置缓存
      output: {
        path: xxx,
        publicPath: yyy,
        filename: '[name]-[chunkhash:6].js'
      }
      打包后的文件名加入了 hash 值

    8、怎么将js文件打包成多个js文件
      （1）多入口模式和splitChunks配合,可以将js拆分成多个,并且可以将node_modules中代码单独打包,
      公共的文件打包成单独一个chunk
      （2）单入口模式和splitChunks配合,可以将node_modules中代码单独打包
      （3）单入口模式和splitChunks加上在js中用import动态导入语法,能将某个文件单独打包,
      并且可以将node_modules中代码单独打包

      const { resolve } = require('path');
      const HtmlWebpackPlugin = require('html-webpack-plugin');
      module.exports = {
      // 单入口
      // entry: './src/js/index.js',
      
      //多入口
      entry: {
          index: './src/js/index.js',
          test: './src/js/test.js'
      },
      output: {
          // [name]：取文件名
          filename: 'js/[name].[contenthash:10].js',
          path: resolve(__dirname, 'build')
      },
      plugins: [
          new HtmlWebpackPlugin({
          template: './src/index.html',
          minify: {
              collapseWhitespace: true,
              removeComments: true
          }
          })
      ],
        //   1. 可以将node_modules中代码单独打包一个chunk最终输出
          // 2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk
      optimization: {
          splitChunks: {
          chunks: 'all'
          }
      },
      mode: 'production'
      };


      index.js中分离js方式
      // 通过js代码，让某个文件被单独打包成一个chunk
      // import动态导入语法：能将某个文件单独打包
      //  webpackChunkName: 'test'  在js中给分离出去的js命名
        import(/ webpackChunkName: 'test' /'./test')
        .then(({ mul, count }) => {
            // 文件加载成功~
            // eslint-disable-next-line
            console.log(mul(2, 5));
        })
        .catch(() => {
            // eslint-disable-next-line
            console.log('文件加载失败~');
        });


    9、webpack热部署的原理
      https://juejin.cn/post/6844904008432222215

    10、webpack打包速度过慢怎么办？
    https://juejin.cn/post/6844904071736852487

    11、less-loader实现原理（商汤科技）
        less是怎么编译成css文件的
        
    12、压缩js代码是怎么实现优化性能的？（商汤科技）
        减少空格和注释
        主要是将变量和函数名称用简单的字符代替  比如a b c d等

    13、tree-shakeing是如何干掉无用重复的代码的？
        https://webpack.docschina.org/guides/tree-shaking/
        tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)

    14、有没有去研究webpack的一些原理和机制，怎么实现的?
      a. 解析webpack配置参数，合并从shell传入和webpack.config.js文件里配置的参数，生产最后的配置结果。
      b. 注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应。
      c. 从配置的entry入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。
      d. 在解析文件递归的过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换。
      e. 递归完后得到每个文件的最终结果，根据entry配置生成代码块chunk。
      f. 输出所有chunk到文件系统。

    15、构建性能有哪些
        https://webpack.docschina.org/guides/build-performance/
        
        (1)更新到最新版本 node npm/yarn
        (2)loader: 使用 include 字段仅将 loader 应用在实际需要将其转换的模块所处路径
            rules: [
              {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
              }
            ]
        (3)引导时间: 每个额外的 loader/plugin 都有其启动时间。尽量少使用工具
        (4)小即是快: 减少编译结果的整体大小，以提高构建性能。尽量保持 chunk 体积小。
        (5)自定义 plugin/loader

        ...剩余见官网

    16、webpack的入口文件怎么配置，多个入口如何分割。
        entry: {
            'index1': './src/index1.js',
            'index2': './src/index2.js',
            'index3': './src/index3.js'
        },

        plugins: [
            new CleanWebpackPlugin(['distribution']),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerMode: 'static',
                reportFilename: 'bundle-analyzer-report.html'
            }),
            new HtmlWebpackPlugin({
                template: './src/index1.html',
                filename: 'index1.html'
            }),
            new HtmlWebpackPlugin({
                template: './src/index2.html',
                filename: 'index2.html'
            }),
            new HtmlWebpackPlugin({
                template: './src/index3.html',
                filename: 'index3.html'
            }),
            new webpack.HashedModuleIdsPlugin()
        ]

    17、Babel插件transform-runtime以及stage-2说一下他们的作用
      https://babel.docschina.org/docs/en/6.26.3/babel-preset-stage-2/
      @babel/plugin-transform-runtime 的作用是转译代码，转译后的代码中可能会引入 
      @babel/runtime-corejs3 里面的模块。
      所以前者运行在编译时，后者运行在运行时。
      类似 polyfill，后者需要被打包到最终产物里在浏览器中运行。

    18、webpack配置用到webpack.optimize.UglifyJsPlugin这个插件
      代码压缩

    19、babel把es6转换成es5这类的原理是什么
      https://juejin.cn/post/6992501845755183135
      第一步主要是将 ES6 语法解析为 AST 抽象语法树
      第二步是将打散的 AST 语法通过配置好的 plugins（babel-traverse 对 AST 进行遍历转译）和 
      presets （es2015 / es2016 / es2017 / env / stage-0 / stage-4 
      其中 es20xx 表示转换成该年份批准的标准，
      env 是最新标准，stage-0 和 stage-4 是实验版）转换成新的 AST 语法。
      第三步是将新的 AST 语法树对象再生成浏览器都可以识别的 ES5 语法

*/
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>