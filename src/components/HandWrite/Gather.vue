<template>
    <div>
        <p>
            <router-link :to="{ path: '/handwrite/gather' }">1、图片预览</router-link>
        </p>
        <input type="file" name="file" v-on:change="showPreview($event)" />
        <img id="portrait" src="http://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&f=JPEG?w=900&h=1350" width="70" height="75">

        <br><br>
        ********************************************************************************

        <p>
            <router-link :to="{ path: '/handwrite/gather' }">2、输出答案</router-link>
        </p>
    </div>
</template>

<script>
// https://juejin.im/post/5c9edb066fb9a05e267026dc
    
// 2、手写bind, call, apply
  //   Function.prototype.bind = function(context, ...bindArgs) {
  //     // func 为调用 bind 的原函数
  //     const func = this;
  //     context = context || window;
      
  //     if (typeof func !== 'function') {
  //       throw new TypeError('Bind must be called on a function');
  //     }
  //     // bind 返回一个绑定 this 的函数
  //     return function(...callArgs) {
  //       let args = bindArgs.concat(callArgs);
  //       if (this instanceof func) {
  //         // 意味着是通过 new 调用的 而 new 的优先级高于 bind
  //         return new func(...args);
  //       }
  //       return func.call(context, ...args);
  //     }
  //   }

  // // 通过隐式绑定实现
  //   Function.prototype.call = function(context, ...args) {
  //     context = context || window;
  //     context.func = this;

  //     if (typeof context.func !== 'function') {
  //       throw new TypeError('call must be called on a function');
  //     }

  //     let res = context.func(...args);
  //     delete context.func;
  //     return res;
  //   }

  //   Function.prototype.apply = function(context, args) {
  //     context = context || window;
  //     context.func = this;

  //     if (typeof context.func !== 'function') {
  //       throw new TypeError('apply must be called on a function');
  //     }

  //     let res = context.func(...args);
  //     delete context.func;
  //     return res;
  //   }

// 3、手动实现一个 new 关键字的功能的函数 _new(fun, args) --> new fun(args)
    // function _new(fun, ...args) {
    //     if (typeof fun !== 'function') {
    //         return new Error('参数必须是一个函数');
    //     }
    //     let obj = Object.create(fun.prototype);
    //     let res = fun.call(obj, ...args);
    //     if (res !== null && (typeof res === 'object' || typeof res === 'function')) {
    //         return res;
    //     }
    //     return obj;
    // }


// 4、实现一个 instanceof 
    // a instanceof b
    // function _instanceof(a, b) {
    //     while (a) {
    //         if (a.__proto__ === b.prototype) return true;
    //         a = a.__proto__;
    //     }
    //     return false;
    // }


// 5、手写jsonp
    // foo 函数将会被调用 传入后台返回的数据
      // function foo(data) {
      //     console.log('通过jsonp获取后台数据:', data);
      //     document.getElementById('data').innerHTML = data;
      // }
      // /**
      // * 通过手动创建一个 script 标签发送一个 get 请求
      // * 并利用浏览器对 <script> 不进行跨域限制的特性绕过跨域问题
      // */
      // (function jsonp() {
      //     let head = document.getElementsByTagName('head')[0]; // 获取head元素 把js放里面
      //     let js = document.createElement('script');
      //     js.src = 'http://domain:port/testJSONP?a=1&b=2&callback=foo'; // 设置请求地址
      //     head.appendChild(js); // 这一步会发送请求
      // })();

      // // 后台代码
      // // 因为是通过 script 标签调用的 后台返回的相当于一个 js 文件
      // // 根据前端传入的 callback 的函数名直接调用该函数
      // // 返回的是 'foo(3)'
      // function testJSONP(callback, a, b) {
      //   return `${callback}(${a + b})`;
      // }

// 7、reduce的实现
    // function reduce(arr, callback, initial) {
    //     let i = 0;
    //     let acc = initial === undefined ? arr[i++] : initial;
    //     for (; i < arr.length; i++) {
    //         acc = callback(acc, arr[i], i, arr);
    //     }
    //     return acc;
    // }

// 8、实现 generator 的自动执行器
    // 要求是 yield 后面只能是 Promise 或 Thunk 函数
    // https://juejin.im/post/5c9edb066fb9a05e267026dc#heading-12
    // function run(gen) {
    //   let g = gen();

    //   function next(data) {
    //     let result = g.next(data);
    //     if (result.done) return result.value;
    //     if (result.value instanceof Promise) {
    //       result.value.then(data => next(data));
    //     } else {
    //       result.value(next);
    //     }
    //   }

    //   return next();
    // }

    // // ======== e.g. ==========

    // function func(data, cb) {
    //   console.log(data);
    //   cb();
    // }

    // function *gen() {
    //   let a = yield Promise.resolve(1);
    //   console.log(a);
    //   let b = yield Promise.resolve(2);
    //   console.log(b);
    //   yield func.bind(null, a + b);
    // }
    // run(gen);
    /** 
    output:
    1
    2
    3
    **/


// 9、节流
    /**
    * 节流函数 限制函数在指定时间段只能被调用一次
    * 用法 比如防止用户连续执行一个耗时操作 对操作按钮点击函数进行节流处理
    */
    // function throttle(func, wait) {
    //   let timer = null;
    //   return function(...args) {
    //     if (!timer) {
    //       func(...args);
    //       timer = setTimeout(() => {
    //         timer = null;
    //       }, wait);
    //     }
    //   }
    // }

