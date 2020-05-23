
<template>
    <div>
        <p>1、给定一个数组，找出数组中相加为10的两个数</p>
    </div>
</template>

<script>
// 1、给定一个数组，找出数组中相加为10的两个数
    var arr = [1,7,4,3,6,5,2,8]
    var num = 10

    // 第一种：
    // 时间复杂度为O(n^2)  如果数组的长度为10000则会崩溃
    for(let i = 0; i<arr.length; i++ ) {
        for (let j = i; j<arr.length; j++) {
            if(arr[i] + arr[j] == num && i!=j) {
                // console.log('答案是：' + arr[i] + ' ' + arr[j])
            }
        }
    }

    // 第二种：
    // 空间换取时间 用对象存储我们需要的数据 遍历一次搞定
    let obj = {}
    for(let i=0; i<arr.length; i++) {
        if(arr[i] in obj) {
            // console.log('找到了', arr[i])
        } else {
            let need = num - arr[i]
            obj[need] = arr[i]
        }
    }

    export default {
        
    }
</script>

<style lang="less" scoped>

</style>