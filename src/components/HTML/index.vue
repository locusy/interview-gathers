<template>
    <div>
       <span>123</span>
    </div>
</template>

<script>
/*
    页面布局面试题 

    1、iframe有那些缺点？
      (1) iframe会阻塞主页面的Onload事件；
      (2) 搜索引擎的检索程序无法解读这种页面，不利于SEO;
      (3) iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
      (4) 使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，
          这样可以绕开以上两个问题。

    2、行内标签有哪些，特征

    3、块级标签有哪些，特征

    4、img是inline标签？为什么可以设置宽高呢？
      img有个src的属性
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

    5、span标签设置padding或着margin会生效吗
      (1) span标签是一个内联元素, 只能容纳文本或者其他内联元素；
      (2) 和其他内联元素一样,内联元素的宽度和高度就是包含的文字或图片的宽度和高度
      (3) 给span标签设置高height、宽width、上下内边距(padding-top/bottom)、上下外边距(margin-top/bottom)都是不起作用的。 
      给span标签设置左右内边距(padding-left/right)、左右外边距(margin-left/right)、行高(line-height)是有效的。

    6、p标签有哪些特征

    7、vedio标签
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
        //苹果微信适配
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

    8、比较 HTML XML XHTML 和 JSON
      我们最熟悉的就是 HTML（HyperText Markup Language / 超文本标记语言），用来描述和定义 网络内容的标记语言，
      超文本的意思是说，除了能标记本文，还能标记 图片，视频，链接 等其他内容

      XML（Extensible Markup Language / 可扩展标记语言），表现就是给一堆文档加上标签，说明里面的数据是什么意思，
      方便存储、传输、分享数据。
      和 HTML 的区别是 HTML 的标签就预定义的，XML 是可扩展的 XHTML: 
      Extensible Hypertext Markup Language / 可扩展超文本标记语，其实就是 HTML 的严格语法形式，
      约定了 属性名必需小写，空元素必需关闭，元素名小写，属性名必需加引号，布尔类型必需加属性值

      JSON（Javascript Object Notation）比较轻量级的数据交换格式，由键值对组成，数据格式比较简单, 
        易于读写, 格式都是压缩的, 占用带宽小

    4、请描述img的title和alt的区别。
    5、请简述一下src与href的区别。

  */


    export default {
        
    }
</script>

<style lang="less" scoped>

</style>