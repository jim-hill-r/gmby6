import apollo from '../apollo'
import gql from 'graphql-tag'

export function createPost (ctx) {
  let id = Math.random().toString(36).substring(2) + Date.now().toString(36)
  let date = new Date()
  let created = date.toISOString()
  let createdBy = ctx.rootState.users.user.username
  let post = {
    id: id,
    created: created,
    createdBy: createdBy,
    editing: true,
    new: true
  }
  ctx.commit('prependPost', post)
}

export function savePost (ctx, post) {
  if (post.new) {
    apollo.mutate({
      mutation: gql`
        mutation createPost {
          createPost(input: {
            id: "${post.id}"
            text: "${post.text}"
            created: "${post.created}"
            createdBy: "${post.createdBy}"
          }){
            id
            text
            created
          }
        }
      `
    }).then(res => ctx.commit('setPost', res.data.createPost))
  } else {
    apollo.mutate({
      mutation: gql`
        mutation updatePost {
          updatePost(input: {
            id: "${post.id}"
            text: "${post.text}"
            created: "${post.created}"
            createdBy: "${post.createdBy}"
          }){
            id
            text
            created
          }
        }
      `
    }).then(res => ctx.commit('setPost', res.data.updatePost))
  }
}

export function editPost (ctx, post) {
  ctx.commit('setEditable', post.id)
}

export function cancelEditPost (ctx, post) {
  if (post.new) {
    ctx.commit('removePost', post.id)
  } else {
    post.editing = false
    ctx.commit('setPost', post)
  }
}

export function getPosts (ctx) {
  let createdBy = ctx.rootState.users.user.username
  apollo.query({
    query: gql`
      query Posts {
        listPosts(filter: {
          createdBy: {
            eq: "${createdBy}"
          }
        }, limit: 10){
          items{
            id
            text
            created
          }
        }
      }
    `
  }).then(res => ctx.commit('setPosts', sortPosts(res.data.listPosts.items)))
}

export function searchPosts (ctx, searchText) {
  let createdBy = ctx.rootState.users.user.username
  apollo.query({
    query: gql`
      query Search {
        listPosts(filter: {
            text: {
              contains: "${searchText}"
            }
            createdBy: {
              eq: "${createdBy}"
            }
          }, limit: 10){
          items{
            id
            text
            created
          }
        }
      }
    `
  }).then(res => ctx.commit('setPosts', sortPosts(res.data.listPosts.items)))
}

function sortPosts (posts) {
  return posts.sort((a, b) => {
    if (b.created < a.created) {
      return -1
    }
    if (b.created > a.created) {
      return 1
    }
    return 0
  })
}
