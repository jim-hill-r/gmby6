export function signin (ctx, username) {
  ctx.commit('setUser', username)
}
