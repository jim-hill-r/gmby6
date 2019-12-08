import apollo from '../apollo'
import gql from 'graphql-tag'

export function createPost (ctx, newText) {
  apollo.mutate({
    mutation: gql`
      mutation createPost {
        createPost(input: {
          text: "${newText}"
        }){
          id
          text
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
          }
        }
      }
    `
  }).then(res => ctx.commit('setPosts', res.data.listPosts.items))
}
