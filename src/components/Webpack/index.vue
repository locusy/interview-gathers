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
      <p>19、有没有写过webpack的loader，它的原理以及什么</p>
      <p>20、babel把es6转换成es5这类的原理是什么</p>
    </div>
</template>

<script>
/*
    1、排除打包文件的办法

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
        通过plugin（插件）webpack可以实 loader 所不能完成的复杂功能，使用 plugin 丰富的自定义 API 以及生命周期事件，可以控制 webpack 打包流程的每个环节，实现对 webpack 的自定义功能扩展。

    5、webpack编译打包的过程
      读取文件，分析模块依赖
      对模块进行解析执行（深度遍历）
      针对不同的模块使用不同的 loader
      编译模块，生成抽象语法树（AST）
      遍历 AST，输出 JS

    6、webpack打包之后生成哪些文件

    7、webpack打包出来的文件体积过大怎么办

    8、怎么将js文件打包成多个js文件
    9、webpack热部署的原理
    10、webpack打包速度过慢怎么办？

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

    16、webpack的入口问津怎么配置，多个入口如何分割。

    17、Babel插件transform-runtime以及stage-2说一下他们的作用

    18、webpack配置用到webpack.optimize.UglifyJsPlugin这个插件

    19、有没有写过webpack的loader，它的原理以及什么

    20、babel把es6转换成es5这类的原理是什么
*/
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>