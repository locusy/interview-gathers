<template>
    <div>
        <p>
            <router-link :to="{ path: '/security' }">
                1、XSS（Cross Site Scripting）
            </router-link>
        </p>
        <p>
            <router-link :to="{ path: '/security' }">
                2、CSRF（cross site request forgy）
            </router-link>
        </p>
        <p>
            <router-link :to="{ path: '/security' }">
                3、点击劫持
            </router-link>
        </p>
    </div>
</template>

<script>
/* 
  1、XSS（Cross Site Scripting）
    跨站脚本攻击：在本网站运行了别的网站的脚本
    原理：程序+数据 = 结果  在数据中加入程序
    用途：
        获取网站数据：用户资料
        获取cookies敏感信息：用户密码、登陆态
        劫持前端逻辑 
        发送请求 
        窃取网站的任意数据
    分类：
      1、反射型：URL参数直接注入
        通过URL带过来的信息直接显示出来
      2、存储型：存储到DB后读取时注入（危害更大，更隐蔽）
        将数据存储后，其他用户会访问到数据库
    攻击点：
      html节点内容：内容里插入script
      html属性：src="url" 
      javascript代码：
        <scrit>
          var data = "#{data}";
          var data = "hello";alert(1);""
        </scrit>
      富文本：得保留html，html有xss风险
    防御：
      浏览器自带的防御机制：
        是一种非常有限的手段，只适用于反射型，并不是所有浏览器都支持
        URL的参数再次出现在页面html内容和属性中
      html内容转义：
        用replace将标签转义 '<'转成'&lt' '>'转成'&gt'
      html属性转义：
        将引号 "转成&quto '转成&#39 空格转成&#160 
         (参考html实体：http://www.w3school.com.cn/html/html_entities.asp)
      富文本：
        通过白名单方式保留部分标签和属性 cheerio
      插件：
        https://github.com/leizongmin/js-xss/blob/master/README.zh.md
    CSP（Content security policy）：
      内容安全策略：
        用于指定哪些内容是可以执行的
*/  

/*
  2、CSRF（cross site request forgy）
    跨站请求伪造（在其他网站对本网站产生影响）
    用户打开任意一个第三方网站，然后回到本网站后发现，第三方网站的数据出现在本网站：
      通过表单提交，结合iframe提交数据
      点击链接进入csrf网站，用户散播多，网络蠕虫
    攻击原理：
      1、用户登录a网站
      2、a网站确认身份
      3、b网站用a网站的身份向a网站发起请求（不会经过目标网站a的前端）
    危害：
      利用用户的登录态
      盗取用户的资金
      冒充用户发帖背锅
      完成业务请求
      破坏网站信誉
    防御：
      禁止来自B网站带Cookies：
        给a网站发送请求的cookies设置sameSite:strict；
        目前只有Chrome和Safari支持
      在前端页面加入验证信息：
        验证码：图形验证码；用户体验很差；
        tooken：让攻击者必须经过目标网站的前端 无法获得token
      验证referer：
        判断请求来源：验证referer，如果为攻击网站b网站或非本网站请求，则为非法请求，拦截下来
        referer请求头，显示请求来自哪里的信息
*/

/*
  3、点击劫持
    通过iframe，目标网站被嵌套到另一个网站，设置透明度为0，点击后实际上是发表评论的按钮
    危害：
        用户亲手操作：盗取用户资金，信息
        用户不知情：获取用户敏感信息
    防御：
        JavaScript禁止内嵌
        X-FRAME-OPTIONS禁止内嵌
*/

    export default {
        
    }
</script>

<style lang="less" scoped>

</style>