export function createPost (ctx, newText) {
  ctx.commit('prependPost', newText)
}
