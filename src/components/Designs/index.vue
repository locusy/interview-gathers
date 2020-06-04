<template>
    <div>
        <p>
            <router-link :to="{ path: '/designs/single' }">单例模式</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/designs/strategy' }">策略模式</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/designs/proxy' }">代理模式</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/designs/iterator' }">迭代器模式</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/designs/pubSub' }">发布订阅模式</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/designs/decorator' }">装饰者模式</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>