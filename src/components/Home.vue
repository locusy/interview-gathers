<template>
  <div class="wrap">
    <p>
      <router-link :to="{ path: '/algorithm' }">算法</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/security' }">安全</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/http' }">HTTP</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/performance' }">性能</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/regexp' }">正则</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/handwrite' }">手写</router-link>
    </p>
  </div>
</template>
<script>
import eventBus from './../eventBus'

export default {
  name: 'home',
  mounted() {
    eventBus.$on('tofather', function(data) {
      console.log('father, i am your son ' + data)
    })
  },
}
</script>
<style lang="less">
</style>
