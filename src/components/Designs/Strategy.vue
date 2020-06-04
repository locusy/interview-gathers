
<template>
    <div>   
        <p>一、最初的策略模式：</p>
        <p>二、JavaScript版本的策略模式：</p>
        <p>三、使用策略模式重构表单：</p>
        <p>四、给某个文本输入框添加多种校验规则</p>
        <form action="http:// xxx.com/register" id="registerForm" method="post"> 
            请输入用户名:<input type="text" name="userName"/> 
            请输入密码:<input type="text" name="password"/> 
            请输入手机号码:<input type="text" name="phoneNumber"/> 
            <button>提交</button>
        </form>

    <!-- 
        简易版form
         <html> 
            <body>
                <form action="http:// xxx.com/register" id="registerForm" method="post"> 
                请输入用户名:<input type="text" name="userName"/ > 
                请输入密码:<input type="text" name="password"/ >
                请输入手机号码:<input type="text" name="phoneNumber"/ >
                <button>提交</button> 
                </form>
                <script type="text/javascript">
                    var registerForm = document.getElementById('registerForm');
                    registerForm.onsubmit = function(){
                        if ( registerForm.userName.value === '' ){
                            alert ( '用户名不能为空' );
                            return false; 
                        }
                        if ( registerForm.password.value.length < 6 ){ alert ( '密码长度不能少于 6 位' );
                            return false;
                        }
                        if ( !/(^1[3|5|8][0-9]{9}$)/.test( registerForm.phoneNumber.value ) ){
                            alert ( '手机号码格式不正确' ); 
                            return false;
                        } 
                    }
                </script> 
            </body>
        </html>  
    -->


    </div>
</template>

