<template>
    <div>
        <p>
            <router-link :to="{ path: '/algorithm/quicksort' }">排序算法</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/algorithm/linkedList' }">链表</router-link>
        </p>
         <p>
            <router-link :to="{ path: '/algorithm/norepeat' }">数组去重</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/algorithm/flat' }">扁平化数组</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/algorithm/hash' }">Hash</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/algorithm/stack' }">Stack</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/algorithm/set' }">Set</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/algorithm/leetcode' }">LeetCode</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/algorithm/gather' }">收集</router-link>
        </p>
        <p>
            <a target="_blank" href="https://github.com/sisterAn/JavaScript-Algorithms#%E7%BC%96%E7%A8%8B%E9%A2%98">https://github.com/sisterAn/JavaScript-Algorithms#%E7%BC%96%E7%A8%8B%E9%A2%98</a>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {

            // 滴滴面试笔记
            // let obj = {name: function() {}}
            // JSON.parse(JSON.stringify(obj))
            // // Object.assign(...obj)
            // 递归
            // $.extend
            // lodash cloneDeep

            // let new = {}
            // function digui(obj) {
            //     for(var attr in obj) {
            //         if(Object.prototype.toString.call(obj[attr]) == '[object Object]') {
            //             digui()
            //         } else if (Object.prototype.toString.call(obj[attr]) == '[object Array]') {
            //             obj[attr] = obj[attr].map(element => {
            //                 if(Object.prototype.toString.call(element) == '[object Object]') {
            //                     return element
            //                 }
            //             });
            //         } else{
            //             new[attr] = obj[attr]
            //         }
            //     }
            // }


            
        }
    }
</script>

<style lang="less" scoped>

</style>