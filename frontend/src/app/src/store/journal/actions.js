import apollo from '../apollo'
import gql from 'graphql-tag'

export function createPost (ctx, newText) {
  ctx.commit('prependPost', newText)
}

export function getPosts (ctx) {
  apollo.query({
    query: gql`
      query Posts {
        getPost(id: 1) {
          id
          title
        }
      }
    `
  })
}
