export function prependPost (state, newPost) {
  state.posts.unshift(newPost)
}

export function setPosts (state, posts) {
  state.posts = posts
}
