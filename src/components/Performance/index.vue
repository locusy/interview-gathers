<template>
    <div>
        <p>1、前端如何优化网站性能？</p>
        <p>2、衡量指标window.performance.timing是干什么的？</p>
        <p>3、如何优化SPA应用的首屏加载速度慢的问题？</p>
        <p>4、用到的谷歌调试工具的哪些功能和API</p>
    </div>
</template>

<script>
/* 
    1、前端如何优化网站性能？
    （1）减少HTTP请求数量
        在浏览器与服务器进行通信时，主要是通过 HTTP 进行通信。
        浏览器与服务器需要经过三次握手，每次握手需要花费大量时间。
        而且不同浏览器对资源文件并发请求数量有限（不同浏览器允许并发数），
        一旦HTTP请求数量达到一定数量，资源请求就存在等待状态，这是很致命的，
        因此减少HTTP的请求数量可以很大程度上对网站性能进行优化。
        
        CSS Sprites
        国内俗称CSS精灵，这是将多张图片合并成一张图片达到减少HTTP请求的一种解决方案，
        可以通过CSS的background属性来访问图片内容。
        这种方案同时还可以减少图片总字节数。
        
        合并 CSS 和 JS 文件
        现在前端有很多工程化打包工具，如：grunt、gulp、webpack等。
        为了减少 HTTP 请求数量，可以通过这些工具再发布前将多个CSS或者多个JS合并成一个文件。
        
        采用 lazyLoad
        俗称懒加载，可以控制网页上的内容在一开始无需加载，不需要发请求，等到用户操作真正需要的时候立即加载出内容。
        这样就控制了网页资源一次性请求数量。

    （2）控制资源文件加载优先级
        浏览器在加载HTML内容时，是将HTML内容从上至下依次解析，
        解析到link或者script标签就会加载href或者src对应链接内容，
        为了第一时间展示页面给用户，就需要将CSS提前加载，不要受 JS 加载影响。
        一般情况下都是CSS在头部，JS在底部。

    （3）利用浏览器缓存
        浏览器缓存是将网络资源存储在本地，等待下次请求该资源时，
        如果资源已经存在就不需要到服务器重新请求该资源，直接在本地读取该资源。

    （4）减少重排（Reflow） 
        基本原理：重排是DOM的变化影响到了元素的几何属性（宽和高），浏览器会重新计算元素的几何属性，
        会使渲染树中受到影响的部分失效，浏览器会验证 DOM 树上的所有其它结点的visibility属性，这也是Reflow低效的原因。
        如果Reflow的过于频繁，CPU使用率就会急剧上升。
        减少Reflow，如果需要在DOM操作时添加样式，尽量使用增加class属性，而不是通过style操作样式。
    （5）减少 DOM 操作
    （6）图标使用 IconFont 替换

    2、衡量指标window.performance.timing是干什么的？
        https://www.cnblogs.com/LuckyWinty/p/8053226.html
        https://www.cnblogs.com/libin-1/p/6501951.html

         .navigationStart 准备加载页面的起始时间
         .unloadEventStart 如果前一个文档和当前文档同源,返回前一个文档开始unload的时间
         .unloadEventEnd 如果前一个文档和当前文档同源,返回前一个文档开始unload结束的时间
         .redirectStart   如果有重定向,这里是重定向开始的时间.
         .redirectEnd     如果有重定向,这里是重定向结束的时间.
         .fetchStart        开始检查缓存或开始获取资源的时间
         .domainLookupStart   开始进行dns查询的时间
         .domainLookupEnd     dns查询结束的时间
         .connectStart                  开始建立连接请求资源的时间
         .connectEnd                     建立连接成功的时间.
         .secureConnectionStart      如果是https请求.返回ssl握手的时间
         .requestStart                     开始请求文档时间(包括从服务器,本地缓存请求)
         .responseStart                   接收到第一个字节的时间
         .responseEnd                      接收到最后一个字节的时间.
         .domLoading                       ‘current document readiness’ 设置为 loading的时间 (这个时候还木有开始解析文档)
         .domInteractive               文档解析结束的时间
         .domContentLoadedEventStart    DOMContentLoaded事件开始的时间
         .domContentLoadedEventEnd      DOMContentLoaded事件结束的时间
         .domComplete        current document readiness被设置 complete的时间
         .loadEventStart      触发onload事件的时间
         .loadEventEnd       onload事件结束的时间


    3、如何优化SPA应用的首屏加载速度慢的问题？
        a.将公用的JS库通过script标签外部引入，减小 app.bundel 的大小，让浏览器并行下载资源文件，提高下载速度；
        b.在配置路由时，页面和组件使用懒加载的方式引入，进一步缩小 app.bundel 的体积，在调用某个组件时再加载对应的js文件
        c.加一个首屏loading图，提升用户体验

    4、用到的谷歌调试工具的哪些功能和API
        timeline 排查内存泄漏


*/

    export default {
        
    }
</script>

<style lang="less" scoped>

</style>