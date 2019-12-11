export function prependPost (state, post) {
  state.posts.unshift(post)
}

export function setEditable (state, id) {
  // TODO: Find post and overwrite it - Currently this always overwrites first post
  state.posts[0].editable = true
}

export function setPost (state, post) {
  // TODO: Find post and overwrite it - Currently this always overwrites first post
  state.posts[0] = post
}

export function removePost (state, id) {
  // TODO: Find post with id and remove it from posts list.
}

export function setPosts (state, posts) {
  state.posts = posts
}
