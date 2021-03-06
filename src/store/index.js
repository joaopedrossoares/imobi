import Vue from 'vue'
import Vuex from 'vuex'

import mainNav from './modules/mainNav'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mainNav
  }
})
