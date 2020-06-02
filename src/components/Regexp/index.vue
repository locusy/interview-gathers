<template>
    <div>
        正则：
        <p>
          <a href="https://www.cnblogs.com/angelatian/p/6807184.html" target="_blank">https://www.cnblogs.com/angelatian/p/6807184.html</a>
        </p>
    </div>
</template>

<script>
  // 1、验证手机号的正则
    // re = /^1[3-9][0-9]{9}$/
    // re.test('12099889898')

    // re = /^1[3-9]\d{9}$/
    // re.test('12099889898')

  // 2、验证邮箱的正则
    // re = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/
    // re.test('tian@sina.com')

  // 3、匹配数字
    // re = /^[1-9]\d*$/　 　 //匹配正整数
    // re = /^-[1-9]\d*$/ 　 //匹配负整数
    // re = /^-?[1-9]\d*$/　　 //匹配整数
    // re = /^[1-9]\d*|0$/　 //匹配非负整数（正整数 + 0）
    // re = /^-[1-9]\d*|0$/　　 //匹配非正整数（负整数 + 0）
    // re = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/　 //匹配正浮点数
    // re = /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/　 //匹配负浮点数
    // re = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/　 //匹配浮点数
    // re = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/　　 //匹配非负浮点数（正浮点数 + 0）
    // re = /^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/　　//匹配非正浮点数（负浮点数 + 0）

  // 4、匹配子项
  /*
    var str = '2013-6-7';
    var re = /(\d+)(-)/g;
    str = str.replace(re, function($0, $1, $2){

        //第一个参数: $0（整体）
        //第二个参数: $1（第一括号里的正则）
        //第三个参数: $2（第二个括号里的正则）
        
        console.log('$0:', $0 );    // 2013-   6-
        console.log('$1:', $1 );    // 2013    6
        console.log('$2:', $2 );    // -       -
        
        // return $0.substring(0, $0.length-1) + '.';
        return $1 + '.';
    });

    console.log(str);   //2013.6.7 
  */

  // 5、找出字符串中最多的字符和个数：
      var str = 'assssjdssskssalsssdkjsssdss';
      var arr = str.split('');
      str = arr.sort().join('');

      console.log('str:', str)

      var value = '';
      var index = 0;

      var re = /(\w)\1+/g;

      str.replace(re,function($0, $1, $2){
          console.log('$0:', $0);
          console.log('$1:', $1);
          console.log('$2:', $2);

          if(index<$0.length){
              index = $0.length;
              value = $1;
          }

      })

      console.log('最多的字符:'+value+',重复的次数:'+index);

    export default {
        
    }
</script>

<style lang="less" scoped>

</style>