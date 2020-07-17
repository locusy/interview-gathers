<template>
    <div>
       <p>1、iframe有那些特点？</p>
       <p>2、行内标签、块级标签有哪些，特征</p>
       <p>3、img是inline标签？为什么可以设置宽高呢？</p>
       <p>4、span标签设置padding或着margin会生效吗</p>
       <p>5、vedio标签</p>
       <p>6、比较 HTML XML XHTML 和 JSON</p>
       <p>7、请描述img的title和alt的区别。</p>
       <p>8、请简述一下src与href的区别。</p>
       <p>9、描述浏览器重绘和回流，哪些方法能够改善由于dom操作产生的回流</p>
    </div>
</template>

<script>

/*
    1、iframe有那些特点？
      缺点：
      1.iframe会阻塞主页面的Onload事件；
      2.搜索引擎的检索程序无法解读这种页面，不利于SEO;
      3.iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
       使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以绕开以上两个问题。
      4.会产生很多页面，不容易管理。
      5.在几个框架中都出现上下、左右滚动条时，这些滚动条除了会挤占已经非常有限的页面空间外，还会分散访问者的注意力。
      6.使用框架结构时，必须保证正确设置所有的导航链接，否则会给访问者带来很大的麻烦。比如被链接的页面出现在导航框架内，这种情况下会导致链接死循环。
      7.很多的移动设备（PDA手机）无法完全显示框架，设备兼容性差。
      8.iframe框架页面会增加服务器的http请求，对于大型网站是不可取的。

      优点：
      1.iframe能够原封不动地把嵌入的网页展现出来。
      2.如果有多个网页调用iframe，只需要修改iframe的内容，就可以实现对调用iframe的每一个页面内容的更改，方便快捷。
      3.网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用性。
      4.如果遇到加载缓慢的第三方内容，如图标和广告等，可以用iframe来解决。

    2、行内标签、块级标签有哪些，特征
        https://juejin.im/post/5cd31cf951882535b778184c

    3、img是inline标签？为什么可以设置宽高呢？
      因为<img>、<input>属于替换元素，替换元素一般有内在尺寸和宽高比(auto时起作用)，所以具有width和height，可以设定。
      https://juejin.im/post/5a1b7319f265da43333e1d60

      从元素本身的特点来讲，可以分为替换和不可替换元素。
        a) 替换元素：
          浏览器根据元素的标签和属性，来决定元素的具体显示内容。
          复制代码例如浏览器会根据<img>标签的src属性的值来读取图片信息并显示出来;
          根据<input>标签的type属性来决定是显示输入框，还是单选按钮等。
          HTML中的<img>、<input>、<textarea>、<select>都是替换元素。
          这些元素往往没有实际的内容，即是一个空元素,浏览器会根据元素的标签类型和属性来显示这些元素。
        b) 不可替换元素：
          HTML的大多数元素是不可替换元素，即其内容直接表现给用户端（例如浏览器）。
          复制代码例如<p>段落的内容</p>，段落<p>是一个不可替换元素，文字“段落的内容”全被显示。

    4、span标签设置padding或着margin会生效吗
      (1) span标签是一个内联元素, 只能容纳文本或者其他内联元素；
      (2) 和其他内联元素一样,内联元素的宽度和高度就是包含的文字或图片的宽度和高度
      (3) 给span标签设置高height、宽width、上下内边距(padding-top/bottom)、上下外边距(margin-top/bottom)都是不起作用的。 
      给span标签设置左右内边距(padding-left/right)、左右外边距(margin-left/right)、行高(line-height)是有效的。

    5、vedio标签
      静音、自动播放等

      http://www.w3school.com.cn/html5/html5_ref_audio_video_dom.asp
      https://www.cnblogs.com/baiyygynui/p/6323565.html

      poster：iOS，安卓，微信浏览器
      <video 
        ref='video' 
        id="video"  
        @click.once="startVideo"
        @canplaythrough='handleVideoCanplaythrough' 
        @ended='handleVideoEnd'
        :poster='posterSrc'  //区分iOS和安卓
        style="object-fit:fill;" 
        autoplay='autoplay'  
        playsinline 
        controls="controls" 
        preload="auto" 
        x-webkit-airplay="allow"  
        x5-video-player-type="h5" 
        x5-video-player-fullscreen="true" 
        webkit-playsinline
        x5-playsinline  
        x5-video-orientation='portraint' 
        src="/static/video/h5.mp4"
      ></video>

      微信浏览器自动播放：
        document.addEventListener("WeixinJSBridgeReady", function(){
        苹果微信适配:
        var video = document.getElementById('video');
        if(video){
          video.play();
          video.pause();
        }
        var audio = document.getElementById('Jaudio');
        if(audio){
          audio.play();
          audio.pause();
        }
      });

    6、比较 HTML XML XHTML 和 JSON
      我们最熟悉的就是 HTML（HyperText Markup Language / 超文本标记语言），用来描述和定义 网络内容的标记语言，
      超文本的意思是说，除了能标记本文，还能标记 图片，视频，链接 等其他内容

      XML（Extensible Markup Language / 可扩展标记语言），表现就是给一堆文档加上标签，说明里面的数据是什么意思，
      方便存储、传输、分享数据。
      和 HTML 的区别是 HTML 的标签就预定义的，XML 是可扩展的 XHTML: 
      Extensible Hypertext Markup Language / 可扩展超文本标记语，其实就是 HTML 的严格语法形式，
      约定了 属性名必需小写，空元素必需关闭，元素名小写，属性名必需加引号，布尔类型必需加属性值

      JSON（Javascript Object Notation）比较轻量级的数据交换格式，由键值对组成，数据格式比较简单, 
        易于读写, 格式都是压缩的, 占用带宽小

    7、请描述img的title和alt的区别。
      alt属性，是<img>的特有属性，是图片内容的等价描述，用于图片无法加载时显示或读屏器阅读图片（帮助盲人了解图片内容）。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。
      作用是当无法显示文档中的图片是，可以为浏览者提供文字说明，是用来替代图片的，而不是提供额外说明文字的
      
      title属性是global attribute之一，作用是提供建议性的信息，通常是鼠标滑动到元素上是显示。
*/

  // 8、请简述一下src与href的区别。
  //   src用于替换当前元素，href用于在当前文档和引用资源之间确立联系。
  //   src是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和iframe等元素。
  //   <script src=”js.js”></script>
  //   当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

  //   href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加
  //   <link href=”common.css” rel=”stylesheet”/>
  //   那么浏览器会识别该文档为css文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用link方式来加载css，而不是使用@import方式。


/*
    9、描述浏览器重绘和回流，哪些方法能够改善由于dom操作产生的回流
      1.直接改变className，如果动态改变样式，则使用cssText
        不好的写法
        var left = 1;
        var top = 1;
        el.style.left = left + "px";
        el.style.top = top + "px"; 
        比较好的写法
        el.className += " className1";
        比较好的写法
        el.style.cssText += ";
        left: " + left + "px;
        top: " + top + "px;";

      2.让要操作的元素进行”离线处理”，处理完后一起更新
        a) 使用DocumentFragment进行缓存操作,引发一次回流和重绘；
        b) 使用display:none技术，只引发两次回流和重绘；
        c) 使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘

    10、请你描述下一个网页是如何渲染出来的，dom树和css树是如何合并的，浏览器的运行机制是什么，什么是否会造成渲染阻塞？
      



*/

  export default {
      
  }
    
</script>

<style lang="less" scoped>

</style>