<template>
    <div>
        <p>发布—订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。在JavaScript开发中，我们一般用事件模型来替代传统的发布—订阅模式。 </p>
    </div>
</template>

<script>
    // 简单的发布-订阅模式：
    // 这里以售楼处的售楼消息为例，小明和小红是消息订阅者，售楼处是发布消息者，一旦售楼处有消息就会主动向小明和小红发送消息
    var salesOffices = {};  // 定义售楼处
    salesOffices.clientList = [];  // 缓存列表，存放订阅者的回调函数
    salesOffices.listen = function( fn ){  // 增加订阅者 
    this.clientList.push( fn );  // 订阅的消息添加进缓存列表
    };
    salesOffices.trigger = function(){ // 发布消息 
    for( var i = 0, fn; fn = this.clientList[ i++ ];) {
        fn.apply( this, arguments ); // arguments 是发布消息时带上的参数
    } 
    };
    // 下面我们来进行一些简单的测试:
    salesOffices.listen( function( price, squareMeter ) {   // 小明订阅者
    // console.log( '价格= ' + price );
    // console.log( 'squareMeter= ' + squareMeter );
    });

    salesOffices.listen( function( price, squareMeter ) {   // 小红订阅者
    // console.log( '价格= ' + price );
    // console.log( 'squareMeter= ' + squareMeter );
    });

    salesOffices.trigger( 2000000, 88 ); // 输出: 价格= 2000000，squareMeter= 88   价格= 2000000，squareMeter= 88  
    salesOffices.trigger( 3000000, 110 ); // 输出: 价格= 3000000，squareMeter= 110  价格= 3000000，squareMeter= 110




    // 这里还存在一些问题。我们看到订阅者接收到了发布者发布的每个消息，虽然小明只想买 88 平方米的房子，但是发布者把110平方米的信息也推送给了小明，这对小明来说是不必要的困扰。所以我们有必要增加一个标示key， 让订阅者只订阅自己感兴趣的消息。所以我们需要改造一下代码：
    var salesOffices = {};  // 定义售楼处
    salesOffices.clientList = {};  // 缓存列表，存放订阅者的回调函数
    salesOffices.listen = function( key, fn ){  // 增加订阅者 
    if(!this.clientList[key]) {
        this.clientList[key] = []
    }
    this.clientList[key].push( fn );  // 订阅的消息添加进缓存列表
    };

    salesOffices.trigger = function(){ // 发布消息 
    var key = Array.prototype.shift.call( arguments ), // 取出消息类型
        fns = this.clientList[ key ];   // 取出该消息对应的回调函数集合
    if ( !fns || fns.length === 0 ){   // 如果没有订阅该消息，则返回
        return false;
    }
    for( var i = 0, fn; fn = fns[ i++ ];) {
        fn.apply( this, arguments ); // arguments 是发布消息时带上的参数
    } 
    };

    salesOffices.listen( 'squareMeter88', function( price ) {   // 小明订阅者
    // console.log( '价格= ' + price );
    });

    salesOffices.listen( 'squareMeter110', function( price ) {   // 小红订阅者
    // console.log( '价格= ' + price );
    });

    salesOffices.trigger( 'squareMeter88', 2000000);   // 输出: 价格= 2000000 
    salesOffices.trigger( 'squareMeter110', 3000000);  // 输出: 价格= 3000000



    // 发布-订阅模式的通用实现
    // 这段代码是否必须在另一个售楼处对象上重写一次呢，有没有办法可以让所有对象都拥有发布—订阅功能呢? 、
    // 首先，我们把发布—订阅的功能提取出来，放在一个单独的对象内:
    var event = {
    clientList: [],
    listen: function( key, fn ){
        if ( !this.clientList[ key ] ){
        this.clientList[ key ] = []; 
        }
        this.clientList[key].push( fn );    // 订阅的消息添加进缓存列表
    },
    trigger: function() {
        var key = Array.prototype.shift.call( arguments ),  // (1);
            fns = this.clientList[ key ];
        if ( !fns || fns.length === 0 ){    // 如果没有绑定对应的消息 
        return false;
        }
        for( var i = 0, fn; fn = fns[ i++ ]; ){
        fn.apply( this, arguments );  // (2) // arguments 是 trigger 时带上的参数
        } 
    }
    }
    // 再定义一个 installEvent 函数，这个函数可以给所有的对象都动态安装发布—订阅功能:
    var installEvent = function( obj ){ 
    for ( var i in event ){
        obj[ i ] = event[ i ];
    }
    };
    var salesOffices = {};
    installEvent( salesOffices );
    salesOffices.listen( 'squareMeter88', function( price ){ 
    // console.log( '价格= ' + price );      // 小明订阅消息
    });
    salesOffices.listen( 'squareMeter100', function( price ){ 
    // console.log( '价格= ' + price );      // 小红订阅消息
    });
    salesOffices.trigger( 'squareMeter88', 2000000 ); // 输出:2000000
    salesOffices.trigger( 'squareMeter100', 3000000 ); // 输出:3000000




    // 取消订阅的事件
    // event.remove = function( key, fn ){ 
    // var fns = this.clientList[ key ];
    // if ( !fns ){ // 如果 key 对应的消息没有被人订阅，则直接返回 
    //     return false;
    // }
    // if ( !fn ){ // 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
    //     fns && ( fns.length = 0 ); 
    // }else{
    //     for ( var l = fns.length - 1; l >=0; l-- ){ // 反向遍历订阅的回调函数列表 
    //     var _fn = fns[ l ];
    //     if ( _fn === fn ){
    //         fns.splice( l, 1 );  // 删除订阅者的回调函数
    //     } 
    //     }
    // }
    // };

    // var salesOffices = {};
    // var installEvent = function( obj ){
    // for ( var i in event ){ 
    //     obj[ i ] = event[ i ];
    // } 
    // }
    // installEvent( salesOffices );

    // salesOffices.listen( 'squareMeter88', fn1 = function( price ){   // 小明订阅消息
    // // console.log( '价格= ' + price );
    // });
    // salesOffices.listen( 'squareMeter88', fn2 = function( price ){   // 小红订阅消息
    // // console.log( '价格= ' + price );
    // });
    // salesOffices.remove( 'squareMeter88', fn1 );  // 删除小明的订阅
    // salesOffices.trigger( 'squareMeter88', 2000000 );  // 输出:2000000



    // 发布订阅模式真实的例子——网站登录：
    // 假如我们正在开发一个商城网站，它的header 头部、nav 导航、消息列表、购物车这些模块都是依赖异步请求来的用户信息，将来还有其他的模块需要使用这些用户信息。如果它们和用户信息模块产生了强耦合。如果有一天，项目中又新增了一个收货地址管理的模块，需要在后面增加 address.refresh():
    // login.succ(function(data){ 
    //     header.setAvatar( data.avatar);   // 设置 header 模块的头像 
    //     nav.setAvatar( data.avatar );  // 设置导航模块的头像
    //     message.refresh();   // 刷新消息列表
    //     cart.refresh();  // 刷新购物车列表
    // });


    // 用发布—订阅模式重写之后，对用户信息感兴趣的业务模块将自行订阅登录成功的消息事件。 当登录成功时，登录模块只需要发布登录成功的消息，而业务方接受到消息之后，就会开始进行 各自的业务处理，登录模块并不关心业务方究竟要做什么，也不想去了解它们的内部细节:
    // $.ajax( 'http:// xxx.com?login', function(data){ // 登录成功 
    //     login.trigger( 'loginSucc', data); // 发布登录成功的消息
    // });

    // 各模块监听登录成功的消息:
    // var header = (function() { // header 模块 
    // login.listen( 'loginSucc', function(data) {
    //     header.setAvatar(data.avatar);
    // }); 
    // return {
    //     setAvatar: function( data ) {
    //     // console.log( '设置 header 模块的头像' );
    //     } 
    // }
    // })();
    
    // var nav = (function(){  // nav 模块 
    // login.listen( 'loginSucc', function( data ){
    //     nav.setAvatar( data.avatar );
    // }); 
    // return {
    //     setAvatar: function( avatar ){ 
    //     // console.log( '设置 nav 模块的头像' );
    //     } 
    // }
    // })();

    // 如果后续需要增加一个刷新收货地址列表的行为，那么只要在收货地址模块里加上监听消息的方法即可，就可以和登录模块的业务分开了
    // var address = (function(){  // address 模块 
    // login.listen( 'loginSucc', function( obj ){
    //     address.refresh( obj );
    // });
    // return {
    //     refresh: function( avatar ){
    //     // console.log( '刷新收货地址列表' ); 
    //     }
    // } 
    // })();
    




    // 全局的发布-订阅对象
    // 发布—订阅模式可以用一个全局的 Event 对象来实现，订阅者不需要了解消 息来自哪个发布者，发布者也不知道消息会推送给哪些订阅者，Event 作为一个类似“中介者” 的角色，把订阅者和发布者联系起来
    var Event = (function(){
        var clientList = {}, 
            listen,
            trigger, 
            remove;
        listen = function( key, fn ){ 
            if ( !clientList[ key ] ){
                clientList[ key ] = []; 
            }
            clientList[ key ].push( fn ); 
        };
        trigger = function(){
            var key = Array.prototype.shift.call( arguments ),
                fns = clientList[ key ];
            if ( !fns || fns.length === 0 ){
                return false; 
            }
            for( var i = 0, fn; fn = fns[ i++ ]; ){ 
                fn.apply( this, arguments );
            }
        };

        remove = function( key, fn ){ 
            var fns = clientList[ key ]; 
            if ( !fns ){
                return false; 
            }
            if ( !fn ){
                fns && ( fns.length = 0 );
            } else {
            for ( var l = fns.length - 1; l >=0; l-- ){
                var _fn = fns[ l ]; 
                if(_fn === fn){
                fns.splice( l, 1 ); 
                }
            } 
            }
        };

        return {
            listen: listen,
            trigger: trigger,
            remove: remove 
        }
    })();

    Event.listen( 'squareMeter88', function( price ){  // 小红订阅消息
        // console.log( '价格= ' + price );   // 输出:'价格=2000000'  
    });
    Event.trigger( 'squareMeter88', 2000000 ); // 售楼处发布消息

    // 发布—订阅模式的优点非常明显，一为时间上的解耦，二为对象之间的解耦。它的应用非常 广泛，既可以用在异步编程中，也可以帮助我们完成更松耦合的代码编写。发布—订阅模式还可 以用来帮助实现一些别的设计模式，比如中介者模式。从架构上来看，无论是 MVC 还是 MVVM， 都少不了发布—订阅模式的参与，而且 JavaScript 本身也是一门基于事件驱动的语言。
    // 当然，发布—订阅模式也不是完全没有缺点。创建订阅者本身要消耗一定的时间和内存，而 且当你订阅一个消息后，也许此消息最后都未发生，但这个订阅者会始终存在于内存中。另外， 发布—订阅模式虽然可以弱化对象之间的联系，但如果过度使用的话，对象和对象之间的必要联 系也将被深埋在背后，会导致程序难以跟踪维护和理解。特别是有多个发布者和订阅者嵌套到一 起的时候，要跟踪一个 bug 不是件轻松的事情。

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>