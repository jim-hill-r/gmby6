import Vue from 'vue'

export function setUser (state, user) {
  Vue.set(state.user, 'username', user.username)
  Vue.set(state.user, 'displayname', user.given_name)
}

export function setToken (state, token) {
  Vue.set(state.user, 'token', token)
}

export function setIsAuthenticated (state, isAuthenticated) {
  Vue.set(state.user, 'isAuthenticated', isAuthenticated)
}
