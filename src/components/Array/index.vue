<template>
    <div>
        数组方法
    </div>
</template>

<script>
 var arr = [1,2,3,3,3,4,4,5];

    function arrFind(){
      // find方法找到 数组里面符合条件的第一项
      let result = arr.find(function(item, index, array){
        return item >= 5        //注意。不能写成item = 5 这样会改变数组的
      })
      return result
    };

    function arrFilter(){
      // filter方法返回的是符合条件的项 筛选后的数组
      let result = arr.filter(item => item>3)
      return result
    };

    function arrMap(){
      // map方法对数组的每一项进行处理后 返回数组
      let result = arr.map(item => item*item)
      return result
    };

    function arrMaptoString(){
      // map方法对数组的每一项返回为字符串
      let result = arr.map(String)
      return result
    };

    function arrSome(){
      // some方法返回的是布尔值 只要有一项符合就返回true
      let result = arr.some(item => item>4)  //true
      return result
    };

    function arrEvery(){
      // every返回布尔值 每一项符合才能返回true
      let result = arr.every(item => item>4)   //false
      return result
    };

    function arrReduce(){
      // 返回数组每项的和
      let result = arr.reduce((x,y) => x+y)  //25
      // let result = arr.reduce((x,y) => x+y,2)   //27
      return result
    };

    function arrReducemul(){
      // 返回数组每项的乘积
      let result = arr.reduce((x,y) => x*y)
      return result
    };

    function arrReduceInt(){
      // 返回数组拼成的整数
      let result = arr.reduce((x,y) => 10*x + y)
      return result      //12333445
    }

    // 取数组的最大值一：
    var arr = [1,2,3];
    var max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    });

    // 取数组的最大值二：数组长度很大时不合适
    Math.max(...arr)

    function arrReducetoInt(){
      var arr1 = ['1','2','4','5']
      // 将数组字符串转成整数
      let result = arr1.map(parseInt)   //[1, NaN, NaN, NaN]  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
      // let result = arr1.map((item) => parseInt(item))  //[1,2,4,5]
      // let result = arr1.map(Number)  //[1,2,4,5]
      return result   
    }

    function arrFindindex(){
      // 返回找到的元素的第一个index值
      let result = arr.findIndex((item) => item === 3)
      return result      //3
    }

    // shift:从集合中把第一个元素删除，并返回这个元素的值。
    // unshift: 在集合开头添加一个或更多元素，并返回新的长度
    // push:在集合中添加元素，并返回新的长度
    // pop:从集合中把最后一个元素删除，并返回这个元素的值。

    // console.log(arrFind())
    // console.log(arrFilter())
    // console.log(arrMap())
    // console.log(arrMaptoString())
    // console.log(arrSome())
    // console.log(arrEvery())
    // console.log(arrReduce())
    // console.log(arrReducemul())
    // console.log(arrReduceInt())
    // console.log(arrReducetoInt())
    // console.log(arr,arr.shift())
    // console.log(arr,arr.unshift(1))
    // console.log(arr,arr.push(1))
    // console.log(arr,arr.pop(1))
    console.log(arr,arrFindindex())

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>