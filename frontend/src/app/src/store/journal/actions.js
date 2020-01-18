import apollo from '../apollo'
import gql from 'graphql-tag'

export function createClimb (ctx, postId) {
  let id = Math.random().toString(36).substring(2) + Date.now().toString(36)
  let date = new Date()
  let created = date.toISOString()
  let climb = {
    id: id,
    created: created
  }
  let climbInput = {
    postId: postId,
    climb: climb
  }
  ctx.commit('prependClimb', climbInput)
}

export function createPost (ctx) {
  let id = Math.random().toString(36).substring(2) + Date.now().toString(36)
  let date = new Date()
  let created = date.toISOString()
  let createdBy = ctx.rootState.users.user.username
  let post = {
    id: id,
    created: created,
    createdBy: createdBy,
    editable: true,
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
    }).then(res => {
      let idUpdate = {
        currentId: post.id,
        newId: res.data.createPost.id
      }
      ctx.commit('setId', idUpdate)
      ctx.commit('setPost', res.data.createPost)
    })
  } else {
    apollo.mutate({
      mutation: gql`
        mutation updatePost {
          updatePost(input: {
            id: "${post.id}"
            text: "${post.text}"
            created: "${post.created}"
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
    post.editable = false
    ctx.commit('setPost', post)
  }
}

export function getPosts (ctx) {
  let createdBy = ctx.rootState.users.user.username
  //TODO: Change limit back to 20 once dynamoDB queries are fixed. 
  apollo.query({
    query: gql`
      query Posts {
        listPosts(filter: {
          createdBy: {
            eq: "${createdBy}"
          }
        }, limit: 1000){
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
  //TODO: Change limit back to 20 once dynamoDB queries are fixed. 
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
          }, limit: 1000){
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
