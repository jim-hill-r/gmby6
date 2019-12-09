import apollo from '../apollo'
import gql from 'graphql-tag'

export function createRoute (ctx, title) {
  let date = new Date()
  let dateString = date.toISOString()
  let newId = Math.random().toString(36).substring(2) + Date.now().toString(36)
  apollo.mutate({
    mutation: gql`
      mutation createRoute {
        createRoute(input: {
          id: "${newId}"
          title: "${title}"
          created: "${dateString}"
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
