export function prependRoute (state, newRoute) {
  state.routes.unshift(newRoute)
}

export function setRoutes (state, routes) {
  state.routes = routes
}
