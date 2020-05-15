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
      }
    ]
  }
]

const router =  new VueRouter({
  routes
})

export default router

