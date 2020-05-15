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
            <router-link :to="{ path: '/algorithm/gather' }">收集</router-link>
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
        }
    }
</script>

<style lang="less" scoped>

</style>