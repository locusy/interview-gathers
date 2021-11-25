<template>
    <div>
        <p>1、cors跨域设置</p>
        <p>2、nodeJS主要分为哪几个模块（自如网）</p>
        <p>3、Node.js基本特性</p>
        <p>4、node的事件循环机制Event loop是怎样的？</p>
        <p>5、setTimeout/setImmediate/process.nextTick的区别</p>
        <p>6、Node流程控制</p>
        <p>7、node的child_process模块有几个api,分别的作用是什么？</p>
        <p>8、node是如何实现http模块的？</p>
        <p>9、node实现8g文件在2g内存下合并</p>
    </div>
</template>

<script>
/*
    https://i5ting.github.io/How-to-learn-node-correctly/#10309
    https://cnodejs.org/getstart
    http://nqdeng.github.io/7-days-nodejs/

    1、cors跨域设置
        const cors = require('koa-cors');
        app.use(cors({
            origin: '*',
            exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
            maxAge: 500,
            credentials: true,  //cookie
            allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'],
            allowHeaders: ['Content-Type', 'Authorization', 'Accept']
        }));
    
    2、nodeJS主要分为哪几个模块（自如网）
        fs
        buffer
        http
        stream
        event

    3、Node.js基本特性
        1.单线程，单线程的好处，减少了内存开销，操作系统的内存换页。
            如果某一个事情，进入了，但是被I/O阻塞了，所以这个线程就阻塞了
        2.非阻塞I/O，不会傻等I/O语句结束，而会执行后面的语句。
            非阻塞就能解决问题了么？比如执行着小红的业务，执行过程中，小刚的I/O回调完成了，此时怎么办？？
        3.事件机制，事件环，不管是新用户的请求，还是老用户的I/O完成，都将以事件方式加入事件环，等待调度。
        4.擅长I/O密集型
            主要体现在Node利用事件轮询的方式处理事件，而不是单开一个线程来为每一个请求服务
        5.不擅长CPU密集型业务
            由于Node单线程，如果长时间运行计算将导致CPU不能释放，使得后续I/O无法发起。
            （解决办法是分解大型运算为多个小任务，不阻塞I/O发起）

    4、node的事件循环机制Event loop是怎样的？
        https://www.imooc.com/article/40020

    5、setTimeout/setImmediate/process.nextTick的区别
        https://blog.csdn.net/hkh_1012/article/details/53453138

        异步任务的区分：
            microtasks(微任务):
                process.nextTick
            promise tasks(宏任务):
                setTimeout setInterval setImmediate
    
    6、Node流程控制
        promise then 
        ES6 Generater 
        ES7 Async/Await

    7、node的child_process模块有几个api,分别的作用是什么？
        http://nodejs.cn/api/child_process.html
        https://www.cnblogs.com/zqzjs/p/6080531.html

        1.异步：

        child_process.exec(command[, options][, callback])

        child_process.execFile(file[, args][, options][, callback])

        child_process.fork(modulePath[, args][, options])

        child_process.spawn(command[, args][, options])

        2.同步：
        child_process.execFileSync(file[, args][, options])

        child_process.execSync(command[, options])

        child_process.spawnSync(command[, args][, options])

        3.事件：
        Event: 'close'

        Event: 'disconnect'

        Event: 'error'

        Event: 'exit'

        Event: 'message'

    8、node是如何实现http模块的？
    https://segmentfault.com/a/1190000020954879

    9、node实现8g文件在2g内存下合并
        https://cloud.tencent.com/developer/article/1630065

        const fs = require('fs');
        const readable = fs.createReadStream('./test1.txt');
        const writeable = fs.createWriteStream('./test2.txt');

        readable.pipe(writeable);

  */

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>