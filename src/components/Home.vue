<template>
  <div class="wrap">
    <p>
      <router-link :to="{ path: '/algorithm' }">算法</router-link>
      <router-link :to="{ path: '/security' }">安全</router-link>
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
.wrap {
  text-align: left;
}
</style>
