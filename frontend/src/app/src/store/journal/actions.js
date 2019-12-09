import apollo from '../apollo'
import gql from 'graphql-tag'

export function createPost (ctx, text) {
  let date = new Date()
  let created = date.toISOString()
  let id = Math.random().toString(36).substring(2) + Date.now().toString(36)
  let createdBy = ctx.rootState.users.user.username
  apollo.mutate({
    mutation: gql`
      mutation createPost {
        createPost(input: {
          id: "${id}"
          text: "${text}"
          created: "${created}"
          createdBy: "${createdBy}"
        }){
          id
          text
          created
        }
      }
    `
  }).then(res => ctx.commit('prependPost', res.data.createPost))
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
