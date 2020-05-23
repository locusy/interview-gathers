<template>
    <div>
        <p>数组去重</p>
        <p>1、双重for循环</p>
        <p>2、使用indexOf</p>
        <p>3、使用includes</p>
        <p>4、使用filter</p>
        <p>5、使用对象的特点</p>
        <p>6、使用set</p>
    </div>
</template>

<script>
    // https://juejin.im/post/5c7e0328f265da2dc538da03

    // 1、双重for循环
    var arr1 = [1,2,3,3,3,4,4,5];
    function noRepeat(arr1) {
        for(var i=0;i<arr1.length;i++){
            for(var j=i+1;j<arr1.length;j++){
                if(arr1[i] == arr1[j]){
                    arr1.splice(j,1);
                    j--;
                }
            }
        }
        return arr1
    }
    console.log(noRepeat(arr1))

    // 2、使用indexOf
    // var arr = [1,2,3,3,3,4,4,5];
    // function unique(arr) {
    //     let res = []
    //     for (let i = 0; i < arr.length; i++) {
    //         if (res.indexOf(arr[i]) === -1) {
    //             res.push(arr[i])
    //         }
    //     }
    //     return res
    // }
    // console.log(unique(arr))

    // 3、使用includes()
    // var arr = [1,2,3,3,3,4,4,5]
    // function unique1(arr) {
    //     let res = []
    //     for (let i = 0; i < arr.length; i++) {
    //         if (!res.includes(arr[i])) {
    //             res.push(arr[i])
    //         }
    //     }
    //     return res
    // }
    // console.log(unique1(arr))

    // 4、使用filter
    // var arr = [1,2,3,3,3,4,4,5]
    // function unique2(arr) {
    //     return arr.filter((item,index, arr) => {
    //         return arr.indexOf(item) === index
    //     })
    // }
    // console.log(unique2(arr))
    
    // 5、使用对象的特点：
    // var arr = [1,2,3,3,3,4,4,5]
    // function unique3(arr) {
    //     let obj = {}
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] in obj) {
    //             obj[arr[i]] ++
    //         } else {
    //             obj[arr[i]] = 10
    //         }
    //     }
    //     return Object.keys(obj) // 以数组的形式返回键
    // }
    // console.log(unique3(arr))

    // 6、使用set：
    // var arr = [1,2,3,3,3,4,4,5]
    // function unique4(arr) {
    //     return [...new Set(arr)]
    // }
    // console.log(unique4(arr))

    export default {
        mounted() {}
    }
</script>

<style lang="less" scoped>

</style>