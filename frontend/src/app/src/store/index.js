import Vue from 'vue'
import Vuex from 'vuex'

import journal from './journal'
import routes from './routes'
import search from './search'
import users from './users'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      journal,
      routes,
      search,
      users
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