// 10、防抖
    /**
    * 函数调用后不会被立即执行 之后连续 wait 时间段没有调用才会执行
    * 用法 如处理用户输入
    */
    // function debounce(func, wait) {
    //   let timer = null;
      
    //   return function(...args) {
    //     if (timer) clearTimeout(timer); // 如果在定时器未执行期间又被调用 该定时器将被清除 并重新等待 wait 秒
    //     timer = setTimeout(() => {
    //       func(...args);
    //     }, wait);
    //   }
    // }

    /******************笔试题******************/
    //1
    //   var myvar = 'my value';
    //   (function(){
    //       console.log(myvar);  //undefined
    //       var myvar = 'local value'; 
    //   })()
  
    //   //2
    //   function Person(name){
    //       this.name = name;
    //   }
    //   Person.prototype.age = 20;
    //   Person.prototype.award = [];
      
    //   var jack = new Person('jack');
    //   var rose = new Person('rose');

    //   jack.age++;
    //   rose.award.push('oscar');
    //   console.log(rose.age); //20
    //   console.log(jack.award);//['oscar']
  
      //3.请编写formatNum 函数，将数字格式化为金额格式，每三位数加入逗号：
    //   var money = 34782632;
    //   //添加方法 money.formatNum(),输出“34,782,632”
    //   Number.prototype.formatNum = function(){
    //       if(Object.prototype.toString.call(this)!=='[object Number]'){
    //           throw new Error('type error');
    //       }
    //       var NumArr = String(this).split('').reverse();
    //       var len = NumArr.length;
    //       var arr = [];
    //       for(var i=0;i<Math.floor(len/3);i++){
    //           arr.push(NumArr.splice(0,3).reverse().join(''));
    //       }
    //       arr.push(NumArr.reverse().join(''));
    //       return arr.reverse().join(',');
    //   }
    //   console.log(money.formatNum());
   
      //4.扩展console.log 方法，使其输入带赢自增序号
    //   function extendLog(){
    //       var index = 1;
    //       var log = console.log;
    //       return function(){
    //           arguments[0] = index + ':' + arguments[0];
    //           log.apply(this,arguments);
    //           index ++;
    //       }
    //   }
    //   console.log = new extendLog();
    //   console.log('foo'); //1:foo
    //   console.log('bar'); //2:bar
  
      //5.实现一个函数 输出结果如下
      /**
      * f(1).value == 1;
      * f(1)(2).value == 5;
      * f(1)(2)(3).value == 14;
      * 
      * 请找出规律，支持对任意多个数进行计算
      */
    //   var f = function (a){
    //       arguments.callee.value = a*a;
    //       var callee = arguments.callee;
    //       var func = function(b){
    //           callee.value += b*b;
    //           arguments.callee.value = callee.value;
    //           return func;
    //       }
    //       func.value = callee.value;
    //       return func
    //   }
    //   console.log(f(1).value);
    //   console.log(f(1)(2).value);
    //   console.log(f(1)(2)(3).value);

    
    export default {
        mounted() {
            // this.output()
        },
        methods: {
             // 1、图片预览
            showPreview(source) {
                console.log(source.target.files, 'sourse---')
                var file = source.target.files[0];
                if(window.FileReader) {
                    var fr = new FileReader();
                    fr.onloadend = function(e) {
                        console.log('e.target.result,', e.target.result)
                        document.getElementById("portrait").src = e.target.result;
                    };
                    fr.readAsDataURL(file);
                }
            },

            // 2、输出答案
            output() {
                //  1.输出结果
                   console.log(typeof null);   //object
                   console.log(typeof undefined);   //undefined

                //   2.输出结果
                    var a;
                   console.log(a === undefined);   //true
                   console.log(undefined === undefined)    // true
                    var undefined;
                    undefined = 1;
                   console.log(a)                  //undefined
                   console.log(undefined)          //1
                   console.log(a === undefined);    //false

                //    3.输出结果
                    var name = 'duolaidian';
                    (function () {
                        test1();
                        function test1() {
                           console.log('name', name);    // undefined
                        };

                        // var name  = 'hualala';
                        // test2();                // 报错:test2 is not a function
                        // var test2 = function () {
                        //    console.log('name', name);     // 不会执行
                        // };
                        // console.log(typeof test2)    //function
                    })()

                //    4.输出结果
                    function Ninja() {
                        var value = 'Ninja'  //  "TypeError: Cannot set property 'value' of undefined"
                    }

                    var ninjaA = Ninja(),
                        ninjaB = new Ninja();
                   console.log('typeof ninjaA:', typeof ninjaA);    //undefined
                   console.log('typeof ninjaB:',typeof ninjaB);     //object


                //    5.下面程序有什么问题,如何改进   将var改成let
                    var arr = [1,23,4,5]
                    function print(arr) {
                        var i,l=arr.length;
                        for(var i=0;i<l;i++){
                            setTimeout(function () {
                               console.info(arr[i]);   //undefined
                            },200)
                        }
                    }
                    print(arr);


                //    6.将arguments转化成数组
                    function args(a, b) {
                        console.log('arguments:', arguments)

                        // 转化成字符串
                        // const str =  Array.prototype.toString.call(arguments)   

                        // 转化成数组
                        // const arr = Array.prototype.slice.call(arguments)
                        // const arr = Array.from(arguments)

                        console.log('arr:', Object.prototype.toString.call(arr) === '[object Array]')
                        // 判断是否是对象：Object.prototype.toString.call(obj) === '[object Object]'
                        console.log('arr:', arr)
                    }
                    args(1,2)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>