<script>
    export default {
        name: 'strategy',
        mounted() {
            // 策略模式的定义是:定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
            // 将不变的部分和变化的部分隔开是每个设计模式的主题，策略模式也不例外，策略模式的目的就是将算法的使用与算法的实现分离开来。

            // 一、最初的策略模式：
            var calculateBonus = function( performanceLevel, salary ){
                if ( performanceLevel === 'S' ){ 
                    return salary * 4;
                }
                if ( performanceLevel === 'A' ){ 
                    return salary * 3;
                }
                if ( performanceLevel === 'B' ){ 
                    return salary * 2;
                } 
            };
            calculateBonus( 'B', 20000 ); // 输出:40000 calculateBonus( 'S', 6000 ); // 输出:24000

            // 或者使用组合函数封装改善下代码
            var performanceS = function( salary ){ 
                return salary * 4;
            };
            var performanceA = function( salary ){ 
                return salary * 3;
            };
            var performanceB = function( salary ){ 
                return salary * 2;
            };
            var calculateBonus = function( performanceLevel, salary ){
                if ( performanceLevel === 'S' ){ 
                    return performanceS( salary );
                }
                if ( performanceLevel === 'A' ){ 
                    return performanceA( salary );
                }
                if ( performanceLevel === 'B' ){ 
                    return performanceB( salary );
                }
            }
            calculateBonus( 'A' , 10000 ); // 输出:30000
            // 但是，这种改善非常有限，calculateBonus 函数有可能越来越庞大，而且在系统变化的时候缺乏弹性。


            // 二、JavaScript版本的策略模式：
            // 在 JavaScript 语言中，函数也是对象，所以更简单和直接的做法是把 strategy 直接定义为函数
            var strategies = {
                "S": function( salary ){
                    return salary * 4; },
                "A": function( salary ){ 
                    return salary * 3;
                },
                "B": function( salary ){
                    return salary * 2;
                }
            };
            var calculateBonus = function( level, salary ){ 
                return strategies[ level ]( salary );
            };
            console.log( calculateBonus( 'S', 20000 ) );  // 输出:80000 
            console.log( calculateBonus( 'A', 10000 ) );  // 输出:30000

            

            // 三、使用策略模式重构表单：
                // 1、初始的表单验证的写法：
                //    见template里面 简易版form

                // 以上这种写法有一些缺点：
                // （1）registerForm.onsubmit 函数比较庞大，包含了很多 if-else 语句，这些语句需要覆盖所有的校验规则。
                // （2）registerForm.onsubmit 函数缺乏弹性，如果增加了一种新的校验规则，或者想把密码的长 度校验从 6 改成 8，我们都必须深入 registerForm.onsubmit 函数的内部实现，这是违反开放—封闭原则的。
                // （3）算法的复用性差，如果在程序中增加了另外一个表单，这个表单也需要进行一些类似的校验，那我们很可能将这些校验逻辑复制得漫天遍野。

                // 2、使用策略模式重构之后的代码：
                // （1）第一步我们要把这些校验逻辑都封装成策略对象
                var strategies = {
                    isNonEmpty: function( value, errorMsg ) {
                        if ( value === '' ){ 
                            return errorMsg; // 不为空
                        } 
                    },
                    minLength: function( value, length, errorMsg ) { 
                        if ( value.length < length ){
                            return errorMsg;  // 限制最小长度
                        }
                    },
                    isMobile: function( value, errorMsg ) { 
                        if ( !/(^1[3|5|8][0-9]{9}$)/.test( value ) ){ 
                            return errorMsg;  // 手机号码格式
                        } 
                    }   
                };

                // （2）实现Validator类。Validator类在这里作为Context，负责接收用户的请求并委托给strategy对象。
                var Validator = function(){
                    this.cache = [];   // 保存校验规则
                };

                Validator.prototype.add = function(dom, rule, errorMsg ) { 
                    var ary = rule.split( ':' ); // 把strategy和参数分开
                    this.cache.push(function() {  // 把校验的步骤用空函数包装起来，并且放入 cache
                        var strategy = ary.shift();  // 用户挑选的 strategy
                        ary.unshift( dom.value );   // 把 input 的 value 添加进参数列表
                        ary.push( errorMsg );   // 把 errorMsg 添加进参数列表
                        return strategies[strategy].apply( dom, ary );
                    }); 
                };
                Validator.prototype.start = function(){
                    for ( var i = 0, validatorFunc; validatorFunc = this.cache[ i++ ]; ){
                        var msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
                        if ( msg ){ 
                            return msg;  // 如果有确切的返回值，说明校验没有通过
                        }
                    } 
                };

                // （3）用户使用代码：
                var validataFunc = function() {
                    // 创建一个validator对象
                    var validator = new Validator();
                    // 添加一些校验规则
                    validator.add( registerForm.userName, 'isNonEmpty', '用户名不能为空' ); 
                    validator.add( registerForm.password, 'minLength:6', '密码长度不能少于 6 位' ); 
                    validator.add( registerForm.phoneNumber, 'isMobile', '手机号码格式不正确' );
                    // 获得校验结果
                    var errorMsg = validator.start();
                    return errorMsg; // 返回校验结果 
                }
                var registerForm = document.getElementById( 'registerForm' ); 
                registerForm.onsubmit = function() {
                    var errorMsg = validataFunc();  // 如果errorMsg有确切的返回值，说明未通过校验
                    if ( errorMsg ) {
                        alert (errorMsg);
                        return false; // 阻止表单提交 
                    }
                }

                // 使用策略模式重构代码之后，我们仅仅通过“配置”的方式就可以完成一个表单的校验， 这些校验规则也可以复用在程序的任何地方，还能作为插件的形式，方便地被移植到其他项目中。

                // 在修改某个校验规则的时候，只需要编写或者改写少量的代码。比如我们想将用户名输入框 的校验规则改成用户名不能少于4个字符。可以看到，这时候的修改是毫不费力的。代码如下:
                validator.add( registerForm.userName, 'isNonEmpty', '用户名不能为空' ); // 改成:
                validator.add( registerForm.userName, 'minLength:10', '用户名长度不能小于 10 位' );


                // 四、给某个文本输入框添加多种校验规则
                        
                    // 策略对象
                    var strategies = {
                        isNonEmpty: function( value, errorMsg ){
                            if ( value === '' ){ 
                                return errorMsg;
                            } 
                        },
                        minLength: function( value, length, errorMsg ){ 
                            if ( value.length < length ){
                                return errorMsg; 
                            }
                        },
                        isMobile: function( value, errorMsg ){
                            if ( !/(^1[3|5|8][0-9]{9}$)/.test( value ) ){ 
                                return errorMsg;
                            } 
                        }
                    };

                    // Validator类
                    var Validator = function(){ 
                        this.cache = [];
                    };
                    Validator.prototype.add = function( dom, rules ){
                        var self = this;
                        for ( var i = 0, rule; rule = rules[ i++ ]; ){ 
                            (function(rule){
                                var strategyAry = rule.strategy.split( ':' ); 
                                var errorMsg = rule.errorMsg;
                                self.cache.push(function(){
                                    var strategy = strategyAry.shift();
                                    strategyAry.push( errorMsg );
                                    return strategies[ strategy ].apply( dom, strategyAry );
                                }); 
                            })(rule)
                        } 
                    };
                    Validator.prototype.start = function(){
                        for ( var i = 0, validatorFunc; validatorFunc = this.cache[ i++ ]; ){
                            var errorMsg = validatorFunc(); 
                            if ( errorMsg ){
                                return errorMsg; 
                            }
                        } 
                    };

                    // 客户调用代码
                    var registerForm = document.getElementById( 'registerForm' );
                    var validataFunc = function() {
                        var validator = new Validator();
                        validator.add( registerForm.userName, [{ strategy: 'isNonEmpty', errorMsg: '用户名不能为空'}, 
                        {strategy: 'minLength:6', errorMsg: '用户名长度不能小于 10 位'}]);

                        validator.add( registerForm.password, [{strategy: 'minLength:6',errorMsg: '密码长度不能小于 6 位'}]);

                        validator.add( registerForm.phoneNumber, [{ strategy: 'isMobile',errorMsg: '手机号码格式不正确'}]);

                        var errorMsg = validator.start();
                        return errorMsg; 
                    }
                    registerForm.onsubmit = function() { 
                        var errorMsg = validataFunc();
                        if ( errorMsg ){
                            alert (errorMsg);
                            return false; 
                        }
                    }

                    // 最后，如果去掉 strategies，我们还能认出这是一个策略模式的实现吗? 代码如下: 
                    var S = function( salary ){ 
                        return salary * 4;
                    };
                    var A = function( salary ){ 
                        return salary * 3;
                    };
                    var B = function( salary ){ 
                        return salary * 2;
                    };
                    var calculateBonus = function( func, salary ){ 
                        return func( salary );
                    };
                    calculateBonus( S, 10000 ); // 输出:40000


                    
        
        }
    }
</script>

<style lang="scss" scoped>

</style>