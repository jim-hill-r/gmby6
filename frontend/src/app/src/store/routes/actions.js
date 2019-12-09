import apollo from '../apollo'
import gql from 'graphql-tag'

export function createRoute (ctx, title) {
  let id = Math.random().toString(36).substring(2) + Date.now().toString(36)
  let date = new Date()
  let created = date.toISOString()
  let createdBy = ctx.rootState.users.user.username
  apollo.mutate({
    mutation: gql`
      mutation createRoute {
        createRoute(input: {
          id: "${id}"
          title: "${title}"
          created: "${created}"
          createdBy: "${createdBy}"
        }){
          id
          title
          created
        }
      }
    `
  }).then(res => ctx.commit('prependRoute', res.data.createRoute))
}

export function getRoutes (ctx) {
  apollo.query({
    query: gql`
      query Routes {
        listRoutes(limit: 10){
          items{
            id
            title
            created
          }
        }
      }
    `
  }).then(res => ctx.commit('setRoutes', sortRoutes(res.data.listRoutes.items)))
}

export function searchRoutes (ctx, searchText) {
  apollo.query({
    query: gql`
      query Search {
        listRoutes(filter: {
          title: {
            contains: "${searchText}"
          }
        }, limit: 10){
          items{
            id
            title
            created
          }
        }
      }
    `
  }).then(res => ctx.commit('setRoutes', sortRoutes(res.data.listRoutes.items)))
}

function sortRoutes (routes) {
  return routes.sort((a, b) => {
    if (b.title < a.title) {
      return -1
    }
    if (b.title > a.title) {
      return 1
    }
    return 0
  })
}
