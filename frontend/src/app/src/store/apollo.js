import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'
import { createHttpLink } from 'apollo-link-http'

const httpLink = createHttpLink({
  uri: 'https://v4oubrsjlrhhpmyvrgx34yhheu.appsync-api.us-east-2.amazonaws.com/graphql',
  fetch: fetch,
  headers: {
    'x-api-key': 'da2-erl577lv4fdblpbzlx3yen6ydq',
    'content-type': 'application/graphql'
  }
})

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})
