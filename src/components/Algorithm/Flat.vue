<template>
    <div>
        <p>数组扁平化：</p>
        <p>（1）老方法-递归</p>
        <p>（2）使用tostring</p>
        <p>（3）使用es6的reduce函数</p>
    </div>
</template>


<script>
    //（1）老方法-递归
    var result = []
    function unfold(arr){
        for(var i=0;i< arr.length;i++){
            if(typeof arr[i]=="object") {
                unfold(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }
    var arr = [1,3,4,5,[6,[0,1,5],9],[2,5,[1,5]],[5]];
    unfold(arr);
    // console.log(result)

    // 递归另一种写法
    // var result=[];
    // var arr=[1, [2, [ [3, 4], 5], 6],[2]];

    // function flat(arr,result){
    //     for(var i=0;i<arr.length;i++){
    //         if(typeof arr[i]==="number"){
    //             result.push(arr[i]);
    //         }
    //         else{
    //             flat(arr[i],result);
    //         }
    //     }
    // }
    // flat(arr,result);
    // console.log(result);

    //（2）使用tostring
    var c=[1,3,4,5,[6,[0,1,5],9],[2,5,[1,5]],[5]];
    var b = c.toString().split(',');
    // console.log(b);

    //（3）使用es6的reduce函数
    var arr=[1,3,4,5,[6,[0,1,5],9],[2,5,[1,5]],[5]];
    const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
    var result = flatten(arr)
    // console.log('flat arr:', result)


    // exercise
    // const myArr = [1,2,4,5,[8,6,[12,45],7],9];
    // const flatfn = myArr => myArr.reduce((a, b) => a.concat(Array.isArray(b) ? flatfn(b) : b), []) 

    // console.log('newArr', flatfn(myArr))

    import Vue from 'vue'

    export default {

    }
</script>

<style scoped>

</style>