import Vue from 'vue'

export function prependClimb (state, climbInput) {
  let climbs = state.climbs[climbInput.postId]
  if (!climbs) {
    climbs = []
  }
  climbs.unshift(climbInput.climb)
  Vue.set(state.climbs, climbInput.postId, climbs)
}

export function prependPost (state, post) {
  state.posts.unshift(post)
}

export function setEditable (state, id) {
  const index = state.posts.findIndex(p => p.id === id)
  Vue.set(state.posts[index], 'editable', true)
}

export function setId (state, idUpdate) {
  const index = state.posts.findIndex(p => p.id === idUpdate.currentId)
  Vue.set(state.posts[index], 'id', idUpdate.newId)
  let climbs = state.climbs[idUpdate.currentId]
  Vue.set(state.climbs, idUpdate.newId, climbs)
}

export function setPost (state, post) {
  let index = state.posts.findIndex(p => p.id === post.id)
  Vue.set(state.posts, index, post)
}

export function removePost (state, id) {
  const index = state.posts.findIndex(p => p.id === id)
  state.posts.splice(index, 1)
}

export function setPosts (state, posts) {
  state.posts = posts
}
