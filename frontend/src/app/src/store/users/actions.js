import axios from 'axios'

export function userLoggedIn (ctx, href) {
  let key = 'code='
  let start = href.indexOf(key) + key.length
  let codeLength = 36
  let code = href.substring(start, start + codeLength)
  let redirectUrl =
    window.location.protocol + '//' +
    window.location.hostname + '/' +
    'login'
  let body = encodeURI(
    'grant_type=authorization_code' +
    '&client_id=7cbcn9b7fbrva8c3lua61p0bma' +
    '&redirect_uri=' + redirectUrl +
    '&code=' + code
  )
  axios.post('https://6umby.auth.us-east-2.amazoncognito.com/oauth2/token', body, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
    .then(res => {
      ctx.commit('setToken', res.data)
      axios.get('https://6umby.auth.us-east-2.amazoncognito.com/oauth2/userInfo', {
        headers: { 'Authorization': 'Bearer ' + res.data.access_token }
      })
        .then(res => {
          ctx.commit('setUser', res.data)
          ctx.commit('setIsAuthenticated', true)
        })
    })
}

export function userLoggedOut (ctx) {
  ctx.commit('setUser', '')
  ctx.commit('setIsAuthenticated', false)
}
