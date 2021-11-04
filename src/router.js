import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Page from './views/page'
import RegisterPage from './views/register-page'
import Home from './views/home'
import LoginPage from './views/login-page'
import VideoCourse from './views/video-course'
import Page1 from './views/page1'
import VideoCourseDark from './views/video-course-dark'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Page',
      path: '/page',
      component: Page,
    },
    {
      name: 'register-page',
      path: '/register-page',
      component: RegisterPage,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'login-page',
      path: '/login-page',
      component: LoginPage,
    },
    {
      name: 'video-course',
      path: '/video-course',
      component: VideoCourse,
    },
    {
      name: 'Page1',
      path: '/page1',
      component: Page1,
    },
    {
      name: 'video-course-dark',
      path: '/video-course-dark',
      component: VideoCourseDark,
    },
  ],
})
