import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '@/views/Users.vue'
import UserGroups from '@/views/UserGroups.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/groups',
    name: 'UserGroups',
    component: UserGroups,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
