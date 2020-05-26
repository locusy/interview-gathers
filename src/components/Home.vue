<template>
  <div class="wrap">
    <p>
      <router-link :to="{ path: '/handwrite' }">手写</router-link>
    </p>
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
      <router-link :to="{ path: '/css' }">CSS</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/git' }">GIT</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/html' }">HTML</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/javascript' }">Javascript</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/node' }">Node</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/react' }">React</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/vue' }">Vue</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/webpack' }">webpack</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/array' }">Array</router-link>
    </p>
  </div>
</template>
<script>
import eventBus from './../eventBus'

export default {
  name: 'home',
  mounted() {

    // var openElem = document.createElement('a')
    // openElem.href = `baidu.com`
    // openElem.target = "_blank"
    // // 兼容IE
    // if(document.all) {
    //     openElem.click()
    // }
    // // 兼容其它浏览器
    // else {
    //     var e = document.createEvent("MouseEvents")
    //     e.initEvent("click", true, true);
    //     openElem.dispatchEvent(e)
    // }

    eventBus.$on('tofather', function(data) {
      console.log('father, i am your son ' + data)
    })
  },
}
</script>
<style lang="less">
</style>
