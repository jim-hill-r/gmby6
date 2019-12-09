import apollo from '../apollo'
import gql from 'graphql-tag'

export function createPost (ctx, newText) {
  let date = new Date()
  let dateString = date.toISOString()
  let newId = Math.random().toString(36).substring(2) + Date.now().toString(36)
  apollo.mutate({
    mutation: gql`
      mutation createPost {
        createPost(input: {
          id: "${newId}"
          text: "${newText}"
          created: "${dateString}"
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
  apollo.query({
    query: gql`
      query Posts {
        listPosts(limit: 10){
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
  apollo.query({
    query: gql`
      query Search {
        listPosts(filter: {
            text: {
              contains: "${searchText}"
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
