<template>
    <div>
        proxy
    </div>
</template>

<script>

    // 未使用代理模式  小明直接给女孩A送花
    var Flower = function() {}
    var xiaoming = {
    sendFlower: function( target ){
        var flower = new Flower();
        target.receiveFlower( flower ); 
    }
    };
    var A = {
    receiveFlower: function( flower ){
        console.log( '收到花 ' , flower ); 
    }
    };
    xiaoming.sendFlower( A );


    // 使用简单的代理模式  小明通过B给女孩A送花
    var Flower = function() {}
    var xiaoming = {
    sendFlower: function( target ){
        var flower = new Flower();
        target.receiveFlower( flower ); 
    }
    };
    var A = {
    receiveFlower: function( flower ){
        console.log( '收到花 ' , flower ); 
    }
    };
    var B = {
        receiveFlower: function( flower ){
        A.receiveFlower(flower)
        }
    }
    xiaoming.sendFlower( B );


    // 监控A的心情变化 心情好的时候送花
    var Flower = function(){};
    var xiaoming = {
    sendFlower: function( target) {
        var flower = new Flower();
        target.receiveFlower( flower ); 
    }
    };
    var B = {
    receiveFlower: function( flower ){
        A.listenGoodMood(function(){ 
        A.receiveFlower( flower );
        }); 
    }
    };
    var A = {
    receiveFlower: function( flower ){
        // 监听 A 的好心情
        console.log( '收到花 ' , flower ); 
    },
    listenGoodMood: function( fn ){
        setTimeout(function(){ // 假设 10 秒之后 A 的心情变好
        fn(); 
        }, 10000);
    } 
    };
    xiaoming.sendFlower( B );




    // 保护代理和虚拟代理：
    // 虽然这只是个虚拟的例子，但我们可以从中找到两种代理模式的身影。代理 B 可以帮助 A 过滤掉一些请求，比如送花的人中年龄太大的或者没有宝马的，这种请求就可以直接在代理 B 处被拒绝掉。这种代理叫作保护代理。A 和 B 一个充当白脸，一个充当黑脸。白脸 A 继续保持 良好的女神形象，不希望直接拒绝任何人，于是找了黑脸 B 来控制对 A 的访问。
    // 另外，假设现实中的花价格不菲，导致在程序世界里，new Flower 也是一个代价昂贵的操作， 那么我们可以把 new Flower 的操作交给代理 B 去执行，代理 B 会选择在 A 心情好时再执行 new Flower，这是代理模式的另一种形式，叫作虚拟代理。虚拟代理把一些开销很大的对象，延迟到 真正需要它的时候才去创建。
    var B = {
    receiveFlower: function(flower){
        A.listenGoodMood(function(){ 
        var flower = new Flower(); 
        A.receiveFlower(flower);
        }); 
    }
    };




    // 虚拟代理实现图片预加载：
    // 普通方式下，我们把网速调至 5KB/s，然后通过 MyImage.setSrc 给该 img 节点设置 src，可以看到，在图片被加载好之前，页面中有一段长长的空白时间。
    // 代理模式改造后，现在开始引入代理对象 proxyImage，通过这个代理对象，在图片被真正加载好之前，页面中将出现一张占位的菊花图 loading.gif, 来提示用户图片正在加载。现在我们通过 proxyImage 间接地访问 MyImage。proxyImage 控制了客户对 MyImage 的访问，并 且在此过程中加入一些额外的操作，比如在真正的图片加载好之前，先把 img 节点的 src 设置为 一张本地的 loading 图片。代码如下:

    // var myImage = (function(){
    // var imgNode = document.createElement( 'img' ); 
    // document.body.appendChild( imgNode );
    // return {
    //     setSrc: function( src ){
    //     imgNode.src = src; 
    //     }
    // } 
    // })();
    // myImage.setSrc('http:// imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg');


    // var myImage = (function(){
    // var imgNode = document.createElement( 'img' ); 
    // document.body.appendChild( imgNode );
    // return {
    //     setSrc: function( src ){
    //     imgNode.src = src; 
    //     }
    // } 
    // })();
    // var proxyImage = (function(){
    // var img = new Image; 
    // img.onload = function(){
    //     myImage.setSrc(this.src); 
    // }
    // return {
    //     setSrc: function( src ){
    //     myImage.setSrc( 'file:// /C:/Users/svenzeng/Desktop/loading.gif' );
    //     img.src = src; 
    //     }
    // } 
    // })();
    // proxyImage.setSrc( 'http:// imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg' );




    // 虚拟代理合并HTTP请求
    {/* <body>
    <input type="checkbox" id="1"></input>1
    <input type="checkbox" id="2"></input>2
    <input type="checkbox" id="3"></input>3
    <input type="checkbox" id="4"></input>4
    <input type="checkbox" id="5"></input>5
    <input type="checkbox" id="6"></input>6
    <input type="checkbox" id="7"></input>7
    <input type="checkbox" id="8"></input>8
    <input type="checkbox" id="9"></input>9
    </body> */}

    // 给这些 checkbox 绑定点击事件，并且在点击的同时往另一台服务器同步文件:
    // 当我们选中3个checkbox 的时候，依次往服务器发送了3次同步文件的请求。而点击一个checkbox并不是很复杂的操作。可以预见，如此频繁的网络请求将会带来相当大的开销
    // 解决方案是，我们可以通过一个代理函数 proxySynchronousFile 来收集一段时间之内的请求， 最后一次性发送给服务器。比如我们等待 2 秒之后才把这 2 秒之内需要同步的文件 ID 打包发给 服务器，如果不是对实时性要求非常高的系统，2 秒的延迟不会带来太大副作用，却能大大减轻 服务器的压力。:
    var synchronousFile = function( id ){ 
    console.log( '开始同步文件，id 为: ' + id );
    };
    var checkbox = document.getElementsByTagName( 'input' );
    for ( var i = 0, c; c = checkbox[ i++ ]; ){ 
    c.onclick = function(){
        if ( this.checked === true ){ 
        synchronousFile( this.id );
        } 
    }
    };

    var synchronousFile = function( id ){ 
    console.log( '开始同步文件，id 为: ' + id );
    };
    var proxySynchronousFile = (function(){
    var cache = [], // 保存一段时间内需要同步的 ID
    timer; // 定时器
    return function( id ){
        cache.push( id );
        if ( timer ){ // 保证不会覆盖已经启动的定时器
        return; 
        }
        timer = setTimeout(function(){ 
        synchronousFile( cache.join( ',' ) ); 
        clearTimeout( timer ); // 清空定时器 timer = null;
        cache.length = 0; // 清空 ID 集合
        }, 2000); 
    }
    // 2 秒后向本体发送需要同步的 ID 集合
    })();
    var checkbox = document.getElementsByTagName( 'input' ); 
    for ( var i = 0, c; c = checkbox[ i++ ]; ){
    c.onclick = function(){
        if ( this.checked === true ){
        proxySynchronousFile( this.id ); 
        }
    }
    }  



    // 用高阶函数动态创建代理：通过传入高阶函数这种更加灵活的方式，可以为各种计算方法创建缓存代理。现在这些计算方法被当作参数传入一个专门用于创建缓存代理的工厂中， 这样一来，我们就可以为乘法、加法、减法等创建缓存代理:
    /**************** 计算乘积 *****************/ 
    // var mult = function(){
    // var a = 1; 
    // for ( i = 0, l = arguments.length; i < l; i++ ){ 
    //     var a = a* arguments[i];
    // }
    // return a; 
    // };

    /**************** 计算加和 *****************/
    // var plus = function(){
    // var a = 1; 
    // for ( i = 0, l = arguments.length; i < l; i++ ){ 
    //     var a = a + arguments[i];
    // }
    // return a; 
    // };

    /**************** 创建缓存代理的工厂 *****************/ 
    // var createProxyFactory = function( fn ){
    // var cache = {};
    // return function(){
    //     var args = Array.prototype.join.call( arguments, ',' );
    //     if ( args in cache ){
    //     return cache[ args ]; 
    //     }
    //     return cache[ args ] = fn.apply( this, arguments ); 
    // }
    // };

    // var proxyMult = createProxyFactory( mult ), 
    // proxyPlus = createProxyFactory( plus );

    // console.log( proxyMult( 1, 2, 3, 4 ) ); // 输出:24
    // console.log( proxyMult( 1, 2, 3, 4 ) ); // 输出:24
    // console.log( proxyPlus( 1, 2, 3, 4 ) ); // 输出:10
    // console.log( proxyPlus( 1, 2, 3, 4 ) ); // 输出:10



    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>