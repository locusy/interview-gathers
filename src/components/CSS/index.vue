<template>
    <div class="center">
      <div class="innerbox">1231</div>
      <div class="innerbox">1231</div>
      <div class="innerbox">1231</div>
      <div class="innerbox">1231</div>
  </div>
</template>

<script>
/* 
      1、垂直居中方案：
        1) 父元素：display: flex
           子元素：justify-content
                  align-items
        2) 子元素：position: absolute;
                  上下左右0
                  margin: auto
                  这种方法需要设置宽高
        3) 父元素：position: relative;
           子元素：position: absolute
                  left: 50%
                  top: 50%
                  transform:translate(-50%,-50%)
        4) 父元素：display: relative;
           子元素：display: absolute;
                  left: 50%;
                  top: 50%;
                  margin-left: -50%;
                  margin-right: -50%
                  这种方法需要算出宽高
        4) 父元素：display: table;
           子元素：display: table-cell;
                  text-align: center;
                  vertical-align: middle;

      2、对BFC规范(块级格式化上下文：block formatting context)的理解
        BFC规定了内部的Block Box如何布局。
        定位方案：
        内部的Box会在垂直方向上一个接一个放置。
        Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。
        每个元素的margin box 的左边，与包含块border box的左边相接触。
        BFC的区域不会与float box重叠（解决清楚浮动的问题）。
        BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
        计算BFC的高度时，浮动元素也会参与计算。

        满足下列条件之一就可触发BFC：
        根元素，即html
        float的值不为none（默认）
        overflow的值不为visible（默认）
        display的值为inline-block、table-cell、table-caption
        position的值为absolute或fixed

      3、BFC左右margin会重叠吗？
        不会
        如果是两个浮动的元素并排。则是两个不同的BFC。

      3、解决上下margin重合的问题
        在重合元素外包裹一层容器，并触发该容器生成一个BFC，例子：
        <div class="aside"></div>
        <div class="text">
            <div class="main"></div>
        </div>
        <!--下面是css代码-->
        .aside {
            margin-bottom: 100px;  
            width: 100px;
            height: 150px;
            background: #f66;
        }
        .main {
            margin-top: 100px;
            height: 200px;
            background: #fcc;
        }
        .text{
            //盒子main的外面包一个div，通过改变此div的属性使两个盒子分属于两个不同的BFC，以此来阻止margin重叠
            overflow: hidden;  //此时已经触发了BFC属性。
        }

      4、浏览器是怎样解析CSS选择器的？
        CSS选择器的解析是从右向左解析的。
        若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。
        若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。
        两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。
        而在 CSS 解析完毕后，需要将解析的结果与DOM Tree的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。
        在建立 Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。

      5、元素竖向的百分比设定是相对于容器的高度吗？
        当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，
        但是，对于一些表示竖向距离的属性，例如 padding-top , padding-bottom , margin-top , margin-bottom 等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。

      6、视差滚动效果？
        视差滚动（Parallax Scrolling）通过在网页向下滚动的时候，
          控制背景的移动速度比前景的移动速度慢来创建出令人惊叹的3D效果。
        CSS3实现
          优点：开发时间短、性能和开发效率比较好，缺点是不能兼容到低版本的浏览器
        jQuery实现
          通过控制不同层滚动速度，计算每一层的时间，控制滚动效果。
          优点：能兼容到各个版本的，效果可控性好
          缺点：开发起来对制作者要求高
          插件实现方式
          例如：parallax-scrolling，兼容性十分好

      7、::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用
        单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
        ::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。
        :before 和 :after 这两个伪元素，是在CSS2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after

      8、怎么让Chrome支持小于12px 的文字？
        p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例

      9、让页面里的字体变清晰，变细用CSS怎么做？
        -webkit-font-smoothing在window系统下没有起作用，但是在IOS设备上起作用-webkit-font-smoothing：antialiased是最佳的，灰度平滑。

      10、如果需要手动写动画，你认为最小时间间隔是多久，为什么？
        多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms

      11、li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
        行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。
        解决方法：
        可以将<li>代码全部写在一排
        浮动li中float：left
        在ul中用font-size：0（谷歌不支持）；可以使用letter-space：-3px

      12、display:inline-block 什么时候会显示间隙？
        有空格时候会有间隙  解决：移除空格
        margin正值的时候  解决：margin使用负值
        使用font-size时候 解决：font-size:0、letter-spacing、word-spacing

      13、有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度
        外层div使用position：relative；
        高度要求自适应的div使用position: absolute; top: 100px; bottom: 0; left: 0
      
      14、png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
        png是便携式网络图片（Portable Network Graphics）是一种无损数据压缩位图文件格式.
        优点是：压缩比高，色彩好。 大多数地方都可以用。
        jpg是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，在色调及颜色平滑变化做的不错。
        在www上，被用来储存和传输照片的格式。
        gif是一种位图文件格式，以8位色重现真色彩的图像。可以实现动画效果.
        webp格式是谷歌在2010年推出的图片格式，压缩率只有jpg的2/3，大小比png小了45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和opera支持。
      
      15、a标签上四个伪类的执行顺序是怎么样的？
        link > visited > hover > active
        love hate

      16、css选择器有哪些？（商汤科技）
          http://www.ruanyifeng.com/blog/2009/03/css_selectors.html
          （1）基本的选择器
              * 通用选择器
              标签选择器
              ID选择器
              class选择器
          （2）多元素的组合选择器
              div+div 
              div>div
              div,div
              div div
          （3）属性选择器
              p[title] { color:#f00; }
              div[class=error] { color:#f00; }
              td[headers~=col1] { color:#f00; }
              p[lang|=en] { color:#f00; }
              blockquote[class=quote][cite] { color:#f00; } 
          （4）伪类
              E:link	匹配所有未被点击的链接
              E:visited	匹配所有已被点击的链接
              E:active	匹配鼠标已经其上按下、还没有释放的E元素
              E:hover	匹配鼠标悬停其上的E元素
          （5）伪元素
              E:before
              E:after

      15、css选择符的优先级？
         https://segmentfault.com/a/1190000003723406
          !important
          内联(1,0,0,0)
          id: (0,1,0,0)
          类：(0,0,1,0)
          伪类/属性
          元素：(0,0,0,1)
          通配符

      17、css动画和js动画的差别？（商汤科技）
        （1）代码复杂度方面，简单动画，css 代码实现会简单一些，js 复杂一些。复杂动画的话，css 代码就会变得冗长，js实现起来更优。
        （2）动画运行时，对动画的控制程度上，js 比较灵活，能控制动画暂停，取消，终止等，
            css动画不能添加事件，只能设置固定节点进行什么样的过渡动画。
        （3）兼容方面，css 有浏览器兼容问题，js 大多情况下是没有的。
        （4）性能方面，css动画相对于优一些，css 动画通过GUI解析，js动画需要经过js引擎代码解析，然后再进行 GUI 解析渲染。

      18、transition动画（商汤科技）
          transition-property 指出了需要应用动画的属性
          tansition-duration 指定动画的过渡时间
          transition-delay 定义了从属性改变到变换开始之间的间隔时间
          .box {
            -webkit-transition-property: width, height, background-color, -webkit-transform;
            transition-property: width, height, background-color, transform;
            
            -webkit-transition-duration: 2s;
            tansition-duration: 2s;
          }
          相当于：
          .box{ transition: width 2s, height 2s, background-color 2s, transform 2s;}

      19、css盒模型（高频考点）（商汤科技）
         （1）W3C 标准盒模型：box-sizing: content-box
            属性width,height只包含内容content，不包含border和padding。
         （2）IE 盒模型：box-sizing: border-box
            属性width,height包含border和padding，指的是content+padding+border。

          content-box（标准盒模型）:
            width = 内容的宽度
            height = 内容的高度
          border-box（IE盒模型）:
            width = border + padding + 内容的宽度
            height = border + padding + 内容的高度

      20、Rem实现代码
          onresize
          html

      21、如何解决屏幕很大的时候的适配问题（商汤科技）
          用rem无法兼容pc端
          用百分比不够精确
          那除了用media媒体查询外还能用什么方式呢？

      22、如何在页面上画一个圆
          SVG
          CANVAS
          css border-radius
          background
          map + area
          直接放一张圆形图片

      23、你会用less，那么怎么写一个loader？

      24、清除浮动的方法：
          1）给父级也加浮动
          2）给父级加display:inline-block
          3）在浮动元素下加<div class="clear"></div>
            .clear{ height:0px;font-size:0;clear:both;}
          4）在浮动元素下加<br clear="all"/>
          5）给浮动元素的父级加{zoom:1;}
            :after{content:""; display:block;clear:both;}
          6）overflow:hidden/auto 创建一个bfc
          7) 给父级加position:fixed/absolute

      25.如何隐藏和显示DOM元素,有几种方法,每种方法的区别是?
          https://juejin.im/post/584b645a128fe10058a0d625

          opacity:0；  占据空间 
          visibility:hidden  占据空间
          display:none 不占据空间
          z-index:-1000  不占据空间 
          transform:scaleY(0)   占据空间

          overflow:hidden  隐藏溢出部分
          position:absolute  
          clip(clip-path):rect()/inset()/polygon()

      26、flex有哪些属性
          
    */

    export default {
        
    }
</script>

<style lang="less" scoped>
.center{
    display: flex;
}
.innerbox{

}
</style>