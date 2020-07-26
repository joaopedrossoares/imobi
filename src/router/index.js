import Vue from 'vue'
import VueRouter from 'vue-router'

// MAIN
import Main from '../views/main/Main'
import Home from '../views/main/Home'
import MainImobile from '../views/main/Imobile'
import MainSearch from '../views/main/Search'

import MainIndicate from '../views/main/Indicate'
import MainContact from '../views/main/Contact'
import MainAnnounce from '../views/main/Announce'

import MainAbout from '../views/main/About'
import MainAboutRent from '../views/main/AboutRent'
import MainAboutAnnounce from '../views/main/AboutAnnounce'
import MainAboutIndicate from '../views/main/AboutIndicate'

// ADMIN
import Admin from '../views/admin/Admin'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          name: 'MainImobile',
          path: 'imovel/:id',
          component: MainImobile,
          props: true,
        },
        {
          name: 'MainSearch',
          path: 'busca',
          component: MainSearch,
          props: true
        },
        {
          name: 'MainAbout',
          path: 'sobre',
          component: MainAbout
        },
        {
          name: 'MainAnnounce',
          path: 'anunciar',
          component: MainAnnounce
        },
        {
          name: 'MainIndicate',
          path: 'indicar',
          component: MainIndicate
        },
        {
          name: 'MainContact',
          path: 'contato',
          component: MainContact
        },
        {
          name: 'MainAboutAnnounce',
          path: 'sobre/anunciar',
          component: MainAboutAnnounce
        },
        {
          name: 'MainAboutIndicate',
          path: 'sobre/indicar',
          component: MainAboutIndicate
        },
        {
          name: 'MainAboutRent',
          path: 'sobre/alugar',
          component: MainAboutRent
        },
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})

export default router
