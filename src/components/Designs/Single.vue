<template>
    <div>
        <p>一、简易版单例模式</p>
        <p>二、透明的单例模式：</p>
        <p>三：用代理实现单例模式：</p>
        <p>四、js中的单例模式：</p>
        <p>五、惰性单例：</p>
    </div>
</template>

<script>
    export default {
        name: 'Single',
        mounted() { 
            // 一、简易版单例模式
            var Singleton =  function(name) {
                this.name = name
                this.instance = null
            }
            Singleton.prototype.getName = function() {
                console.log(this.name)
            }
            Singleton.getInstance = function(name) {
                if(!this.instance) {
                    this.instance = new Singleton(name)
                }
                return this.instance
            }
            var single1 = Singleton.getInstance('xiaoming')
            var single2 = Singleton.getInstance('liaohang')
            // console.log(single1 === single2)   // true



            // 简易版单例模式另一种写法
            // 以上虽然是一个简单的“不透明”单例模式，但是在实际项目中的意义不大。
            // var Singleton = function(name) {
            //     this.name = name
            // }
            // Singleton.prototype.getName = function() { 
            //     console.log(this.name)
            // }
            // Singleton.getInstance = (function() { 
            //     var instance = null
            //     return function( name ) {
            //         if ( !instance ){
            //             instance = new Singleton(name)
            //         }
            //         return instance
            //     }
            // })()
            // var a = Singleton.getInstance('sven1') 
            // var b = Singleton.getInstance('sven2')
            // console.log(a, b)
            // console.log(a === b)   // true



            // 二、透明的单例模式：
            // 在这段代码中，CreateDiv 的构造函数实际上负责了两件事情：第一是创建对象和执行初始化 init 方法，第二是保证只有一个对象。虽然我们目前还没有接触过“单一职责原则”的概念， 但可以明确的是，这是一种不好的做法，至少这个构造函数看起来很奇怪。假设我们某天需要利用这个类，在页面中创建千千万万的 div，即要让这个类从单例类变成 一个普通的可产生多个实例的类，那我们必须得改写 CreateDiv 构造函数，把控制创建唯一对象 的那一段去掉，这种修改会给我们带来不必要的烦恼。
            var CreateDiv = (function() {
                var instance;
                var CreateDiv = function(html) { 
                    if (instance) {
                        return instance; 
                    }
                    this.html = html; 
                    this.init();
                    return instance = this;
                };   
                CreateDiv.prototype.init = function(){
                    var div = document.createElement( 'div' ); 
                    div.innerHTML = this.html; 
                    document.body.appendChild( div );
                };
                return CreateDiv; 
            })();

            var a = new CreateDiv( 'sven1' ); 
            var b = new CreateDiv( 'sven2' );

            // console.log( a === b ); // true


            // 三：用代理实现单例模式：
            // 通过引入代理类的方式，我们同样完成了一个单例模式的编写，跟之前不同的是，现在我们把负责管理单例的逻辑移到了代理类 proxySingletonCreateDiv 中。这样一来，CreateDiv 就变成了 一个普通的类，它跟 proxySingletonCreateDiv 组合起来可以达到单例模式的效果。
            var CreateDiv = function( html ){ 
                this.html = html;
                this.init(); 
            };
            CreateDiv.prototype.init = function(){
                var div = document.createElement( 'div' ); 
                div.innerHTML = this.html; 
                document.body.appendChild(div);
            };
            // 接下来引入代理类 proxySingletonCreateDiv: 
            var ProxySingletonCreateDiv = (function(){
                var instance;
                return function( html ){
                    if ( !instance ){
                        instance = new CreateDiv( html );
                    }
                    return instance; 
                }
            })();
            var a = new ProxySingletonCreateDiv( 'sven1' ); 
            var b = new ProxySingletonCreateDiv( 'sven2' );
            // console.log( a === b );


            // 四、js中的单例模式：
            //前面提到的几种单例模式的实现，更多的是接近传统面向对象语言中的实现，单例对象从 “类”中创建而来。在以类为中心的语言中，这是很自然的做法。比如在 Java 中，如果需要某个对象，就必须先定义一个类，对象总是从类中创建而来的。

            //但 JavaScript 其实是一门无类(class-free)语言，也正因为如此，生搬单例模式的概念并无 意义。在 JavaScript 中创建对象的方法非常简单，既然我们只需要一个“唯一”的对象，为什 么要为它先创建一个“类”呢?这无异于穿棉衣洗澡，传统的单例模式实现在 JavaScript 中并 不适用。单例模式的核心是确保只有一个实例，并提供全局访问。

            // 全局变量不是单例模式，但在 JavaScript 开发中，我们经常会把全局变量当成单例来使用。例如:var a = {};当用这种方式创建对象 a 时，对象 a 确实是独一无二的。如果 a 变量被声明在全局作用域下， 则我们可以在代码中的任何位置使用这个变量，全局变量提供给全局访问是理所当然的。这样就满足了单例模式的两个条件。但是全局变量存在很多问题，它很容易造成命名空间污染。使用两种方法可以避免变量的全局污染：

            // 1、使用命名空间：适当地使用命名空间，并不会杜绝全局变量，但可以减少全局变量的数量。
            var namespace1 = { 
                a: function(){ 
                    alert (1);
                },
                b: function(){
                    alert (2); 
                }
            };    

            // 2、使用闭包封装私有变量
            var user = (function(){ 
                var __name = 'sven',
                    __age = 29;
                return {
                    getUserInfo: function(){
                        return __name + '-' + __age; 
                    }
                } 
            })();



            // 五、惰性单例：
            // 惰性单例指的是在需要的时候才创建对象实例。惰性单例是单例模式的重点，这种技术在实际开发中非常有用。我们可以将管理单例的逻辑从原来的代码中抽离出来：
            var getSingle = function( fn ){
                var result;
                return function() {
                    return result || ( result = fn.apply(this, arguments) );
                } 
            }; 
            // 将创建登录浮窗的方法用参数 fn 的形式传入 getSingle，我们不仅可以传入 createLoginLayer，还能传入 createScript、createIframe、createXhr 等。之后再让 getSingle 返回 一个新的函数，并且用一个变量 result 来保存 fn 的计算结果。result 变量因为身在闭包中，它永远不会被销毁。在将来的请求中，如果 result 已经被赋值，那么它将返回这个值。

            // 创建弹窗：
            var createLoginLayer = function(){
                var div = document.createElement( 'div' );
                div.innerHTML = '我是登录浮窗';
                div.style.display = 'none'; 
                document.body.appendChild( div );
                return div;
            };
            var createSingleLoginLayer = getSingle(createLoginLayer);
            document.getElementById( 'loginBtn' ).onclick = function(){ 
                var loginLayer = createSingleLoginLayer(); 
                loginLayer.style.display = 'block';
            };

            // 创建iframe：
            var createSingleIframe = getSingle( function(){
                var iframe = document.createElement ( 'iframe' );
                document.body.appendChild( iframe );
                return iframe;
            });
            document.getElementById( 'loginBtn' ).onclick = function(){ 
                var loginLayer = createSingleIframe();
                loginLayer.src = 'http://baidu.com';
            };
             // 在这个例子中，我们把创建实例对象的职责和管理单例的职责分别放置在两个方法里，这两个方法可以独立变化而互不影响，当它们连接在一起的时候，就完成了创建唯一实例对象的功能。
        
        }
    }
</script>

<style lang="scss" scoped>

</style>