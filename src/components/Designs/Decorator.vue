<template>
    <div>
        decorator
    </div>
</template>

<script>
    // 一、模拟传统面向对象语言的装饰者模式：
    // 假设我们在编写一个飞机大战的游戏，随着经验值的增加，我们操作的飞机对象可以升级成更厉害的飞机，一开始这些飞机只能发射普通的子弹，升到第二级时可以发射导弹，升到第三级时可以发射原子弹
    // 首先是原始的飞机类
    var Plane = function(){
    }
    Plane.prototype.fire = function(){ 
        console.log( '发射普通子弹' );
    }

    // 接下来增加两个装饰类，分别是导弹和原子弹:
    var MissileDecorator = function( plane ){ 
        this.plane = plane;
    }
    MissileDecorator.prototype.fire = function(){ 
        this.plane.fire();
        console.log( '发射导弹' );
    }

    var AtomDecorator = function( plane ){ 
        this.plane = plane;
    }
    AtomDecorator.prototype.fire = function(){ 
        this.plane.fire();
        console.log( '发射原子弹' );
    }

    // 最后看看测试结果
    var plane = new Plane();
    plane = new MissileDecorator( plane ); 
    plane = new AtomDecorator( plane );
    plane.fire();
    // 分别输出: 发射普通子弹、发射导弹、发射原子弹

    // 这种给对象动态增加职责的方式，并没有真正地改动对象自身，而是将对象放入另一个对象之中，这些对象以一条链的方式进行引用，形成一个聚合对象。这些对象都拥有相同的接口(fire 方法)，当请求达到链中的某个对象时，这个对象会执行自身的操作，随后把请求转发给链中的 下一个对象。
    // 因为装饰者对象和它所装饰的对象拥有一致的接口，所以它们对使用该对象的客户来说是透明的，被装饰的对象也并不需要了解它曾经被装饰过，这种透明性使得我们可以递归地嵌套任意多个装饰者对象



    // 二、装饰者也是包装器
    // 从功能上而言，decorator能很好地描述这个模式，但从结构上看，wrapper的说法更加贴切。装饰者模式将一个对象嵌入另一个对象之中，实际上相当于这个对象被另一个对象包装起来，形成一条包装链。请求随着这条链依次传递到所有的对象，每个对象都有处理这条请求的机会


    // 三、回到JavaScript的装饰者
    // JavaScript 语言动态改变对象相当容易，我们可以直接改写对象或者对象的某个方法，并不需要使用“类”来实现装饰者模式，
    var plane = {
    fire: function(){
        console.log( '发射普通子弹' ); 
    }
    }
    var missileDecorator = function(){ 
        console.log( '发射导弹' );
    }
    var atomDecorator = function(){ 
        console.log( '发射原子弹' );
    }
    var fire1 = plane.fire;
    plane.fire = function(){ 
        fire1();
        missileDecorator(); 
    }
    var fire2 = plane.fire;
    plane.fire = function(){ 
        fire2();
        atomDecorator(); 
    }
    plane.fire();
    // 分别输出: 发射普通子弹、发射导弹、发射原子弹



    // 四、用AOP装饰函数
    Function.prototype.before = function( beforefn ){
    // 保存原函数的引用
    var __self = this;
    // 返回包含了原函数和新函数的"代理"函数
    return function(){ 
        // 执行新函数，且保证this不被劫持，新函数接受的参数 
        // 也会被原封不动地传入原函数，新函数在原函数之前执行
        beforefn.apply( this, arguments ); 
        return __self.apply( this, arguments ); // 执行原函数并返回原函数的执行结果， // 并且保证this不被劫持
    } 
    }
    Function.prototype.after = function( afterfn ){ 
        var __self = this;
        return function(){
            var ret = __self.apply( this, arguments ); 
            afterfn.apply( this, arguments );
            return ret;
        } 
    };
    // Function.prototype.before 接受一个函数当作参数，这个函数即为新添加的函数，它装载了新添加的功能代码。接下来把当前的 this保存起来，这个this指向原函数，然后返回一个“代理”函数，这个“代理”函数只是结构上像代理而已，并不承担代理的职责(比如控制对象的访问等)。它的工作是把请求分别转发给新添加的函数和原函数，且负责保证它们的执行顺序，让新添加的函数在原函数之前执行(前置装饰)，这样就实现了动态装饰的效果。

    // 实例1：
    document.getElementById = document.getElementById.before(function() {
        console.log (1);
    });
    var button = document.getElementById('button');
    console.log(button)

    // 实例2（改造window.onload）：
    window.onload = function(){ 
        console.log (11);
    }
    window.onload = ( window.onload || function(){} ).before(function(){ 
        console.log (22);
    }).after(function(){ 
        console.log (33);
    }).after(function(){ 
        console.log (44);
    });

    // 值得提到的是，上面的AOP实现是在Function.prototype上添加 before 和 after 方法，但许多人不喜欢这种污染原型的方式，那么我们可以做一些变通，把原函数和新函数都作为参数传入 before 或者 after 方法:
    var before = function( fn, beforefn ){ 
    return function(){
        beforefn.apply( this, arguments );
        return fn.apply( this, arguments );
    }
    } 
    var a = before( function(){
        console.log (3)
    }, function(){
        console.log (2)
    }
    );
    a = a();




    // 五：AOP的应用实例
    // 不论是业务代码的编写，还是在框架层面， 我们都可以把行为依照职责分成粒度更细的函数，随后通过装饰把它们合并到一起，这有助于我们编写一个松耦合和高复用性的系统。分离业务代码和数据统计代码，无论在什么语言中，都是 AOP 的经典应用之一。

    // 5.1：假设现在我们需要点击一个按钮后既要负责打开登录浮层，和负责数据上报，我们看到在showLogin函数里，这是两个层面的功能，在此处却被耦合在一个函数里。
    {/* <button tag="login" id="button">点击打开登录浮层</button> */}
    var showLogin = function(){ 
        console.log( '打开登录浮层' ); 
        log( this.getAttribute( 'tag' ) );
    }
    var log = function( tag ){
        console.log( '上报标签为: ' + tag );
        // (new Image).src = 'http:// xxx.com/report?tag=' + tag;   // 真正的上报代码略
    }
    document.getElementById( 'button' ).onclick = showLogin;

    // 使用 AOP分离之后，代码如下:
    var showLogin = function(){ 
        console.log( '打开登录浮层' );
    }
    var log = function(){
        console.log( '上报标签为: ' + this.getAttribute( 'tag' ) );
    }
    showLogin = showLogin.after(log); // 打开登录浮层之后上报数据
    document.getElementById('button').onclick = showLogin;



    // 5.2：插件式的表单验证
    // 假设目前页面中有一个包含以下按钮的表单
    {/* <body>
    用户名:<input id="username" type="text"/>
    密码: <input id="password" type="password"/>
    <input id="submitBtn" type="button" value="提交"> 
    </body> */}

    // 传统的表单验证的写法：
    // formSubmit 函数在此处承担了两个职责，除了提交 ajax 请求之外，还要验证用户输入的合法性。这种代码一来会造成函数臃肿，职责混乱，二来谈不上任何可复用性。
    var username = document.getElementById( 'username' ),
        password = document.getElementById( 'password' ), 
        submitBtn = document.getElementById( 'submitBtn' );
    var formSubmit = function(){
    if ( username.value === '' ){
        return console.log ( '用户名不能为空' ); 
    }
    if ( password.value === '' ){
        return console.log ( '密码不能为空' );
    }
    var param = {
        username: username.value, 
        password: password.value
    }
    ajax( 'http:// xxx.com/login', param );
    }
    submitBtn.onclick = function(){ 
    formSubmit();
    }

    // 改造之后的写法
    // 在这段代码中，校验输入和提交表单的代码完全分离开来，它们不再有任何耦合关系， formSubmit = formSubmit.before( validata )这句代码，如同把校验规则动态接在 formSubmit 函数 之前，validata 成为一个即插即用的函数，它甚至可以被写成配置文件的形式，这有利于我们分 开维护这两个函数。再利用策略模式稍加改造，我们就可以把这些校验规则都写成插件的形式， 用在不同的项目当中。
    Function.prototype.before = function( beforefn ){
    var __self = this; 
    return function(){
        if ( beforefn.apply( this, arguments ) === false ){
        // beforefn 返回 false 的情况直接 return，不再执行后面的原函数 return;
        }
        return __self.apply( this, arguments ); 
    }
    }
    var validata = function(){
    if ( username.value === '' ){
        console.log ( '用户名不能为空' );
        return false; 
    }
    if ( password.value === '' ){ 
        console.log ( '密码不能为空' ); 
        return false;
    } 
    }
    var formSubmit = function(){ 
    var param = {
        username: username.value,
        password: password.value
    }
    ajax( 'http:// xxx.com/login', param ); 
    }
    formSubmit = formSubmit.before( validata );
    submitBtn.onclick = function(){ 
    formSubmit();
    }


    // 值得注意的是，因为函数通过 Function.prototype.before 或者 Function.prototype.after 被装 饰之后，返回的实际上是一个新的函数，如果在原函数上保存了一些属性，那么这些属性会丢失。 代码如下:
    var func = function(){ 
    console.log( 1 );
    }
    func.a = 'a';
    func = func.after( function(){ 
    console.log( 2 );
    });
    console.log ( func.a ); // 输出:undefined
    // 另外，这种装饰方式也叠加了函数的作用域，如果装饰的链条过长，性能上也会受到一些 影响。


    // 六：装饰者模式和代理模式
    // 装饰者模式和代理模式的结构看起来非常相像，这两种模式都描述了怎样为对象提供 一定程度上的间接引用，它们的实现部分都保留了对另外一个对象的引用，并且向那个对象发送 请求。
    // 代理模式和装饰者模式最重要的区别在于它们的意图和设计目的。代理模式的目的是，当直 接访问本体不方便或者不符合需要时，为这个本体提供一个替代者。本体定义了关键功能，而代 理提供或拒绝对它的访问，或者在访问本体之前做一些额外的事情。装饰者模式的作用就是为对 象动态加入行为。换句话说，代理模式强调一种关系(Proxy 与它的实体之间的关系)，这种关系 可以静态的表达，也就是说，这种关系在一开始就可以被确定。而装饰者模式用于一开始不能确 定对象的全部功能时。代理模式通常只有一层代理本体的引用，而装饰者模式经常会形成一条 长长的装饰链。



    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>