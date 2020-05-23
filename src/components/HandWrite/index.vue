<template>
    <div>
        <p>
            <router-link :to="{ path: '/handwrite/ajax' }">Ajax</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/handwrite/eventEmitter' }">EventEmitter</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/handwrite/promise' }">Promise</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/handwrite/hash' }">手写route-hash</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/handwrite/history' }">手写route-history</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/handwrite/gather' }">收集</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>

</style>