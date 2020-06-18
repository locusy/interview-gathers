import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Algorithm from './components/Algorithm'
import QuickSort from './components/Algorithm/QuickSort.vue'
import LinkedList from './components/Algorithm/LinkedList.vue'
import NoRepeat from './components/Algorithm/NoRepeat.vue'
import Flat from './components/Algorithm/Flat.vue'
import Gather from './components/Algorithm/Gather.vue'
import LeetCode from './components/Algorithm/LeetCode.vue'
import Hash from './components/Algorithm/Hash.vue'
import Stack from './components/Algorithm/Stack.vue'
import Seter from './components/Algorithm/Set.vue'
import Security from './components/Security'
import HandWrite from './components/HandWrite'
import HandwriteGather from './components/HandWrite/Gather'
import HandwriteAjax from './components/HandWrite/Ajax'
import HandwriteEventEmitter from './components/HandWrite/EventEmitter'
import HandwritePromise from './components/HandWrite/Promise'
import HandwriteHash from './components/HandWrite/RouteHash'
import HandwriteHistory from './components/HandWrite/RouteHistory'
import Http from './components/Http'
import Css from './components/Css'
import Git from './components/Git'
import Html from './components/Html'
import Javascript from './components/Javascript'
import Node from './components/Node'
import React from './components/React'
import Regexp from './components/Regexp'
import Vuer from './components/Vue'
import Webpack from './components/Webpack'
import Array from './components/Array'
import Designs from './components/Designs'
import Decorator from './components/Designs/Decorator'
import Iterator from './components/Designs/Iterator'
import Proxy from './components/Designs/Proxy'
import PubSub from './components/Designs/PubSub'
import Single from './components/Designs/Single'
import Strategy from './components/Designs/Strategy'
import Basis from './components/Basis'

// const App = () => import('./App')
// const Home = () => import('./components/Home')
// const QuickSort = () => import('./components/Algorithm/QuickSort.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    name: 'App',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        name: 'Home'
      },
      // 手写
      {
        path: '/handwrite',
        component: HandWrite,
        name: 'HandWrite'
      },
      {
        path: '/handwrite/gather',
        component: HandwriteGather,
        name: 'HandwriteGather'
      },
      {
        path: '/handwrite/ajax',
        component: HandwriteAjax,
        name: 'HandwriteAjax'
      },
      {
        path: '/handwrite/eventEmitter',
        component: HandwriteEventEmitter,
        name: 'HandwriteEventEmitter'
      },
      {
        path: '/handwrite/promise',
        component: HandwritePromise,
        name: 'HandwritePromise'
      },
      {
        path: '/handwrite/hash',
        component: HandwriteHash,
        name: 'HandwriteHash'
      },
      {
        path: '/handwrite/history',
        component: HandwriteHistory,
        name: 'HandwriteHistory'
      },
      // 算法
      {
        path: '/algorithm',
        component: Algorithm,
        name: 'Algorithm'
      },
      {
        path: '/algorithm/quicksort',
        component: QuickSort, 
        name: 'QuickSort'
      },
      {
        path: '/algorithm/linkedList',
        component: LinkedList,
        name: 'LinkedList'
      },
      {
        path: '/algorithm/norepeat',
        component: NoRepeat,
        name: 'NoRepeat'
      },
      {
        path: '/algorithm/flat',
        component: Flat,
        name: 'Flat'
      },
      {
        path: '/algorithm/leetcode',
        component: LeetCode,
        name: 'LeetCode'
      },
      {
        path: '/algorithm/gather',
        component: Gather,
        name: 'Gather'
      },
      {
        path: '/algorithm/hash',
        component: Hash,
        name: 'Hash'
      },
      {
        path: '/algorithm/stack',
        component: Stack,
        name: 'Stack'
      },
      {
        path: '/algorithm/set',
        component: Seter,
        name: 'Set'
      },
      // 安全
      {
        path: '/security',
        component: Security,
        name: 'Security'
      },
      // 通信
      {
        path: '/http',
        component: Http,
        name: 'Http'
      },
      // css
      {
        path: '/css',
        component: Css,
        name: 'Css'
      },
      // git
      {
        path: '/git',
        component: Git,
        name: 'Git'
      },
      // Html
      {
        path: '/html',
        component: Html,
        name: 'Html'
      },
      //Javascript
      {
        path: '/javascript',
        component: Javascript,
        name: 'Javascript'
      },
      // Node
      {
        path: '/node',
        component: Node,
        name: 'Node'
      },
      // React
      {
        path: '/react',
        component: React,
        name: 'React'
      },
      // Regexp
      {
        path: '/regexp',
        component: Regexp,
        name: 'Regexp'
      },
      // Vue
      {
        path: '/vue',
        component: Vuer,
        name: 'Vuer'
      },
      // Webpack
      {
        path: '/webpack',
        component: Webpack,
        name: 'Webpack'
      },
      // 数组
      {
        path: '/array',
        component: Array,
        name: 'Array'
      },
      // 设计模式
      {
        path: '/designs',
        component: Designs,
        name: 'Designs'
      },
      {
        path: '/designs/decorator',
        component: Decorator,
        name: 'Decorator'
      },
      {
        path: '/designs/iterator',
        component: Iterator,
        name: 'Iterator'
      },
      {
        path: '/designs/proxy',
        component: Proxy,
        name: 'Proxy'
      },
      {
        path: '/designs/pubSub',
        component: PubSub,
        name: 'PubSub'
      },
      {
        path: '/designs/single',
        component: Single,
        name: 'Single'
      },
      {
        path: '/designs/strategy',
        component: Strategy,
        name: 'Strategy'
      },
      // 基础
      {
        path: '/basis',
        component: Basis,
        name: 'Basis'
      }
    ]
  }
]

const router =  new VueRouter({
  routes
})

export default router

