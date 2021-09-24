import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'add',
    component: () => import('../components/Create.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/List.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/Edit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
