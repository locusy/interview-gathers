<template>
    <div>
        <p>1、将json转成字符串拼接形式</p>
        <p>2、实现将str = 'a___b___d_ge'变成'a_b_d_ge'</p>
        <p>3、二分法有什么限制条件（饿了么）</p>
        <p>4、你了解贪心算法、动态规划、分治算法、回溯算法等常见的算法吗？</p>
        <p>5、二分查找的时间复杂度怎么求。</p>
        <p>6、线性顺序存储，和链式存储结构上有什么区别以及优缺点。</p>
        <p>7、写一下斐波那契数列吧。</p>
    </div>
</template>

<script>
    // 1、将json转成字符串拼接形式
        var json = {
            "name": "tianzhi",
            "password": "123",
            "code": "456"
        }
        var str = ''
        for (var attr in json) {
            str += attr + '=' + json[attr] + '&'
        }
        // var str = str.slice(0, str.lastIndexOf('&')-1)
        var str = str.substring(0, str.lastIndexOf('&') - 1)
        console.log(str)


    // 2、实现将str = 'a___b___d_ge'变成'a_b_d_ge'
        // var str = 'a___b___d_ge';
        // var arr = str.split('_')

        // function removeBlank(arr) {
        //     for (var i=0; i<arr.length; i++) {
        //         if (!arr[i]) {
        //             arr.splice(i, 1)
        //             removeBlank(arr)
        //         }
        //     }
        //     return arr
        // }
        // var arr1 = removeBlank(arr)
        // var str1 = arr.join('_')
        // console.log(str1)

    // 驼峰下划线转换
    function toLine(name) {
        return name.replace(/([A-Z])/g, "_$1").toLowerCase();
    }

    // 下划线转换驼峰
    function toHump(name) {
        return name.replace(/\_(\w)/g, function (all, letter) {
            console.log(all, letter);
            return letter.toUpperCase();
        });
    }

    // 3、二分法有什么限制条件（饿了么）

    // 4、你了解贪心算法、动态规划、分治算法、回溯算法等常见的算法吗？

    // 5、二分查找的时间复杂度怎么求。

    // 6、线性顺序存储，和链式存储结构上有什么区别以及优缺点。

    // 7、写一下斐波那契数列吧


    export default {
    }
</script>

<style lang="less" scoped>

</style>