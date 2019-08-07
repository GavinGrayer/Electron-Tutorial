import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import News from '@/components/News.vue'
import Home from '@/components/Home.vue'
import User from '@/components/User.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
