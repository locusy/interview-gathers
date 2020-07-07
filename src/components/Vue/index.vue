<template>
    <div>

      <p>
        <section>面试题汇总：</section>
        <a 
          href="https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md" target="_blank">
          https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md
        </a>
      </p>
      <p>1、谈谈你对MVVM开发模式的理解</p>
      <p>2、Vue有哪些指令？</p>
      <p>3、v-if和v-show有什么区别？</p>
      <p>4、简述Vue的响应式原理</p>
      <p>5、一个在data(){}中的变量a，改变其数据后渲染到视图的步骤是什么？</p>
      <p>6、Vue中如何在组件内部实现一个双向数据绑定？</p>
      <p>7、Vue中如何监控某个属性值的变化？</p>
      <p>8、computed和watch都能监听数据的变化，那他们的区别是什么？（商汤科技）</p>
      <p>9、Vue中给data中的对象属性添加一个新的属性时会发生什么，如何解决？</p>
      <p>10、delete和Vue.delete删除数组的区别</p>
      <p>11、vue传值的方式</p>
      <p>12、slot插槽有几种</p>
      <p>13、this.$nextick({})函数的使用场景和原理</p>
      <p>14、路由hash和history的区别history缺点：</p>
      <p>15、路由钩子，页面的切换发生了什么</p>
      <p>16、路由的懒加载</p>
      <p>17、vue父子组件的生命周期调用顺序（亚朵生活）</p>
      <p>18、组件封装（高频考点）</p>
      <p>19、组件里面的data为什么是函数，而不是{}（作业帮）</p>
      <p>20、data props computed 执行顺序（作业帮）</p>
      <p>21、diff 算法（作业帮）</p>
      <p>22、虚拟dom和真实dom的区别？为什么用虚拟dom？（商汤科技）</p>
      <p>23、Object.defineProperty()和Proxy的区别</p>
      <p>24、Vue2.0和预计发布的Vue3.0的区别</p>
      <p>25、vue实现文本复制</p>
      <p>26、事件修饰符</p>

    </div>
</template>

