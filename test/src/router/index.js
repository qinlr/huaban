import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Find from '../components/pages/Find/Find'
import Home from '../components/pages/Find/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Find'
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    }
  ]
})
