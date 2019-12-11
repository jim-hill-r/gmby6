import Vue from 'vue'

export function prependPost (state, post) {
  state.posts.unshift(post)
}

export function setEditable (state, id) {
  const index = state.posts.findIndex(p => p.id === id)
  Vue.set(state.posts[index], 'editable', true)
}

export function setPost (state, post) {
  const index = state.posts.findIndex(p => p.id === post.id)
  state.posts[index] = post
}

export function removePost (state, id) {
  const index = state.posts.findIndex(p => p.id === id)
  state.posts.splice(index, 1)
}

export function setPosts (state, posts) {
  state.posts = posts
}
