<template>
    <div>
      <button @click="todetail">todetail</button>
        <p>一、jquery</p>
        <p>1、jQuery获取的dom对象和原生的dom对象有何区别？</p>
        <p>2、jQuery插件：</p>
        <p>3、jQuery里面的选择器原理：</p>
        <p>4、监听浏览器的跳转事件</p>
        <p>5、jQuery的事件委托怎么写的？</p>

        <br>
        <br>
        <p>二、原型链</p>
        <p>1、js数据类型：</p>
        <p>2、对象都是通过函数创建的</p>
        <p>3、每个函数都有一个属性叫做prototype</p>
        <p>4、每个对象都有一个__proto__属性，指向创建该对象的函数的prototype</p>
        <p>5、typeof</p>
        <p>6、instanceof</p>
        <p>7、继承：</p>
        <p>8、继承的几种方式：</p>
        <p>9、Object.create</p>

        <br>
        <br>
        <p>三、原生javascript</p>
        <p>1、JavaScript的函数调用有哪几种方式？请举例说明，并分析其不同之处。</p>
        <p>2、请举例说明DOM event的传播机制和用途</p>
        <p>3、作用域题</p>
        <p>4、将一个json对象{a:1,b:2}转化成'a=1&b=2'的形式</p>
        <p>5、null和undefined的区别？</p>
        <p>6、== 和 === 有什么区别？</p>
        <p>7、思考: [] == ![]</p>
        <p>8、谈谈this</p>
        <p>9、call apply bind的区别：</p>
        <p>10、let、const 以及 var 的区别是什么？</p>
        <p>11、在JS中什么是变量提升？什么是暂时性死区？</p>
        <p>12、类数组和数组的区别是什么？</p>
        <p>13、将类数组转化成数组的方法：</p>
        <p>14、如何判断一个变量是不是数组？</p>
        <p>15、数组的哪些API会改变原数组？</p>
        <p>16、取数组的最大值（ES5、ES6）</p>
        <p>17、typeof和instanceof的区别（商汤科技）</p>
        <p>18、说说JS的垃圾回收机制。</p>
        <p>19、什么情况会引起内存泄漏？</p>
        <p>20、js内存泄漏的排查方法（饿了么）</p>
        <p>21、进程和线程是什么：</p>
        <p>22、js防抖和节流</p>
        <p>23、深拷贝和浅拷贝的区别</p>
        <p>24、深拷贝有哪些方式</p>
        <p>25、js深度复制的方式</p>
        <p>26、原生的js如何设置元素的高度？（自如网）</p>
        <p>27、target和currenttarget的区别（自如网）</p>
        <p>28、innerhtml和document.write的区别（商汤科技）</p>
        <p>29、怎么判断一个变量是否存在？（商汤科技）</p>
        <p>30、为什么Boolean({})=true（商汤科技）</p>
        <p>31、Bom对象：浏览器对象模型</p>
        <p>32、请简述下js引擎的工作原理，js是怎样处理事件的eventloop，宏任务源tasks和微任务源jobs分别有哪些？</p>
        <p>33、js是如何构造抽象语法树（AST）的？</p>
        <p>34、Math.floor()，Math.ceil()，Math.round()的区别</p>
        <p>35、Object.defineProperty(obj, prop, descriptor)</p>
        <p>36、轮询</p>
        <p>37、websocket</p>
        <p>38、SourceMap</p>
        <p>39、js性能问题，同时加载多个js文件（饿了么）</p>
        <p>40、defer和async的区别（自如网）</p>
        <p>41、loadscript封装：</p>
        <p>42、node占用内存优化，多线程（饿了么）</p>
        <p>43、XMLHttpRequest通用属性和方法？</p>
        <p>44、h5内唤起app的方法（饿了么）</p>
        <p>45、js跳出循环</p>
        <p>46、for of, for in和forEach, map的区别：</p>
        <p>47、setTimeout倒计时为什么会出现误差？</p>
        <p>48、为什么0.1 + 0.2 != 0.3?</p>
        <p>49、严格模式</p>
        <p>50、什么是函数柯里化？</p>
        <p>51、你了解js的数据结构吗？基本数据类型有哪些？复杂数据类型有哪些？在内存是如何表现的？</p>
        <p>52、你可以用js去实现一个单向、双向、循环链表吗？你可以实现查找、插入、删除操作吗？</p>
        <p>53、你是如何理解前端架构的？你了解持续集成吗？</p>
        <p>54、git大型项目的团队的合作以及持续性继承什么的；</p>
        <p>55、你了解基本的设计模式吗？举例单例模式、策略模式、代理模式、迭代模式、发布订阅模式</p>
        <p>56、js模块化 commonjs的UMD cmd 的规范的了解  以及es6的模块化跟其他几种的区别</p>
        <p>57、请你谈一下对于js拖拽功能的实现的理解，具体的实现方式是什么？</p>
        <p>58、闭包和作用域：</p>
        <p>59、闭包内存泄漏问题：</p>
        <p>60、window.open()打开新窗口并且不被拦截</p>
        <p>61、for in和for of区别</p>
        <p>62、微前端</p>
        <p>63、给obj设置动态属性名字</p>


        <br>
        <br>
        <p>四、typescript</p>
        <p>1、typescript语法，除了类型检查：eslint也可以</p>
        <p>2、ts和js的区别</p>
        <p>3、TypeScript和JavaScript的关系</p>
        <p>4、ts泛型的使用（商汤科技）</p>
        <p>5、用过哪些ts的方法（商汤科技）</p>


        <br>
        <br>
        <p>五、es6</p>
        <p>1、你是否可以利用面向对象的思维去抽象你的功能，你会构建一个class（ES6）吗？你对于前端架构的理解？</p>
        <p>2、用过哪些es6语法</p>
        <p>3、解构赋值：数组的解构赋值</p>
        <p>4、你考虑过ES6提出的真正趋势吗？</p>
        <p>5、ES6中的class和ES5的类有什么区别？</p>
        <p>6、import和require的区别（商汤科技）</p>
        <p>7、promise, Generator, async/await区别</p>
        <p>8、promise.then().then().then()中间的then怎么阻止返回</p>
        <p>9、await后面的执行（作业帮）</p>
        <p>10、promise.all()</p>
        <p>11、一句话描述promise</p>
        <p>12、promise有几种状态,Promise有什么优缺点?</p>
        <p>13、Promise构造函数是同步还是异步执行，then中的方法呢?promise如何实现then处理 ?</p>
        <p>14、在没有 promise 之前，怎么解决异步回调</p>
        <p>15、自己如何实现一个promise？</p>
        <p>16、Promise和setTimeout的区别</p>


    </div>
</template>

