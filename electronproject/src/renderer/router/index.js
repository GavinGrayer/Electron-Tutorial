import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/home2',
      name: 'home2',
      component: require('@/components/Home2').default
    },
    {
      path: '/alarm',
      name: 'alarm',
      component: require('@/components/Alarm').default
    },
    {
      path: '/negativereport',
      name: 'negativereport',
      component: require('@/components/NegativeReport').default
    },
    {
      path: '/positivereport',
      name: 'positivereport',
      component: require('@/components/PositiveReport').default
    },
    {
      path: '/keywords',
      name: 'keywords',
      component: require('@/components/Keywords').default
    },
    {
      path: '/report',
      name: 'report',
      component: require('@/components/Report').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
