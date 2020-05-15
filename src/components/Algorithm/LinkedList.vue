<template>
  <div>
    链表：
    <p>
      <a target="_blank" href="https://juejin.im/post/59479041a0bb9f006bdad7c3">
      https://juejin.im/post/59479041a0bb9f006bdad7c3</a>
    </p>
    <p>
      <a target="_blank" href="https://juejin.im/entry/59841a085188253d280e3c15">
      https://juejin.im/entry/59841a085188253d280e3c15</a>
    </p>
    <p>
      <a target="_blank" href="https://juejin.im/entry/58759e79128fe1006b48cdfd">
      https://juejin.im/entry/58759e79128fe1006b48cdfd</a>
    </p>

    <br />
    
    波兰式和逆波兰式：
    <p>
      <a target="_blank" href="http://www.cnblogs.com/chenying99/p/3675876.html">
      http://www.cnblogs.com/chenying99/p/3675876.html</a>
    </p>
    <p>
      <a target="_blank" href="https://github.com/Tairraos/rpn.js/blob/master/rpn.js">
      https://github.com/Tairraos/rpn.js/blob/master/rpn.js</a>
    </p>
  </div>
</template>
<script>
import eventBus from './../../eventBus'

export default {
  name: 'linkedlist',
  mounted () {
    eventBus.$emit('tofather', 'jason')
  }
}
</script>