<script>
/*

  --------------------一、jquery---------------------

  1、jQuery获取的dom对象和原生的dom对象有何区别？
      js原生获取的dom是一个对象，jQuery对象就是一个数组对象，其实就是选择出来的元素的数组集合，
      所以说他们两者是不同的对象类型不等价。
      原生DOM对象转jQuery对象：
      var box = document.getElementById('box');
      var $box = $(box)
      jQuery对象转原生DOM对象：
      var $box = $('#box');
      var box = $box[0]

  2、jQuery插件：
      https://segmentfault.com/a/1190000008800382
      https://juejin.im/entry/57a1b817c4c971005af56343
      jQuery.extend()：
        jQuery.extend(object),一个参数的用于扩展jQuery类本身
        这个重载的方法，我们一般用来在编写插件时用自定义插件参数去覆盖插件的默认参数。

      jQuery.fn = jQuery.prototype，是jQuery对象的原型。jQuery.fn.extend()方法就是扩展jQuery对象的原型方法。
      第一种：
        (jQuery.fn.method = function() {
          console.log('method')
        })
        比如：
          $.fn.changeStyle = function(colorStr){
            this.css("color",colorStr);
            return this   //满足链式调用
          }
      第二种：
        (function($) {
          $.fn.extend({
            method: function() {
            }
          })
        })(jQuery)
        例如：
          (function($){
            $.fn.changeStyle = function(option){
              var defaultSetting = { colorStr:"green",fontSize:12};
              var setting = $.extend(defaultSetting,option);
              this.css("color",setting.colorStr).css("fontSize",setting.fontSize+"px");        
              return this;
            }
          })(jQuery);

    3、jQuery里面的选择器原理：
      从下至上查找  dom树

    4、监听浏览器的跳转事件
      if(window.history && window.history.pushState) {
        $(window).on('popstate', function() {
          var hashLocation = location.hash
          var hashSplit = hashLocation.split("#!/")
          var hashName = hashSplit[1]
          if(hashName !== '') {
            var hash = window.location.hash
            if(hash !== '') {
              console.log('跳转---')
            }
          }
        })
        window.history.pushState('forward', null, './#forward')
      }

    5、jQuery的事件委托怎么写的？
      一：什么是事件委托？
          事件委托是利用事件冒泡，只指定一个事件处理程序来管理某一类型的所有事件。

      二：为什么要用事件委托？
          1.在JavaScript中添加到页面上的事件处理程序的个数直接关系到页面的整体运行性能。为什么呢？因为，每个事件处理函数都是对象，对象会占用内存，内存中的对象越多，性能就越差。此外，必须事先指定所有的事件处理程序而导致的DOM访问次数，会延迟整个页面的交互就绪时间。
          2.对有很多个数据的表格以及很长的列表逐个添加事件，简直就是噩梦。所以事件委托，能极大地提高页面的运行性能，减少开发人员的工作量。
      三、事件委托写法
          1.用on方法
            $(function(){
              $("#lists").on("click","li",function(event){
                  var target = $(event.target);
                  target.css("background-color","red");
              })
            })
          2. 用delegate方法
            $(function(){
              $("#lists").delegate("li","click",function(event){
                  var target = $(event.target);
                  target.css("background-color","red");
              })
            })
            on()方法和delegate（）方法对于事件委托的写法很像。并且执行事件委托的时候只有子元素（本文中的li）会触发事件，而代为执行的父元素（本文中为ul）不会触发事件，所以我们不需要盘判断触发事件的元素节点名，这一点明显优于原生的JavaScript。
          3.用bind()方法，代码如下：
            $(function(){
              $("#lists").bind("click","li",function(event){
                  var target = $(event.target);
                  if(target.prop("nodeName")=="LI"){
                    target.css("background-color","red");
                  }
              })
            })
            bind()方法同原生的JavaScript实现方法一样，当父元素代子元素执行事件时，父元素也会触发事件，所以我们需要判断一下触发事件的元素名。此外，用bind()方法给元素绑定事件的时候要注意，它只能给已经存在DOM元素添加事件，不能给未来存在DOM元素添加添加事件。如果要频繁地添加DOM元素，并且给新添加的DOM元素绑定事件的话，用live(),delegate(),on()等方法。鉴于jQuery从1.7之后就不推荐live（）和delegate（）方法了，所以大家还是使用on（）方法吧。


    ------------------------------二、原型链--------------------------
    1、js数据类型：
      基本类型：number string boolean undefined  Symbol（符号,es6新增）
      引用类型：object(Function，Array，Date，RegExp，Null)

    2、对象都是通过函数创建的
      function Fn(){
        this.name = 'tianzhi'
        this.school = 28
      }
      var fn1 = new Fn()

      var arr = [1,2,3]
      var arr = new Array()
      arr[1] = 2

      var object = {a:1, b:2}
      var object = new Object()
      object.a = 1

      console.log(typeof (Object))  //function
      console.log(typeof (Array))  //function


  3、每个函数都有一个属性叫做prototype 
    prototype的属性值是一个对象(属性的集合),默认的只有一个叫做constructor的属性,指向这个函数本身
    可以在自己自定义的方法的prototype中新增自己的属性

     function FN(){
       FN.prototype.name = 'tianzhi'
       FN.prototype.handle = function(){
         return 'strawbrray'
       }
     }
     var obj = new FN()
     console.log(obj.name)
     console.log(obj.handle())
     FN是一个函数，FN2对象是从FN函数new出来的，这样FN2对象就可以调用FN.prototype中的属性

     每个对象都有个隐式原型'__proto__'
     obj.__proto__ === FN.prototype   //true


  4、每个对象都有一个__proto__属性，指向创建该对象的函数的prototype
    自定义函数的prototype：
       本质上就是和 var obj = {} 是一样的，都是用new Object()创建，所以它的__proto__指向的就是Object.prototype
    Function.prototype：
      __proto__也指向Object.prototype
    Object.prototype：
       一个特例——它的__proto__指向的是null，切记切记！
    函数也有__proto__：
      函数是由Function创建的
         var fn2 = new Function('x','y','return x + y')
      这种写法相当于
      function fn2(x,y) {
        return x+ y
      }
      console.log(fn2(1,2))

  5、typeof
    typeof用于基本数据类型的类型判断
    typeof Date  //function
    typeof Array //function
    typeof Object  //function
    typeof null  //object
    typeof undefined  //undefined

  6、instanceof
    instanceof 利用原型链继承关系做判断，它针对对象类型
    值类型用typeof判断   引用类型用typeof时候只返回object/function
    Instanceof运算符的第一个变量是一个对象，暂时称为A；第二个变量一般是一个函数，暂时称为B。
    Instanceof的判断队则是：沿着A的__proto__这条线来找，同时沿着B的prototype这条线来找，
              如果两条线能找到同一个引用，即同一个对象，那么就返回true。
              如果找到终点还未重合，则返回false。
    function foo(){}
    var f1 = new foo()
    console.log(f1 instanceof foo)    //true
    console.log(f1 instanceof Object)    //true
    console.log(Object instanceof Function)  //true 
    console.log(Function instanceof Object)   //true
    console.log(Function instanceof Function)  //true

  7、继承：
    function fn(){
      this.name = 'tianzhi'
    }
    fn.prototype.age = 25

    let Fn = new fn()
    Fn.name = 'dazhi'
    console.log(Fn.name,Fn.age)

    原型链: 访问一个对象的属性时，先在基本属性中查找，如果没有，再沿着__proto__这条链向上找，这就是原型链
    由于所有的对象的原型链都会找到Object.prototype，因此所有的对象都会有Object.prototype的方法。这就是所谓的“继承”。
  
  8、继承的几种方式： 
    1.原型链继承
      function Parent() {
        this.name = ['ming', 'song', 'zhi']
        this.age = 12
      }

      function Child() {
        this.gender = 'nan'
      }

      Child.prototype = new Parent()
      var obj = new Child()
      console.log(obj.name, obj.age, obj.gender)
    

    2.call apply实现继承
      function Person(name, age){
          this.name = name
          this.age = age
      }

      function Student(name, age, grade){
          console.log(Array.prototype.toString.call(arguments))
          Person.apply(this, arguments)
          // Person.call(this, name, age)
          this.grade = grade
      }

      var obj = new Student('tianzhi','25','一年级')
      console.log(obj.name, obj.age, obj.grade)

    3.组合继承
      function Parent(name, age) {
        this.name = name
        this.age = age
      }
      Parent.prototype.run = function() {
        console.log('run:', this.name, this.age)
      }

      function Child(name, age, grade) {
        this.grade = grade
        Parent.call(this, name, age)
      }

      Child.prototype = new Parent()
      
      let obj = new Child('tian', 12, 'grade 3')
      console.log(obj.name, obj.age, obj.grade)
      obj.run()

  9、Object.create
    1.写法一
      Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
      };
    2.写法二
      Object.create = function (obj) {
        var B = {};
        Object.setPrototypeOf(B, obj);
        return B;
      };
    3.写法三
      Object.create = function (obj) {
        var B = {};
        B.__proto__ = obj;
        return B;
      };


  -----------------------------三、原生javascript---------------------------

  1、JavaScript的函数调用有哪几种方式？请举例说明，并分析其不同之处。
      1.函数调用
            this指向：window
            返回值：由return值决定，如果没有return语句就表示没有返回值
      2.方法调用
            this指向：该方法的调用者
            返回值：由return语句决定
      3.构造函数调用
            this指向：当前构造函数创建的对象
            返回值：a、没有手动添加返回值，默认返回this
                  b、return了一个基本数据类型（数字、布尔值、null、undefined），最终返回this
                  c、return了一个复杂数据类型（对象），最终返回该对象
      4.上下文调用
              call和apply是方法，是所有函数都具有的方法。Function.prototype
              只要函数调用call/apply 方法，那么该函数就会立即执行。
              this指向： a、传递一个null/undefined------------------->window
                        b、传递一个数字、字符串、布尔值------->对应的基本包装类型的对象
                        c、传递一个对象------------------------------->指向该对象
              返回值：由return语句决定

  1、this代表函数调用相关联的对象，通常也称之为执行上下文。
      作为函数直接调用，非严格模式下，this指向window，严格模式下，this指向undefined；
      作为某对象的方法调用，this通常指向调用的对象。
      使用apply、call、bind 可以绑定this的指向。
      在构造函数中，this指向新创建的对象
      箭头函数没有单独的this值，this在箭头函数创建时确定，它与声明所在的上下文相同。
    
  2、请举例说明DOM event的传播机制和用途
    1.事件捕获，处于目标，事件冒泡
    var ev = document.getElementById('ev');

    ev.addEventListener('click', function (e) {
        console.log('ev captrue');
    }, true);

    window.addEventListener('click', function (e) {
        console.log('window captrue');
    }, true);

    document.addEventListener('click', function (e) {
        console.log('document captrue');
    }, true);

    document.documentElement.addEventListener('click', function (e) {
        console.log('html captrue');
    }, true);

    document.body.addEventListener('click', function (e) {
        console.log('body captrue');
    }, true);

    2.自定义事件
    var ev = new Event('test');
    ev.addEventListener('test', function () {
        console.log('test dispatch');
    });
    setTimeout(function () {
        ev.dispatchEvent(eve);
    }, 1000);
  
  3、作用域题
    alert(a)    // undefined
    var a = 1

    alert(b)    // 没有执行
    let b = 1   // 报错 b is not undefined

    alert(c)    // 没有执行
    const c = 1  // 报错 c is not undefined

  4、将一个json对象{a:1,b:2}转化成'a=1&b=2'的形式
    var json = {a:1, b:2}
    var str = ''
    for(var attr in json) {
        str += attr + '=' + json[attr] + '&'
    }
    str = str.slice(0, str.length-1)
    console.log(str)

  5、null和undefined的区别？
    （1）null是一个表示"无"的对象，转为数值时为0；
        undefined是一个表示"无"的原始值，转为数值时为NaN。
    （2）当声明的变量还未被初始化时，变量的默认值为undefined；
        null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。
    （3）undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：
          1）变量被声明了，但没有赋值时，就等于undefined。
          2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
          3）对象没有赋值的属性，该属性的值为undefined。
          4）函数没有返回值时，默认返回undefined。
        null表示"没有对象"，即该处不应该有值。典型用法是：
          1）作为函数的参数，表示该函数的参数不是对象。
          2）作为对象原型链的终点。

  6、== 和 === 有什么区别？
    === 不需要进行类型转换，只有类型相同并且值相等时，才返回true.
    == 如果两者类型不同，首先需要进行类型转换。具体流程如下:
    首先判断两者类型是否相同，如果相等，判断值是否相等.
    如果类型不同，进行类型转换
    判断比较的是否是 null 或者是 undefined, 如果是, 返回 true .
    判断两者类型是否为 string 和 number, 如果是, 将字符串转换成 number
    判断其中一方是否为 boolean, 如果是, 将 boolean 转为 number 再进行判断
    判断其中一方是否为 object 且另一方为 string、number 或者 symbol , 如果是, 将 object 转为原始类型再进行判断

  7、思考: [] == ![]
    我们来分析一下: [] == ![] 是true还是false？  true

    Boolean([])   // true
    Boolean(![])  // false

    Number([])    // 0
    Number(![])   // 0
 
    首先，我们需要知道 ! 优先级是高于 == (更多运算符优先级可查看: 运算符优先级)
    ![] 引用类型转换成布尔值都是true,因此![]的是false
    根据上面的比较步骤中的第五条，其中一方是 boolean，将 boolean 转为 number 再进行判断，false转换成 number，对应的值是 0.
    根据上面比较步骤中的第六条，有一方是 number，那么将object也转换成Number,空数组转换成数字，对应的值是0.(空数组转换成数字，对应的值是0，如果数组中只有一个数字，那么转成number就是这个数字，其它情况，均为NaN)
    0 == 0; 为true

  8、谈谈this
    https://www.jianshu.com/p/85e35c07b954

    直接调用：this指向window
    对象调用：对象.方法名() this指向调用该方法的对象
    new函数后调用：用Person函数创建一个对象实例person, 此时的this指向对象person.
    ES6中的箭头函数的调用：箭头函数本身不用再给this赋值，它用的是直接外层函数(即包含它的最近的一层函数或函数表达式)绑定的this。箭头函数this绑定了父级作用域的上下文
    call apply bind改变this指向；

    let age = 2;
    let kitty = {
        age: 1,
        grow: function() {
            setTimeout(function(){
                console.log(this)     // window
                console.log(++this.age)
            },100)
        }
    };
    kitty.grow()   // undefined

    window.name = 'globalName';
    var getName = function(){
        return this.name;
    };
    console.log( getName() );  // 输出： globalName

    window.name = 'globalName';
    var myObject = {
        name: 'sven',
        getName: function(){
            return this.name;
        }
    };
    var getName = myObject.getName;
    console.log( getName() );  // globalName

    window.name = 'globalName';
    var myObject = {
        name: 'sven',
        getName: function(){
            return this.name;
        }
    };
    var getName = myObject.getName();
    console.log( getName );  // sven

  9、call apply bind的区别：
    apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
    apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
    apply 、 call 、bind 三者都可以利用后续参数传参；
    bind 是返回对应函数，便于稍后调用；apply 、call则是立即调用。
    
    当使用 call 或者 apply 的时候，如果我们传入的第一个参数为 null，函数体内的 this 会指向默认的宿主对象，在浏览器中则是 window：

  10、let、const 以及 var 的区别是什么？
    let 和 const 定义的变量不会出现变量提升，而 var 定义的变量会提升。
    let 和 const 是JS中的块级作用域
    let 和 const 不允许重复声明(会抛出错误)
    let 和 const 定义的变量在定义语句之前，如果使用会抛出错误(形成了暂时性死区)，而var不会。
    const声明一个只读的常量。一旦声明，常量的值就不能改变(如果声明是一个对象，那么不能改变的是对象的引用地址)

  11、在JS中什么是变量提升？什么是暂时性死区？
    变量提升就是变量在声明之前就可以使用，值为undefined。

    在代码块内，使用let/const命令声明变量之前，该变量都是不可用的(会抛出错误)。这在语法上，称为“暂时性死区”。
    暂时性死区也意味着typeof不再是一个百分百安全的操作。

    typeof x; // ReferenceError(暂时性死区，抛错)
    let x;
    typeof y; // 值是undefined,不会报错
    暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

  12、类数组和数组的区别是什么？
     类数组：1）拥有length属性，其它属性（索引）为非负整数（对象中的索引会被当做字符串来处理）;
            2）不具有数组所具有的方法；
     类数组是一个普通对象，而真实的数组是Array类型。
    常见的类数组有: 函数的参数 arugments, DOM 对象列表(比如通过 document.querySelectorAll 得到的列表), jQuery 对象 (比如 $("div")).

  13、将类数组转化成数组的方法：
    1.第一种方法
    Array.prototype.slice.call(arrayLike, start);

    2.第二种方法
    [...arrayLike];
    
    3.第三种方法:
    Array.from(arrayLike);

  14、如何判断一个变量是不是数组？
      1.使用Array.isArray 判断，如果返回true, 说明是数组  
          Array.isArray([]) 返回true
      2.使用 instanceof Array 判断，如果返回true, 说明是数组
          [] instanceof Array 返回true
          '' instanceof Array  false
          {} instanceof Array  报错:Uncaught SyntaxError: Unexpected token instanceof
      3.使用 Object.prototype.toString.call 判断，如果值是 [object Array], 说明是数组
          Object.prototype.toString.call()   "[object Undefined]"
          Object.prototype.toString.call([])   "[object Array]"
          Object.prototype.toString.call({})   "[object Object]"
      4.通过 constructor 来判断，如果是数组，那么 arr.constructor === Array (不准确，因为我们可以指定 obj.constructor = Array)
          [].constructor === Array   true

  15、数组的哪些API会改变原数组？
    修改原数组的API有:
    splice/reverse/fill/copyWithin/sort/push/pop/unshift/shift

    不修改原数组的API有:
    slice/map/forEach/every/filter/reduce/entries/find

    注: 数组的每一项是简单数据类型，且未直接操作数组的情况下。

  16、取数组的最大值（ES5、ES6）
    // ES5 的写法
    Math.max.apply(null, [14, 3, 77, 30]);

    // ES6 的写法
    Math.max(...[14, 3, 77, 30]);

    // reduce
    [14,3,77,30].reduce((accumulator, currentValue)=>{
        return accumulator = accumulator > currentValue ? accumulator : currentValue
    });

  17、typeof和instanceof的区别（商汤科技）
        https://www.jianshu.com/p/b97445cf8d77
        typeof用于基本数据类型的类型判断，无法甄别对象具体类型（除了function）;
        instanceof用于对象的类型判断，基于原型链上的继承关系;

  18、说说JS的垃圾回收机制。
    Js具有自动垃圾回收机制。垃圾收集器会按照固定的时间间隔周期性的执行。

    JS中垃圾回收方式：
    1.标记清除（最常见的）
    工作原理：是当变量进入环境时，将这个变量标记为“进入环境”。当变量离开环境时，则将其标记为“离开环境”。
            标记“离开环境”的就回收内存。
    工作流程：
        1.垃圾回收器，在运行的时候会给存储在内存中的所有变量都加上标记。
        2.去掉环境中的变量以及被环境中的变量引用的变量的标记。
        3.再被加上标记的会被视为准备删除的变量。
        4.垃圾回收器完成内存清除工作，销毁那些带标记的值并回收他们所占用的内存空间。

    2.引用计数
    工作原理：跟踪记录每个值被引用的次数。
    工作流程：
        1.声明了一个变量并将一个引用类型的值赋值给这个变量，这个引用类型值的引用次数就是1。
        2.同一个值又被赋值给另一个变量，这个引用类型值的引用次数加1.
        3.当包含这个引用类型值的变量又被赋值成另一个值了，那么这个引用类型值的引用次数减1.
        4.当引用次数变成0时，说明没办法访问这个值了。
        5.当垃圾收集器下一次运行时，它就会释放引用次数是0的值所占的内存。

  19、什么情况会引起内存泄漏？
    （1）意外的全局变量引起的内存泄漏。
        原因：全局变量，不会被回收。
        解决：使用严格模式避免。
    （2）闭包引起的内存泄漏
        原因：闭包可以维持函数内局部变量，使其得不到释放。
        解决：将事件处理函数定义在外部，解除闭包,或者在定义事件处理函数的外部函数中，删除对dom的引用。
    （3）没有清理的DOM元素引用
        原因：虽然别的地方删除了，但是对象中还存在对dom的引用
        解决：手动删除。
    （4）被遗忘的定时器或者回调
        原因：定时器中有dom的引用，即使dom删除了，但是定时器还在，所以内存中还是有这个dom。
        解决：手动删除定时器和dom。
    （5）子元素存在引用引起的内存泄漏
        原因：div中的ul li  得到这个div，会间接引用某个得到的li，那么此时因为div间接引用li，即使li被清空，也还是在内存中，并且只要li不被删除，他的父元素都不会被删除。

      示例：
        var x = [];
        function createSomeNodes() {
          var div,
          i = 100,
          frag = document.createDocumentFragment();
          for (;i > 0; i--) {
            div = document.createElement("div");
            div.appendChild(document.createTextNode(i + " - "+ new Date().toTimeString()));
            frag.appendChild(div);
          }
          document.getElementById("nodes").appendChild(frag);
        }
        function grow() {
          x.push(new Array(1000000).join('x'));
          createSomeNodes();
          setTimeout(grow,1000);
        }
        grow()

  20、js内存泄漏的排查方法（饿了么）
    https://github.com/wengjq/Blog/issues/1
    http://www.ruanyifeng.com/blog/2017/04/memory-leak.html  阮一峰 内存泄漏 垃圾回收机制

    Chrome的timeline、performance monitor
    如果运行平稳则是正常，一直增加就是内存泄漏

  21、进程和线程是什么：
      进程是资源分配的最小单位，线程是CPU调度的最小单位
      （1）线程是最小的执行单元，进程是最小的资源管理单元：
          线程是最小的执行单元，而进程由至少一个线程组成。
          如何调度进程和线程，完全由操作系统决定，程序自己不能决定什么时候执行，执行多长时间。
          进程指计算机中已运行的程序。
          线程指操作系统能够进行运算调度的最小单位。
      （2）一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程（一般情况）
      （3）一个进程对应多个线程最为常见，Linux、Windows等是这么实现的。其实理论上这种关系并不是一定的，可以存在多个进程对应一个线程，例如一些分布式操作系统的研究使用过这种方式，让线程能从一个地址空间转移到另一个地址空间，甚至跨机器调用不同的进程入口（感谢AlienZHOU补充）

  22、js防抖和节流
      https://segmentfault.com/a/1190000018383955

      解决的问题：
         高频率的函数会导致页面卡顿，性能开销；DOM频繁重绘的卡顿，用户体验；Ajax数据请求导致接口崩溃
      防抖（debounce)：
          在事件被触发n秒后再执行回调函数，如果在这n秒内又被触发，则重新计时延迟时间。
          “非立即执行防抖”：指事件触发后，回调函数不会立即执行，会在延迟时间n秒后执行，
                        如果n秒内被调用多次，则重新计时延迟时间
          “立即执行防抖”：指事件触发后，回调函数会立即执行，之后要想触发执行回调函数，需等待n秒延迟
          函数防抖原理：通过维护一个定时器，其延迟计时以最后一次触发为计时起点，到达延迟时间后才会触发函数执行。
      节流（throttle)：
          规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效（间隔执行）
          函数节流原理：一定时间内只触发一次，间隔执行。通过判断是否到达指定触发时间，间隔时间固定。
      “防抖” 与 “节流” 的异同：
        相同：都是防止某一时间段内，函数被频繁调用执行，通过时间频率控制，减少回调函数执行次数，来实现相关性能优化。
        区别：“防抖”是某一时间内只执行一次，最后一次触发后过段时间执行，而“节流”则是间隔时间执行，间隔时间固定。
      “防抖” 与 “节流” 的应用场景：
        防抖：
          文本输入搜索联想
          文本输入验证（包括 Ajax 后端验证）
        节流：
          鼠标点击
          监听滚动 scroll
          窗口 resize
          mousemove 拖拽

  23、深拷贝和浅拷贝的区别
      https://cnblogs.com/biaochenxuying/p/11438353.html
      浅拷贝是指只复制第一层对象，但是当对象的属性是引用类型时，
      实质复制的是其引用，当引用指向的值改变时也会跟着变化。

      深拷贝复制变量值，对于非基本类型的变量，则递归至基本类型变量后，再复制。

      深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。

  24、深拷贝有哪些方式
      https://juejin.im/post/5cb8323cf265da038e54a35e

      1.使用递归方式进行深拷贝：
        var json = {a:6,b:5,c:[1,2,3,4,5]};
        function clone(json) {
            var json1 = {};
            for(var attr in json) {
                if( isNaN(json[attr]) ) {
                    clone(json[attr]);
                }
                json1[attr] = json[attr];
            };
            return json1;
        };
        console.log( clone(json) );
      2.通过JSON对象实现深拷贝 JSON.parse(JSON.stringify(obj))
      3.使用jq（extend）方法实现深拷贝 $.extend(true,{},obj);
      4.object.assign()实现深拷贝 只能拷贝一维 Object.assign({}, obj1)
      5.lodash函数库实现深拷贝 lodash.cloneDeep(obj)
      6.MessageChannel实现深拷贝
      7.Web Worker实现深拷贝

  25、js深度复制的方式
      1.使用jq的$.extend(true, target, obj)
      2.newobj = Object.create(sourceObj)，// 但是这个是有个问题就是 newobj的更改不会影响到 sourceobj但是 sourceobj的更改会影响到newObj
      3.newobj = JSON.parse(JSON.stringify(sourceObj))

  26、原生的js如何设置元素的高度？（自如网）
      1.方法一：
      var html = document.getElementsByTagName('html')[0];
      html.style.height = '200px'

      2.方法二：
      var obj = document.getElementById('myelem');
      obj.style.cssText = 'height:200px'

      obj.offsetHeight
      obj.clientHeight

  27、target和currenttarget的区别（自如网）
      https://www.jianshu.com/p/1dd668ccc97a

      e.target 指向触发事件监听的对象。
      e.currentTarget 指向添加监听事件的对象。
      <ul>
          <li>hello 1</li>
          <li>hello 2</li>
          <li>hello 3</li>
          <li>hello 4</li>
      </ul>
      注意：注释里面不能用script标签
      < script >
          let ul = document.querySelectorAll('ul')[0]
          let aLi = document.querySelectorAll('li')
          ul.addEventListener('click',function(e){
            let oLi1 = e.target 
            let oLi2 = e.currentTarget
            console.log(oLi1)   //  被点击的li
            console.log(oLi2)   // ul
            console.log(oLi1===oLi2)  // false
            console.log(e.currentTarget===this) // true
            console.log(e.target===this) // false

            e.target ==> li
            e.currentTarget ==> ul
            this ==> e.currentTarget

          })
      </ script >

  28、innerhtml和document.write的区别（商汤科技）
      https://blog.csdn.net/u012309349/article/details/47946869

      总结：
      document.write会将页面上的所有内容清除包括标题，导致页面全部重绘
      innerHTML只会重写所属元素的内容，即<div>元素中的内容

  29、怎么判断一个变量是否存在？（商汤科技）
      需要考虑是undefined还是null

  30、为什么Boolean({})=true（商汤科技）
      http://www.w3school.com.cn/jsref/jsref_obj_boolean.asp
      如果省略 value 参数，或者设置为 0、-0、null、""、false、undefined 或 NaN，则该对象设置为 false。否则设置为 true（即使 value 参数是字符串 "false"）

  31、Bom对象：浏览器对象模型
      （1）window对象：顶层对象 表示瀏覽器打開的視窗，包括獲取焦點、改變捲軸、設置計時器等等。
      （2）navigator物件：包含瀏覽器資訊。 如：獲取瀏覽器名稱、版本資訊、作業系統平臺資訊等等。
      （3）screen物件：包含螢幕資訊。 如：獲取螢幕高度、寬度等等。
      （4）history物件：可對當前頁的流覽歷史進行操作，如：前進、後退等。
      （5）location物件：可對當前頁面的URL進行操作，如：導航到新的頁面、獲取URL資訊等。

  32、请简述下js引擎的工作原理，js是怎样处理事件的eventloop，宏任务源tasks和微任务源jobs分别有哪些？
      Eventloop
        https://juejin.im/post/5cbc0a9cf265da03b11f3505
        https://github.com/YvetteLau/Blog/issues/4

        在一个事件循环中，异步事件返回结果后会被放到一个任务队列中。然而，根据这个异步事件的类型，这个事件实际上会被对应的宏任务队列或者微任务队列中去，当执行栈为空的时候，主线程会首先查看微任务中的事件，如果微任务不是空的那么执行微任务中的事件，如果没有在宏任务中取出最前面的一个事件。把对应的回调加入当前执行栈...如此反复，进入循环。

        macro-task(宏任务)
            setTimeout
            setInterval
            setImmediate

        micro-task(微任务)
            Promise
            process.nextTick
        
        面试题1：（字节）
          async function async1() {
            console.log('async1 start');

            await async2();
            console.log('async1 end');

            以上代码相当于
            promise.resolve(async2()).then(() => {
              console.log('async1 end');
            })
          }
          async function async2() {
            console.log('async2');
          }
          console.log('script start');
          setTimeout(function() {
            console.log('setTimeout');
          }, 0);
          async1();
          new Promise(function(resolve) {
            console.log('promise1');
            resolve();
          }).then(function() {
            console.log('promise2');
          });
          console.log('script end');

          结果：
          script start
          async1 start
          async2
          promise1
          script end
          async1 end
          promise2
          setTimeout


        面试题2：
          console.log('script start');

          setTimeout(function () {
              console.log('setTimeout---0');
          }, 0);

          setTimeout(function () {
              console.log('setTimeout---200');
              setTimeout(function () {
                  console.log('inner-setTimeout---0');
              });
              Promise.resolve().then(function () {
                  console.log('promise5');
              });
          }, 200);

          Promise.resolve().then(function () {
              console.log('promise1');
          }).then(function () {
              console.log('promise2');
          });
          Promise.resolve().then(function () {
              console.log('promise3');
          });
          console.log('script end');

          结果：
          script start
          script end
          promise1
          promise3
          promise2
          setTimeout---0
          setTimeout---200
          promise5
          inner-setTimeout---0
        
        面试题3（快手）：
          console.log('script start');

          setTimeout(function() {
              console.log('setTimeout');
          }, 0)

          new Promise(function(resolve) {
              console.log('promise1');
              resolve();
          }).then(function() {
              console.log('promise2');
          });

          new Promise((resolve, reject) => {
              console.log('promise3')
              setTimeout(() => {
                  resolve('111')
                  resolve('222')
                  reject()
              }, 1000)
          })
          .then((data1) => {
              console.log('res1', data1)
          }, (data2) => {
              console.log('res2', data2)
          })
          .then((data3) => {
              console.log('res3', data3)
          })

          console.log('script end');

          script start
          promise1
          promise3
          script end
          promise2
          setTimeout
          res1 111
          res3 undefined


  33、js是如何构造抽象语法树（AST）的？
      抽象语法树（Abstract Syntax Tree）也称为AST语法树，指的是源代码语法所对应的树状结构。
      也就是说，对于一种具体编程语言下的源代码，通过构建语法树的形式将源代码中的语句映射到树中的每一个节点上。 

      https://www.cnblogs.com/fundebug/p/how-does-javascript-compile.html
      https://segmentfault.com/a/1190000016231512

      将一个简单的函数转化成AST之后的样子：
      简单函数
      function square(n) {
          return n * n;
      }
      
      转换后的AST
      {
        type: "FunctionDeclaration",
        id: {
            type: "Identifier",
            name: "square"
        },
        params: [
            {
              type: "Identifier",
              name: "n"
            }
        ],
        ...

  34、Math.floor()，Math.ceil()，Math.round()的区别
      Math.floor(): 向下取整，返回的比它小的整数
      Math.ceil(): 向上取整，返回的比它大的整数
      Math.round(): 类似于四舍五入

  35、Object.defineProperty(obj, prop, descriptor)
        https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
        obj：要在其上定义属性的对象。
        prop：要定义或修改的属性的名称。
        descriptor：将被定义或修改的属性描述符。

        数据描述符和存取描述符均具有以下可选键值：
            （1）configurable：当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
            （2）enumerable：当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。
            （3）value：该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
            （4）writable：当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。
        存取描述符同时具有以下可选键值：
            （1）get：一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入this对象（由于继承关系，这里的this并不一定是定义该属性的对象）。
            默认为 undefined。
            （2）set：一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。
            默认为 undefined。

  36、轮询
        https://www.cnblogs.com/hoojo/p/longPolling_comet_jquery_iframe_ajax.html
        https://www.cnblogs.com/zhaowinter/p/5332681.html

        客户端定时向服务器发送Ajax请求，服务器接到请求后马上返回响应信息并关闭连接。 
        优点：后端程序编写比较容易。 
        缺点：请求中有大半是无用，浪费带宽和服务器资源。 
        实例：适于小型应用。

  37、websocket
      http://www.ruanyifeng.com/blog/2017/05/websocket.html

  38、SourceMap
      http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html
      https://www.jianshu.com/p/ebf0ca8febb2

  39、js性能问题，同时加载多个js文件（饿了么）
        https://www.ibm.com/developerworks/cn/web/1308_caiys_jsload/index.html

        1）、将所有的<script>标签放到页面底部，也就是</body>闭合标签之前，这能确保在脚本执行前页面已经完成了渲染。
        2）、尽可能地合并脚本。页面中的<script>标签越少，http请求次数少，加载也就越快，响应也越迅速。无论是外链脚本还是内嵌脚本都是如此。
        3）、采用无阻塞下载 JavaScript 脚本的方法：
            使用<script>标签的 defer 属性（仅适用于 IE 和 Firefox 3.5 以上版本）；
            使用动态创建的<script>元素来下载并执行代码； loadScript
            使用 XHR 对象下载 JavaScript 代码并注入页面中。
    
  40、defer和async的区别（自如网）
        <body>
            <script type="text/javascript" defer>
                alert("defer");
            </ script>
            <script type="text/javascript">
                alert("script");
            </ script>
            <script type="text/javascript">
                window.onload = function(){
                    alert("load");
                };
            </ script>
        </body>   
        以上代码执行的顺序是：‘script’，‘defer’，‘load’

        带有 defer 属性的<script>标签可以放置在文档的任何位置。对应的 JavaScript 文件将在页面解析到<script>标签时开始下载，但不会执行，直到 DOM 加载完成，即onload事件触发前才会被执行。当一个带有 defer 属性的 JavaScript 文件下载时，它不会阻塞浏览器的其他进程，因此这类文件可以与其他资源文件一起并行下载。

        HTML 5 为<script>标签定义了一个新的扩展属性：async。它的作用和 defer 一样，能够异步地加载和执行脚本，不因为加载脚本而阻塞页面的加载。但是有一点需要注意，在有 async 的情况下，JavaScript 脚本一旦下载好了就会执行，所以很有可能不是按照原本的顺序来执行的。如果 JavaScript 脚本前后有依赖性，使用 async 就很有可能出现错误。

        总结：
        1.都是异步执行脚本的方法
        2.何时执行：defer在onload事件触发前才会被执行，async下载完就执行
        3.顺序：defer按照顺序执行，async无序执行
        4.应用：当js脚本前后存在依赖关系的时候用defer，不存在依赖关系的用async

  41、loadscript封装：
        https://blog.csdn.net/load_life/article/details/7336828

        loadScript(settings)，settings的参数：
        url:脚本路径
        async:是否异步，默认false(HTML5)
        charset:文件编码
        cache:是否缓存，默认为true
        success:加载成功后执行的函数，优先执行callback。

        function loadScript(url, callback){
            var script = document.createElement("script")
            script.type = "text/javascript";
            if (script.readyState){ // IE
                script.onreadystatechange = function(){
                    if (script.readyState == "loaded" || script.readyState == "complete"){
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else { // Others
                script.onload = function(){
                    callback();
                };
            }
            script.src = url;
            document.getElementsByTagName("head")[0].appendChild(script);
        }

  42、node占用内存优化，多线程（饿了么）
      console.log(process.memoryUsage())

  43、XMLHttpRequest通用属性和方法？
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(response) {
          if(response.readystate == 4) {
            if(res.status == 200) {
              success && success()
            }
          }
        }

  44、h5内唤起app的方法（饿了么）
        https://www.cnblogs.com/angelatian/p/9259422.html

  45、js跳出循环
        forEach循环：throw new Error('error')
            https://www.cnblogs.com/Marydon20170307/p/8920775.html

            try {
                var array = ["first","second","third","fourth"];
                // 执行到第3次，结束循环
                array.forEach(function(item,index){
                    if (item == "third") {
                        throw new Error("EndIterative");
                    }
                    alert(item);// first,sencond
                });
            } catch(e) {
                if(e.message!="EndIterative") throw e;
            };
            // 下面的代码不影响继续执行
            alert(10);

        for循环：
            break  跳出
            continue  跳过

  46、for of, for in和forEach, map的区别：
        for...of循环：
            具有iterator接口，就可以用for...of循环遍历它的成员(属性值)。
            for...of循环可以使用的范围包括数组、Set和Map结构、某些类似数组的对象、Generator对象，以及字符串。
            for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。对于普通的对象，for...of结构不能直接使用，会报错，必须部署了Iterator接口后才能使用。可以中断循环。
        for...in循环：
            遍历对象自身的和继承的可枚举的属性, 不能直接获取属性值。可以中断循环。 break
        forEach: 
            只能遍历数组，不能中断，没有返回值(或认为返回值是undefined)。
        map: 只能遍历数组，不能中断，返回值是修改后的数组。

  47、setTimeout倒计时为什么会出现误差？
        setTimeout() 只是将事件插入了“任务队列”，必须等当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。要是当前代码消耗时间很长，也有可能要等很久，所以并没办法保证回调函数一定会在 setTimeout() 指定的时间执行。所以， setTimeout() 的第二个参数表示的是最少时间，并非是确切时间。

        HTML5标准规定了 setTimeout() 的第二个参数的最小值不得小于4毫秒，如果低于这个值，则默认是4毫秒。在此之前。老版本的浏览器都将最短时间设为10毫秒。另外，对于那些DOM的变动（尤其是涉及页面重新渲染的部分），通常是间隔16毫秒执行。这时使用 requestAnimationFrame() 的效果要好于 setTimeout();

  48、为什么0.1 + 0.2 != 0.3?
        0.1 + 0.2 != 0.3 是因为在进制转换和进阶运算的过程中出现精度损失。

  49、严格模式
      https://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html
      
      "use strict"
      消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
      消除代码运行的一些不安全之处，保证代码运行的安全；
      提高编译器效率，增加运行速度；
      为未来新版本的Javascript做好铺垫。

  50、什么是函数柯里化？
        实现sum(1)(2)(3)返回结果是1,2,3之和
        函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
        并且返回接受余下的参数而且返回结果的新函数的技术。

        function sum(a) {
            return function(b) {
                return function(c) {
                    return a+b+c;
                }
            }
        }
        console.log(sum(1)(2)(3)); // 6

        引申：实现一个curry函数，将普通函数进行柯里化:

        function curry(fn, args = []) {
          return function() {
              let _args = [].slice.call(arguments)
              let rest = [...args, ..._args];
              console.log('rest', rest)
              if (rest.length < fn.length) {
                  return curry.call(this, fn, rest);
              } else { 
                  return fn.apply(this, rest);
              }
          }
      }

      //test
      function sum(a,b,c) {
          return a+b+c;
      }
      let sumFn = curry(sum);
      console.log('sumFn:', sumFn(1))
      console.log(sumFn(1)(2)(3)); //6
      console.log(sumFn(1)(2, 3)); //6


      function add() {
          // 第一次执行时，定义一个数组专门用来存储所有的参数
          var _args = [].slice.call(arguments);

          // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
          var adder = function () {
              var _adder = function() {
                  // [].push.apply(_args, [].slice.call(arguments));
                  _args.push(...arguments);
                  return _adder;
              };

              // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
              _adder.toString = function () {
                  return _args.reduce(function (a, b) {
                      return a + b;
                  });
              }

              return _adder;
          }
          // return adder.apply(null, _args);
          return adder(..._args);
      }

      var a = add(1)(2)(3)(4);   // f 10
      var b = add(1, 2, 3, 4);   // f 10
      var c = add(1, 2)(3, 4);   // f 10
      var d = add(1, 2, 3)(4);   // f 10

      可以利用隐式转换的特性参与计算
      console.log(a + 10); // 20
      console.log(b + 20); // 30
      console.log(c + 30); // 40
      console.log(d + 40); // 50

      也可以继续传入参数，得到的结果再次利用隐式转换参与计算
      console.log(a(10) + 100);  // 120
      console.log(b(10) + 100);  // 120
      console.log(c(10) + 100);  // 120
      console.log(d(10) + 100);  // 120

  51、你了解js的数据结构吗？基本数据类型有哪些？复杂数据类型有哪些？在内存是如何表现的

  52、你可以用js去实现一个单向、双向、循环链表吗？你可以实现查找、插入、删除操作吗

  53、你是如何理解前端架构的？你了解持续集成吗

  54、git大型项目的团队的合作以及持续性继承什么的

  55、你了解基本的设计模式吗？举例单例模式、策略模式、代理模式、迭代模式、发布订阅模式

  56、js模块化commonjs的UMD cmd的规范的了解，以及es6的模块化跟其他几种的区别

  57、请你谈一下对于js拖拽功能的实现的理解，具体的实现方式是什么？
  
  58、闭包和作用域：
    闭包就是能够读取其他函数内部变量的函数。
    闭包的用途：可以读取函数内部的变量，并且让这些变量的值始终保持在内存中。

    js闭包：闭包什么时候给变量赋值？

    // 同时输出5个5
    for(var i=0;i<5;i++){
      setTimeout(() => {
        console.log(i) 
      },1000);
    }

    // 同时输出5，6，7，8，9
    for(var i=0;i<5;i++){
      setTimeout(function() {
        console.log(i++)
      },1000)
    }

    // 每隔一秒输出一个5
     for(var i=0; i<5; i++){
       setTimeout(() => {
         console.log(i)
       }, 1000*i)
     }

    // 同时输出0，1，2，3，4
    for(let i=0;i<5;i++){
      setTimeout(() => {
        console.log(i)
      },1000)
    }

    // 每隔一秒依次输出0，1，2，3，4
    for(var i=0; i<5; i++ ){
      ((j) => {
        setTimeout(() => {
          console.log(j)
        },1000*j)
      })(i)
    }

  59、闭包内存泄漏问题：
      http://www.ruanyifeng.com/blog/2017/04/memory-leak.html

      函数作为返回值
      function fn() {
        var max = 10
        return function compare(x) {
          if(x > max) {
            console.log(true)
          }
        }
      }
      var f1 = fn()     
      f1(15)  //true


      函数作为参数被传递
      var max = 10
      function fn(x) {
        if(x > max) {
          console.log(true)
        }else{
          console.log(false)
        }
      }
      (function(f){
        var max = 100
        f(12)   //true  max变量的取值是10，而不是100:要去创建这个函数的作用域取值，而不是“父作用域”
      })(fn)

  60、window.open()打开新窗口并且不被拦截
    https://blog.csdn.net/dongguan_123/article/details/62416767
    https://blog.csdn.net/Wbiokr/article/details/83096466
    https://www.jianshu.com/p/89f3db4b7537
    https://segmentfault.com/a/1190000015381923

  61、for in和for of区别
    for~in语句用于遍历对象，而for~of语句用于遍历数组
    for..in迭代的是对象的 键 的列表，而for..of则迭代 对象的键对应的值 。

    var obj = {
      1: 'one',
      2: 'two',
      3: 'three'
    }
    for(var i in obj) {
      console.log(obj[i])   // 1 2 3 4 5
    }

    var arr = [1, 2, 3, 4, 5]
    for(var i in arr) {
      console.log(arr[i])   // 1 2 3 4 5
    }
    for(var i of arr) {
      console.log(i)    // 1 2 3 4 5
    }

  62、微前端
    https://blog.csdn.net/vipshop_fin_dev/article/details/105621839

  63、给obj设置动态属性名字
    https://www.jb51.net/article/56421.htm
    var arr=[];
    arr['js']='jquery';
    arr['css']='oocss';
    var obj={};
    for(var i in arr){
      obj[i] = arr[i];
    }
    alert(obj.js);  // jquery
    就是那么简单!把对象obj当成一个数组来对待,它支持使用类似于下标形式的方法来把属性和属性值赋给对象.但是,对象依然是对象,obj.length是不存在的.

  --------------------四、typescript---------------------

  1、typescript语法，除了类型检查：eslint也可以
    https://juejin.im/entry/5a156adaf265da43231aa032

    ESLint 是一个代码检查工具，主要用来发现代码错误、统一代码风格，目前已被广泛的应用于各种 JavaScript 项目中。
  
  2、ts和js的区别
    http://taobaofed.org/blog/2017/03/09/head-first-typescript/

    TypeScript是微软开发一款开源的编程语言，本质上是向JavaScript增加静态类型系统。
    它是JavaScript的超集，所有现有的JavaScript都可以不加改变就在其中使用。
    它是为大型软件开发而设计的，它最终编译产生JavaScript，所以可以运行在浏览器、Node.js等等的运行时环境。

  3、TypeScript和JavaScript的关系
    和一些基于JavaScript的激进语言不同（比如CoffeeScript），
    TypeScript的语法设计首先考虑的就是兼容JavaScript，或者说对JavaScript的语法做扩展。
    基本上是在JavaScript的基础之上增加了一些类型标记语法，以实现静态类型分析。
    把这些类型标注语法去掉之后，仍是一个标准的JavaScript语言。

    TypeScript同样也在做一些新语法编译到老语法的事情（就像Babel做的），
    基本实现常用的EcmaScript Stage 1以上的语法特性。

  4、ts泛型的使用（商汤科技）
      https://www.tslang.cn/

      泛型 Generics 
      Generics是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使⽤的时候再指定类型的一种特性。

      定义范型接口
      // interface Result<T> {
      //   ok: 0 | 1;
      //   data: T[]; 
      // }

      定义泛型函数
      // function getData<T>(): Result<T> {
      //   const data: any[] = [
      //     { id: 1, name: "类型注解", version: "2.0" }, { id: 2, name: "编译型语⾔言", version: "1.0" }
      //   ];
      //   return { ok: 1, data };
      // }


  5、用过哪些ts的方法（商汤科技）
      https://www.tslang.cn/




  --------------------五、es6---------------------
  1、你是否可以利用面向对象的思维去抽象你的功能，你会构建一个class（ES6）吗？你对于前端架构的理解？

  2、用过哪些es6语法  
    let/const
    箭头函数
    解构赋值
    拓展运算符 ...
    Promise
    Object.assign
    import / export

  3、解构赋值：数组的解构赋值
    http://es6.ruanyifeng.com/#docs/destructuring

  4、你考虑过ES6提出的真正趋势吗？

  5、ES6中的class和ES5的类有什么区别？
    ES6 class 内部所有定义的方法都是不可枚举的;
    ES6 class 必须使用 new 调用;
    ES6 class 不存在变量提升;
    ES6 class 默认即是严格模式;
    ES6 class 子类必须在父类的构造函数中调用super()，这样才有this对象;
    ES5中类继承的关系是相反的，先有子类的this，然后用父类的方法应用在this上。

  6、import和require的区别（2019-商汤科技）
    import引用的变量改变 不会影响原来的值
    require引用的变量改变 会影响原来的值

  7、promise, Generator, async/await区别
      https://www.lazycoffee.com/articles/view?id=58ab09eea072b332753d9774
      https://blog.csdn.net/deng1456694385/article/details/83831931

      1.promise比较简单，也是最常用的，主要就是将原来的用回调函数的异步编程方法转成用relsove和reject触发事件，用then和catch捕获成功或者失败的状态执行相应代码的异步编程的方法, promise将多个回调函数嵌套的回调地狱，变成了链式的写法，可读性更高写法也更清晰；但是希望顺序执行时，处理链式调用麻烦，需要多次使用then；捕获错误麻烦
      2.Generator函数是将函数分步骤阻塞，希望顺序执行时方便；捕获错误简洁；但是只有主动调用next()才能进行下一步；
      3.async函数就相当于自执行的Generator函数，Generator函数的语法糖，相当于自带一个状态机，在await的部分等待返回，返回后自动执行下一步；如果中途出错返回空值了，可以直接return中止执行

  8、promise.then().then().then()中间的then怎么阻止返回
      return promise.reject()

  9、await后面的执行（2019-作业帮）
    正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
    async function f() {
        // 等同于
        // return 123;
        return await 123;
    }
    f().then(v => console.log(v))
    上面代码中，await命令的参数是数值123，这时等同于return 123。
    
    await 13 不会报错 但是没有意义

    async function hh() {
        await setTimeout(() => {
          console.log('time')
        }, 200) 
    }
    hh().then(v => console.log(v))   // time
    上面会执行吗？

  10、promise.all()
      http://liubin.org/promises-book/#ch2-promise-all

      Promise.all接收一个promise对象的数组作为参数，当这个数组里的所有promise对象全部变为resolve或reject状态的时候，它才会去调用.then方法。

      传递给Promise.all的promise并不是一个个的顺序执行的，而是同时开始、并行执行的。

      而且每个promise的结果（resolve或reject时传递的参数值，和传递给Promise.all 的promise数组的顺序是一致的。

      如果传入的参数是一个空的可迭代对象，那么此promise对象回调完成(resolve),只有此情况，是同步执行的，其它都是异步返回的。
      如果传入的参数不包含任何promise，则返回一个异步完成。
      promises中所有的promise都“完成”时或参数中不包含 promise 时回调完成。
      如果参数中有一个promise失败，那么Promise.all返回的promise对象失败
      在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组

  11、一句话描述promise
      Promise对象用于异步操作，它表示一个尚未完成且预计在未来完成的异步操作。

  12、promise有几种状态,Promise有什么优缺点?
    promise有三种状态: fulfilled, rejected, pending

    Promise的优点:
    一旦状态改变，就不会再变，任何时候都可以得到这个结果
    可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

    Promise的缺点:
    无法取消Promise
    当处于pending状态时，无法得知目前进展到哪一个阶段

  13、Promise构造函数是同步还是异步执行，then中的方法呢?promise如何实现then处理 ?
      Promise的构造函数是同步执行的。then中的方法是异步执行的。

  14、在没有 promise 之前，怎么解决异步回调
      http://www.ruanyifeng.com/blog/2012/12/asynchronous＿javascript.html

  15、自己如何实现一个promise？
    https://github.com/FEGuideTeam/FEGuide/blob/master/%E6%89%8B%E5%86%99%E4%BB%A3%E7%A0%81/READEME.md#js-%E5%AE%9E%E7%8E%B0%E5%8D%83%E4%BD%8D%E5%88%86%E9%9A%94%E7%AC%A6 

  16、Promise和setTimeout的区别?
     Promise 是微任务，setTimeout 是宏任务，同一个事件循环中，promise总是先于 setTimeout 执行。


*/


    export default {
        mounted() {

          // 字节跳动
          // this.ziJieTiaoDong()
          
          // 知网
          // this.zhiwang()

        },
        methods: {
          todetail() {
            this.$router.push('/')
            this.$router.push("/javascript")
          },
          ziJieTiaoDong() {
              const obj = {
                name: "jsCoder",
                skill: ["es6", "react", "angular"],
                say: function () {
                  for(let i = 0, len = this.skill.length; i< len; i++){
                    let _this = this
                    setTimeout(function(){
                      console.log('No.' + i + _this.name);
                      console.log(_this.skill[i]);
                      console.log('--------------------------');
                    }, 0);
                    console.log(i+1);
                  }
                }
              };
              obj.say();
              /*期望得到下面的结果:
              1
              2
              3
              No.1 jsCoder
              es6
              /------------------------
              No.2 jsCoder
              react
              /---------------------------
              No. 3 jsCoder
              angular
              /--------------------------
              */


              // function a() {
              //   console.log('a');
              //   Promise.resolve().then(() => {
              //     console.log('e')
              //   })
              // };
              // function b() {
              //   console.log('b')
              // }
              // function c() {
              //   console.log('c');
              // }
              // function say() {
              //   setTimeout(a, 0);
              //   var temp = Promise.resolve().then(b);
              //   setTimeout(c, 0);
              //   console.log('d');
              // }
              // say()    //d b a e c


              // function person(x, y) {
              //   this.name = x,
              //   this.age = y
              // }

              // var obj = {
              //   name = 'qw'
              // }

              // person.bind(obj, x)
          },
          zhiwang() {

              //   var a = [1,2,3,4],
              //        i = 0;
              //
              //    a[i++] = a[i++]*2;
                  //console.log(a);    //[4,2,3,4]

                  /*
                  解析：

                  i++ 执行完语句后再加1

                  ++i 先加1再执行后面的语句

                  例如 var i=0;

                  ++i 的值为1

                  i++的值为0

                  注意：不管前置++还是后置++，i的值都会发生变化，值为1
                  */

                  //////////////////////////////////////////////////////////////////////////

              //    b(); a();
              //    var a = function () {
              //        console.log('aaa');
              //    };
              //
              //    function b() {
              //        console.log('bbb');
              //    }


              //  结果: 'bbb'  'a is not a function'

                  //////////////////////////////////////////////////////////////////////////

              //    var name = 'global';
              //    var obj = {
              //        name: 'obj',
              //        dose: function () {
              //            this.name = 'dose';
              //            return function(){
              //                return this.name;
              //            }
              //        }
              //    }
              //    var result = obj.dose().call(this);   //call将this指向window
              //    console.log(result);    // global
              //    console.log(this)    //window
              //    console.log(this.name)   //global


                  //////////////////////////////////////////////////////////////////////////

                  //call实现继承方法
              //    function num1(){
              //        this.a = 'zhi';
              //        this.add = function () {
              //            return this.a;
              //        }
              //    }
              //    function num2(){
              //        this.a = 'tian';
              //    }
              //
              //    var n1 = new num1();
              //    var n2 = new num2();
              //    var result = n1.add.call(n2);
              //    console.log(result)  //tian


                  //////////////////////////////////////////////////////////////////////////
              //   call转变this指向
              //    function add(a,b) {
              //        return a+b
              //    }
              //    function sub(a,b) {
              //        return a-b
              //    }
              //
              //    var a = add.call(sub,1,2);
              //    var b = sub.call(add,1,2);

              //    apply写法
              //    var a = add.apply(sub,[1,2]);
              //    var b = sub.apply(add,[1,2]);

              //    console.log(a,b);   //3 -1


                  //////////////////////////////////////////////////////////////////////////
              //    apply实现数组追加
              //    var arr1 = [1,2,3,4];
              //    var arr2 = [5,6,7,8];
              //
              //    Array.prototype.push.apply(arr1,arr2);
              //    console.log(arr1);  //[1,2,3,4,5,6,7,8]

                  //////////////////////////////////////////////////////////////////////////
                //  *将类数组对象转化成真正的数组怎么做？
                //  var domNodes = Array.prototype.slice.call(document.getElementsByTagName("li"));
                //  console.log(domNodes.length);   //13
                //  console.log(domNodes);   //


                  //////////////////////////////////////////////////////////////////////////
                //  如何判断一个对象是否为数组
                 var arr = {name:'2',age:'3'};
                 var arr3 = [1,2,3]
              
                //  function isArray(obj){
                //      return Object.prototype.toString.call(obj) === '[object Array]';
                //  }
              
                //  console.log(isArray(arr));
                //  console.log(isArray(arr3));

                  //////////////////////////////////////////////////////////////////////////

              //    获取数组中的最大值和最小值
                 var  numbers = [5, 458 , 120 , -215 ];
                 var maxInNumbers = Math.max.apply(Math, numbers)   //458
              //        maxInNumbers = Math.max.call(Math,5, 458 , 120 , -215); //458
                 var minInNumbers = Math.min.apply(Math, numbers)
              
                //  console.log(maxInNumbers)
                //  console.log(minInNumbers)


                  //////////////////////////////////////////////////////////////////////////
              //    如何判断一个对象是否为函数
                  // function selfFunc() {}
                  // Object.prototype.toString.call(selfFunc) === '[object Function]'

                  //////////////////////////////////////////////////////////////////////////
              //    var a = ['1','2','3','4'...];
              //   a的长度是100,内容填充随机整数的字符串,请先构造此数组,再去重
                  var a = []
                  for(var i = 0; i < 100; i++) {
                    a.push(Math.floor(Math.random()*10))
                  }
                  // console.log(...new Set(a))
                  

                  //////////////////////////////////////////////////////////////////////////
              //    以下代码的作用是?空白处填写什么?
                  //定义
                  (function(window){
                      function fn(str) {
                          this.str = str;
                      }
                      fn.prototype.format = function () {
                          var arg = NaN;
                          return this.str.replace(NaN,function (a,b) {
                              return arg[b] || '';
                          })
                      }

                      window.fn = fn;
                  })(window)


                  //使用
                  // (function(){
                  //     var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
                  //     console.log(t.format('http://www.cnki.net','cnki','welcome'));
                  // })()
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>  