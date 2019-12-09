export function submitSearch (ctx, searchText) {
  if (searchText === '') {
    ctx.dispatch('journal/getPosts', {}, { root: true })
    ctx.dispatch('routes/getRoutes', {}, { root: true })
  } else {
    ctx.dispatch('journal/searchPosts', searchText, { root: true })
    ctx.dispatch('routes/searchRoutes', searchText, { root: true })
  }
}