<script>
/*

  面试题汇总：
  https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md

  1、谈谈你对MVVM开发模式的理解
    MVVM分为Model、View、ViewModel三者。
    Model：代表数据模型，数据和业务逻辑都在Model层中定义；
    View：代表UI视图，负责数据的展示；
    ViewModel：负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；
    Model和View并无直接关联，而是通过ViewModel来进行联系的，Model和ViewModel之间有着双向数据绑定的联系。
    因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。
    这种模式实现了Model和View的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作dom。
  
  2、Vue有哪些指令？
    v-text
    v-html
    v-show
    v-if
    v-eles-if
    v-for
    v-on
    v-bind
    v-modal
    v-slot
    v-pre
    v-once

  3、v-if和v-show有什么区别？
    v-show仅仅控制元素的显示方式，将display属性在block和none来回切换；
    而v-if会控制这个 DOM 节点的存在与否。当我们需要经常切换某个元素的显示/隐藏时，使用v-show会更加节省性能上的开销；
    当只需要一次显示或隐藏时，使用v-if更加合理。

  4、简述Vue的响应式原理
    当一个Vue实例创建时，vue会遍历data选项的属性，用Object.defineProperty将它们转为getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。
    每个组件实例都有相应的watcher程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。

  5、一个在data(){}中的变量a，改变其数据后渲染到视图的步骤是什么？
    http://www.cnblogs.com/canfoo/p/6891868.html

  6、Vue中如何在组件内部实现一个双向数据绑定？
    vue 通过数据属性的数据劫持和发布订阅的模式实现，大致可以理解成由3个模块组成，observer 完成对数据的劫持，
    compile 完成对模板片段的渲染，watcher 作为桥梁连接二者，订阅数据变化及更新视图

    具体实现：http://www.cnblogs.com/canfoo/p/6891868.html

    vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

    第一步：需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
    第二步：compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
    第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，
      主要做的事情是:
        1、在自身实例化时往属性订阅器(dep)里面添加自己
        2、自身必须有一个update()方法
        3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
    第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。

  7、Vue中如何监控某个属性值的变化？
      比如现在需要监控data中， obj.a 的变化。Vue中监控对象属性的变化你可以这样：
      watch: {
        obj: {
          handler (oldValue, newValue) {
            console.log( 'obj changed' )
          },
          deep: true
        }
      }
      deep属性表示深层遍历，但是这么写会监控obj的所有属性变化，并不是我们想要的效果，所以做点修改：
      watch: {
        'obj.a': {
          handler (oldValue, newValue) {
            console.log( 'obj changed' )
          }
        }
      }
      还有一种方法，可以通过computed来实现，只需要：
      computed: {
        a1() {
          return this.obj.a
        }
      }
      利用计算属性的特性来实现，当依赖改变时，便会重新计算一个新值。
  
  8、computed和watch都能监听数据的变化，那他们的区别是什么？（商汤科技）
      官网上有
      computed 有缓存机制触发才会改变值 https://cn.vuejs.org/v2/api/#computed

  9、Vue中给data中的对象属性添加一个新的属性时会发生什么，如何解决？
    会发生： 对象属性已经成功添加，但是视图并未刷新
    原因：在Vue实例创建时，对象属性并未声明，因此就没有被Vue转换为响应式的属性，
    自然就不会触发视图的更新，这时就需要使用Vue的全局api—— $set()，比如：
    this.$set(this.obj, b , 'obj.b')
    $set() 方法相当于手动的去把 obj.b 处理成一个响应式的属性，此时视图也会跟着改变了

  10、delete和Vue.delete删除数组的区别
    delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。
    Vue.delete 直接删除了数组 改变了数组的键值。

  11、vue传值的方式
    (1）vue实例传值
    (2) props父组件向子组件传值
   （3）子组件向父组件传值emit自定义事件
   （4）vuex

  12、slot插槽有几种
    https://www.cnblogs.com/chinabin1993/p/9115396.html
    https://cn.vuejs.org/v2/guide/components-slots.html
    默认插槽
    具名插槽
    作用域插槽：我可以把组件上的属性/值，在组件元素上使用！

  13、this.$nextick({})函数的使用场景和原理
      https://ustbhuangyi.github.io/vue-analysis/reactive/next-tick.html#vue-%E7%9A%84%E5%AE%9E%E7%8E%B0
      我们了解到数据的变化到 DOM 的重新渲染是一个异步过程，发生在下一个 tick。
      这就是我们平时在开发的过程中，比如从服务端接口去获取数据的时候，数据做了修改，如果我们的某些方法去依赖了数据修改后的 DOM 变化，我们就必须在 nextTick 后执行。比如下面的伪代码：
      getData(res).then(()=>{
        this.xxx = res.data
        this.$nextTick(() => {
          // 这里我们可以获取变化后的 DOM
        })
      })
  
  14、路由hash和history的区别history缺点：
      https://www.jianshu.com/p/3fcae6a4968f
      history刷新和h5会出现404

  15、路由钩子，页面的切换发生了什么
      https://www.jianshu.com/p/96cfc1b9ff21

      1)、全局的钩子: 
        beforeEach（to，from，next）
        afterEach（to，from，next）
      2)、组建内的导航钩子:
        beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave。
      
      需要注意是：
        1)、next需要被主动调用
        2)、beforeRouteEnter 不能获取组件实例 this，因为当守卫执行前，组件实例被没有被创建出来，
        剩下两个钩子则可以正常获取组件实例 this
        beforeRouteEnter (to, from, next) {
          next(vm => {
            // 通过 `vm` 访问组件实例
          })
        }

  16、路由的懒加载
      https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E6%8A%8A%E7%BB%84%E4%BB%B6%E6%8C%89%E7%BB%84%E5%88%86%E5%9D%97
  
  17、vue父子组件的生命周期调用顺序（亚朵生活）
      父组件 beforeCreate
      父组件 created
      子组件 beforeCreate
      子组件 created

  18、组件封装（高频考点）
      UI
      props
      场景
      功能
      callback（emit）

      效率高、复用性、可维护性

  19、组件里面的data为什么是函数，而不是{}（作业帮）
      https://cn.vuejs.org/v2/api/#data
      当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。

  20、data props computed 执行顺序（作业帮）
      props > data > computed

  21、diff 算法（作业帮）
      要知道渲染真实DOM的开销是很大的，比如有时候我们修改了某个数据，如果直接渲染到真实dom上会引起整个dom树的重绘和重排，有没有可能我们只更新我们修改的那一小块dom而不要更新整个dom呢？diff算法能够帮助我们。
      我们先根据真实DOM生成一颗virtual DOM，当virtual DOM某个节点的数据改变后会生成一个新的Vnode，然后Vnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为Vnode。
      diff的过程就是调用名为patch的函数，比较新旧节点，一边比较一边给真实的DOM打补丁。

      https://www.cnblogs.com/wind-lanyan/p/9061684.html

  22、虚拟dom和真实dom的区别？为什么用虚拟dom？（商汤科技）
      https://github.com/livoras/blog/issues/13
      https://juejin.im/post/5c8e5e4951882545c109ae9c#heading-5
      虚拟dom是只更新改变的部分
      真实dom更新的是全部

      Virtual DOM 算法主要是实现上面步骤的三个函数：element，diff，patch。然后就可以实际的进行使用：
      // 1. 构建虚拟DOM
      var tree = el('div', {'id': 'container'}, [
          el('h1', {style: 'color: blue'}, ['simple virtal dom']),
          el('p', ['Hello, virtual-dom']),
          el('ul', [el('li')])
      ])

      // 2. 通过虚拟DOM构建真正的DOM
      var root = tree.render()
      document.body.appendChild(root)

      // 3. 生成新的虚拟DOM
      var newTree = el('div', {'id': 'container'}, [
          el('h1', {style: 'color: red'}, ['simple virtal dom']),
          el('p', ['Hello, virtual-dom']),
          el('ul', [el('li'), el('li')])
      ])

      // 4. 比较两棵虚拟DOM树的不同
      var patches = diff(tree, newTree)

      // 5. 在真正的DOM元素上应用变更
      patch(root, patches)

  23、Object.defineProperty() 和 Proxy 的区别
      http://es6.ruanyifeng.com/#docs/proxy
      https://juejin.im/post/5be4f7cfe51d453339084530

      1、语法差异：
        Object.defineProperty(obj, prop, descriptor)：
          obj: 要在其上定义属性的对象。
          prop:  要定义或修改的属性的名称。
          descriptor: 将被定义或修改的属性的描述符。
        var proxy = new Proxy(target, handler);
      2、除了get和set之外，proxy可以拦截多达13种操作，比如has(target, propKey)，可以拦截propKey in proxy的操作，返回一个布尔值。
      3、当使用defineProperty，我们修改原来的obj对象就可以触发拦截，而使用proxy，就必须修改代理对象，即Proxy的实例才可以触发拦截。
      4、this指向不同：
        Object.defineProperty()指向的是对象
        Proxy指向Proxy的实例

  24、Vue2.0 和 预计发布的Vue3.0 的区别
      https://cloud.tencent.com/developer/article/1383565
      1、性能提升
      2、API 变动：一句话介绍：除渲染函数 API 和 scoped-slot 语法之外，其余均保持不变或者将通过另外构建一个兼容包来兼容 2.x。  
      3、代码重构：更优良的内部模块解耦；TypeScript；更易于贡献的代码库。
      4、重写虚拟 DOM 随着虚拟 DOM 重写，我们可以期待更多的 编译时（compile-time）提示来减少 运行时（runtime）开销。重写将包括更有效的代码来创建虚拟节点。
      5、优化插槽生成
      6、静态树提升 这意味着 Vue 3 的编译器将能够检测到什么是静态组件，然后将其提升，从而降低了渲染成本。它将能够跳过未整个树结构打补丁的过程。
      7、基于 Proxy 的观察者机制：Vue 的反应系统是使用 Object.defineProperty 的 getter 和 setter。 但是，Vue 3 将使用 ES2015 Proxy 作为其观察者机制。 这消除了以前存在的警告，使速度加倍，并节省了一半的内存开销。
      8、监测机制：3.0 将带来一个基于 Proxy 的 observer 实现，它可以提供覆盖语言 (JavaScript——译注) 全范围的响应式能力，消除了当前 Vue 2 系列中基于 Object.defineProperty 所存在的一些局限，如：
        对属性的添加、删除动作的监测
        对数组基于下标的修改、对于 .length 修改的监测
        对 Map、Set、WeakMap 和 WeakSet 的支持

  25、vue实现文本复制
      https://github.com/Inndy/vue-clipboard2

  26、事件修饰符
      .stop 阻止冒泡，调用 event.stopPropagation()
      .prevent 阻止默认行为，调用 event.preventDefault()
      .capture 添加事件侦听器时使用事件捕获模式
      .self 只当事件在该元素本身（比如不是子元素）触发时，才会触发事件
      .once 事件只触发一次



*/
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>