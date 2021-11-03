import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home'
import VideoCourse from './views/video-course'
import LoginPage from './views/login-page'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'video-course',
      path: '/video-course',
      component: VideoCourse,
    },
    {
      name: 'login-page',
      path: '/login-page',
      component: LoginPage,
    },
  ],
})
