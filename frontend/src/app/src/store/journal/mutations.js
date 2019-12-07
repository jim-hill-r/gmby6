export function prependPost (state, newText) {
  state.posts.unshift({
    id: Math.random().toString(36).substring(2) + Date.now().toString(36),
    text: newText
  })
}
