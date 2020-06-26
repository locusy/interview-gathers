
<template>
    <div>
        <p>1、两数之和：给定一个数组，找出数组中相加为10的两个数</p>
        <p>2、两数之和：给定一个数组，找出数组中相加为10的两个数</p>
        <p>
            总结：
            <a href="https://blog.csdn.net/yy2017220302028/article/details/104394877" target="_blank">
                https://blog.csdn.net/yy2017220302028/article/details/104394877
            </a>
        </p>
        <p>
            <a href="https://blog.csdn.net/yy2017220302028/article/details/105562435" target="_blank">
                https://blog.csdn.net/yy2017220302028/article/details/105562435
            </a>
        </p>
    </div>
</template>

<script>

// 1、两数之和：给定一个数组，找出数组中相加为10的两个数
    var arr = [1,7,4,3,6,5,2,8]
    var target = 10

    /**
     * @param {number[]}  nums
     * @param {number} target
     * @return {number[]}
     */
    // 第一种：两层遍历 大概次数是n*n 
    // 时间复杂度为O(n^2) 如果数组的长度为10000则会崩溃
    // 空间复杂度O(1)
    var numAdd = function(nums, target) {
        for(var i=0; i<nums.length; i++) {
            for(var j=i; j<nums.length; j++) {
                if(arr[i] + arr[j] == target && i!=j) {
                    return [arr[i], arr[j]]
                }
            }
        }
    }
    // console.time('numAdd')
    // console.log('target', numAdd(arr, target))
    // console.timeEnd('numAdd')

    // 第二种：一层遍历 时间复杂度O(n) 空间复杂度O(n)
    var numBest = function(nums, target) {
        let obj = {}
        for(var i=0; i<nums.length; i++) {
            let num = nums[i]
            if(obj[num]) {
                return [obj[num], num]
            } else {
                obj[target - num] = num
            }
        }
    }
    // console.time('numBest')
    // console.log('target', numBest(arr, target))
    // console.timeEnd('numBest')


    export default {
        mounted() {
        }
    }
</script>

<style lang="less" scoped>

</style>