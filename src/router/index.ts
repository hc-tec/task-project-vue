import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'task',
    component: () => import(/* webpackChunkName: "task" */ '../views/task-page.vue')
  },
  {
    path: '/taskAdder',
    name: 'taskAdder',
    component: () => import(/* webpackChunkName: "task-adder" */ '../components/task-adder.vue')
  },
  {
    path: '/taskDetails/:taskIndex',
    name: 'task-details',
    component: () => import(/* webpackChunkName: "taskDetails" */ '../components/task-details.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
