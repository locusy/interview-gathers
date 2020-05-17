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
import Security from './components/Security'
import HandWrite from './components/HandWrite'
import HandwriteGather from './components/HandWrite/Gather'
import HandwriteAjax from './components/HandWrite/Ajax'
import HandwriteEventEmitter from './components/HandWrite/EventEmitter'
import HandwritePromise from './components/HandWrite/Promise'
import HandwriteHash from './components/HandWrite/RouteHash'
import HandwriteHistory from './components/HandWrite/RouteHistory'

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
        path: '/algorithm/gather',
        component: Gather,
        name: 'Gather'
      },
      // 安全
      {
        path: '/security',
        component: Security,
        name: 'Security'
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
    ]
  }
]

const router =  new VueRouter({
  routes
})

export default router

