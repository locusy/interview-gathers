<template>
    <div>
        <p>
            <router-link :to="{ path: '/algorithm/gather' }">
                1、将json转成字符串拼接形式
            </router-link>
        </p>
        <p>
            <router-link :to="{ path: '/algorithm/gather' }">
                2、实现将str = 'a___b___d_ge'变成'a_b_d_ge'
            </router-link>
        </p>
        <p>
            <router-link :to="{ path: '/algorithm/gather' }">
                3、二分法有什么限制条件（饿了么）
            </router-link>
        </p>
        <p>
            <router-link :to="{ path: '/algorithm/gather' }">
                4、你了解贪心算法、动态规划、分治算法、回溯算法等常见的算法吗？
            </router-link>
        </p>
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
        var str = str.substring(0, str.lastIndexOf('&')-1)
        console.log(str);


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


    // 3、二分法有什么限制条件（饿了么）
        

    // 4、你了解贪心算法、动态规划、分治算法、回溯算法等常见的算法吗？
    
    export default {
    }
</script>

<style lang="less" scoped>

</style>