<template>
    <div>
        <p>1、讲述一下计算机网络的七层：</p>
        <p>2、TCP和UDP的区别是什么：</p>
        <p>3、TCP和UDP属于计算机网络中的哪一层：</p>
        <p>4、HTTPS是什么：</p>
        <p>5、SSL加密的原理？</p>
        <p>6、介绍几种常见的状态码：</p>
        <p>7、三次握手和四次挥手</p>
        <p>8、跨域问题的解决方案</p>
        <p>9、post和get请求</p>
        <p>10、Localstorage和session、cookie的区别</p>
        <p>11、localStorage怎么设置过期时间？(localStorage怎么设置时间限定让信息能在一定的时间范围内存储和消失？)</p>
        <p>12. 网页从输入网址到渲染完成经历了哪些过程？（必考）</p>
        <p>13、Http1.0和http2的区别</p>
        <p>14、长链接和短链接是什么</p>
        <p>15、浏览器缓存</p>
        <p>16、通信的要点和目的：</p>
        <p>17、请求头和响应头都有哪些内容</p>
        <p>18、https抓包分析</p>
        <p>19、dns解析过程</p>
        <p>20、命令行查看请求信息</p>
    </div>
</template>

<script>
/*

  1、讲述一下计算机网络的七层：
    应用层、表示层、会话层、传输层、网络层、数据链路层、物理层

  2、TCP和UDP的区别是什么：
    TCP：面向连接、传输可靠(保证数据正确性,保证数据顺序)、用于传输大量数据(流模式)、速度慢，建立连接需要开销较多(时间，系统资源)
    UDP：面向非连接、传输不可靠、用于传输少量数据(数据包模式)、速度快

    TCP和UDP协议的一些应用例子：
    TCP一般用于文件传输（FTP HTTP 对数据准确性要求高，速度可以相对慢），发送或接收邮件（POP IMAP SMTP 对数据准确性要求高，非紧急应用），远程登录（TELNET SSH 对数据准确性有一定要求，有连接的概念）等等；
    UDP一般用于即时通信（QQ聊天 对数据准确性和丢包要求比较低，但速度必须快），在线视频（RTSP 速度一定要快，保证视频连续，但是偶尔花了一个图像帧，人们还是能接受的），网络语音电话（VoIP 语音数据包一般比较小，需要高速发送，偶尔断音或串音也没有问题）等等。

  3、TCP和UDP属于计算机网络中的哪一层：
    网际层协议：IP协议、ICMP协议、ARP协议、RARP协议
    传输层协议：TCP协议、UDP协议
    应用层协议：FTP、Telnet、SMTP、HTTP、RIP、NFS、DNS

  4、HTTPS是什么： 
    HTTPS即加密的HTTP，HTTPS并不是一个新协议，而是HTTP+SSL（TLS）。
    原本HTTP先和TCP（假定传输层是TCP协议）直接通信，而加了SSL后，就变成HTTP先和SSL通信，
    再由SSL和TCP通信，相当于SSL被嵌在了HTTP和TCP之间
  
  5、SSL加密的原理？
    http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html

  6、介绍几种常见的状态码：
    2XX系列：代表请求已成功被服务器接收、理解、并接受。
      200状态码：表示请求已成功，请求所希望的响应头或数据体将随此响应返回
      201状态码：表示请求成功并且服务器创建了新的资源，且其URI已经随Location头信息返回。
    3XX系列：代表需要客户端采取进一步的操作才能完成请求，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的 Location 域中指明。
      301状态码：永久重定向，被请求的资源已永久移动到新位置。服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。
      302状态码：临时重定向，请求的资源临时从不同的URI响应请求，但请求者应继续使用原有位置来进行以后的请求。
      304状态码：服务器资源未变化。告诉浏览器可以从缓存中获取所请求的资源。自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。
    4XX系列：表示请求错误。代表了客户端看起来可能发生了错误，妨碍了服务器的处理。
      401状态码：请求要求身份验证。对于需要登录的网页，服务器可能返回此响应。
      403状态码：服务器已经理解请求，但是拒绝执行它。与401响应不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。
      404状态码：请求失败，请求所希望得到的资源未被在服务器上发现。
    5xx系列：代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。
      500状态码：服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。
      503状态码：由于临时的服务器维护或者过载，服务器当前无法处理请求。

  7、三次握手和四次挥手
    https://www.cnblogs.com/Andya/p/7272462.html

  8、跨域问题的解决方案
　　1、 通过jsonp跨域
　　2、 document.domain + iframe跨域
　　3、 location.hash + iframe
　　4、 window.name + iframe跨域
　　5、 postMessage跨域 使用HTML5中新引进的window.postMessage方法来跨域传送数据（ie 67 不支持）
　　6、 跨域资源共享（CORS）需要服务器设置header ：Access-Control-Allow-Origin。
　　7、 nginx代理跨域 这个方法一般很少有人提及，但是他可以不用目标服务器配合，不过需要你搭建一个中转nginx服务器，用于转发请求
　　8、 nodejs中间件代理跨域
　　9、 WebSocket协议跨域

  9、post和get请求
    参考博客：https://www.cnblogs.com/fundebug/p/10416234.html

  10、Localstorage和session、cookie的区别
    共同点：都是保存在浏览器端，且同源的。
    区别：
    （1）cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。
        而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。
    （2）存储大小限制也不同：
        cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。
        sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
    （3）作用域不同：
        sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
        localStorage 在所有同源窗口中都是共享的；
        cookie 也是在所有同源窗口中都是共享的。
    （4）存储的时间不同：
        cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。
        使用HTML5 Web存储的localStorage和sessionStorage方式进行Web页面数据本地存储。
        页面参考如下图，能将页面上的数据进行本地存储。并能读取存储的数据显示在页面上。
        localStorage（本地存储）,可以长期存储数据，没有时间限制，一天，一年，两年甚至更长，数据都可以使用。
        sessionStorage（会话存储），只有在浏览器被关闭之前使用，创建另一个页面时同意可以使用，关闭浏览器之后数据就会消失。)

  11、localStorage怎么设置过期时间？(localStorage怎么设置一个时间限定让信息能在一定的时间范围内存储和消失？)
      localStorage本身没有设置过期时间的属性，但是可以在存储的时候设置一个时间戳，每次取值的时候对比时间

  12. 网页从输入网址到渲染完成经历了哪些过程？（必考）
      https://www.cnblogs.com/angelatian/p/9947972.html
      
      输入网址；
      发送到DNS服务器，并获取域名对应的web服务器对应的ip地址；
      与web服务器建立TCP连接；
      浏览器向web服务器发送http请求；
      web服务器响应请求，并返回指定url的数据（或错误信息，或重定向的新的url地址）；
      浏览器下载web服务器返回的数据及解析html源文件；
      生成DOM树，解析css和js，渲染页面，直至显示完成；

      输入地址
      1.浏览器查找域名的 IP 地址
      2.这一步包括 DNS 具体的查找过程，包括：浏览器缓存->系统缓存->路由器缓存…
      3.浏览器向 web 服务器发送一个 HTTP 请求
      4.服务器的永久重定向响应（从 http://example.com 到 http://www.example.com）
      5.浏览器跟踪重定向地址
      6.服务器处理请求
      7.服务器返回一个 HTTP 响应
      8.浏览器显示 HTML
      9.浏览器发送请求获取嵌入在 HTML 中的资源（如图片、音频、视频、CSS、JS等等）
      10.浏览器发送异步请求

  13、Http1.0和http2的区别
      https://www.cnblogs.com/heluan/p/8620312.html

      新的二进制格式（Binary Format），HTTP1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。

      多路复用（MultiPlexing），即连接共享，即每一个request都是是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。

      header压缩，如上文中所言，对前面提到过HTTP1.x的header带有大量信息，而且每次都要重复发送，HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。

      服务端推送（server push），同SPDY一样，HTTP2.0也具有server push功能。

  14、长链接和短链接是什么
      https://www.cnblogs.com/gotodsp/p/6366163.html
      在HTTP/1.0中默认使用短连接。也就是说，客户端和服务器每进行一次HTTP操作，就建立一次连接，任务结束就中断连接。当客户端浏览器访问的某个HTML或其他类型的Web页中包含有其他的Web资源（如JavaScript文件、图像文件、CSS文件等），每遇到这样一个Web资源，浏览器就会重新建立一个HTTP会话。

      而从HTTP/1.1起，默认使用长连接，用以保持连接特性。使用长连接的HTTP协议，会在响应头加入这行代码：
      Connection:keep-alive
      在使用长连接的情况下，当一个网页打开完成后，客户端和服务器之间用于传输HTTP数据的TCP连接不会关闭，客户端再次访问这个服务器时，会继续使用这一条已经建立的连接。Keep-Alive不会永久保持连接，它有一个保持时间，可以在不同的服务器软件（如Apache）中设定这个时间。实现长连接需要客户端和服务端都支持长连接。

      HTTP协议的长连接和短连接，实质上是TCP协议的长连接和短连接。

  15、浏览器缓存
      参考：https://www.jianshu.com/p/54cc04190252

      1）缓存位置：
        1.Service Worker 运行在浏览器背后的独立线程。传输协议必须为https
        2.Memory Cache 内存中的缓存。主要包含当前页面中已经抓取到的资源，比如已经下载到样式、脚本、图片
        3.Disk Cache 硬盘中的缓存。存储的容量大。在所有浏览器缓存中，Disk Cache覆盖面基本是最大的。
        4.Push Cache 推送缓存，http/2中的内容，当以上三种缓存都没有命中时，它才会被使用；
          它只在会话（Session）中存在，一旦会话结束就被释放；并且缓存时间也很短暂，在Chrome浏览器中只有5分钟左右
        
      2）基本策略：强缓存和协商缓存。（字节）
        强缓存：不会向服务器发送请求，直接从缓存中读取资源；在chrome控制台的Network选项中可以看到该请求返回200的状态码，并且Size显示from disk cache或from memory cache。
        协商缓存：就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，
          协商缓存生效：返回304和Not Modified；协商缓存失效：返回200和新的数据

      3）控制缓存的HTTP Header字段的相关设置：
        强缓存：
          （1）Expires：缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点，
                      Expires=max-age + 请求时间，需要和Last-modified结合使用
          （2）Cache-Control：是最重要的规则，主要用于控制网页缓存。比如当Cache-Control:max-age=300时，则代表在这个请求正确返回时间（浏览器也会记录下来）的5分钟内再次加载资源，就会命中强缓存。
          （3）对比：Expires是http1.0的产物，Cache-Control是http1.1的产物，两者同时存在的话，Cache-Control优先级高于Expires；Expires其实是过时的产物，现阶段它的存在只是一种兼容性的写法.
        协商缓存：强缓存失效后，浏览器携带缓存标识向服务器发起请求，服务器根据缓存标识来判断是否使用缓存。
          （1）Last-Modified：这个资源在服务器上的最后修改时间
          （2）ETag：服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)，只要资源有变化，Etag就会重新生成。

      4）缓存机制：
        强制缓存优先于协商缓存进行，若强制缓存(Expires和Cache-Control)生效则直接使用缓存，
        若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag / If-None-Match)，
        协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，返回200，重新返回资源和缓存标识，再存入浏览器缓存中；生效则返回304，继续使用缓存。

      5）实际场景应用缓存策略：
        频繁变动的资源：Cache-Control: no-cache
        不常变化的资源：Cache-Control: max-age=31536000（一年）

      6）用户行为对浏览器缓存的影响：
        打开网页：查看disk cache中是否有匹配
        F5：首先匹配memory cache，其次匹配disk cache
        Ctrl + F5：不缓存，发送的请求头部均带有 Cache-control: no-cache(为了兼容，还带了Pragma: no-cache)

  16、通信的要点和目的：
      要点：1. 发送者和接收者 2. 传输媒介 3. 传输的数据 4. 传输格式（协议）
      目的：1. 同步数据 2. 传递指令(执行的方法)

  17、请求头和响应头都有哪些内容
      https://www.cnblogs.com/fighter007/p/8445435.html

  18、https抓包分析
      https://blog.csdn.net/vtming/article/details/73740273

  19、dns解析过程
      https://www.jianshu.com/p/401f34691dcc

  20、命令行查看请求信息
      curl -v https://www.baidu.com
      
*/

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>