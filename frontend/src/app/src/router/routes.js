const loginCallback = 'login'
const logoutCallback = 'logout'
const cognitoClientId = '7cbcn9b7fbrva8c3lua61p0bma'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'you', component: () => import('pages/You.vue') },
      { path: 'journal', component: () => import('pages/Journal.vue') },
      { path: 'routes', component: () => import('pages/Routes.vue') },
      { path: 'meet', component: () => import('pages/Meet.vue') },
      { path: 'donate', component: () => import('pages/Donate.vue') },
      { path: 'signin',
        beforeEnter: (to, from, next) => {
          let redirectUrl =
            window.location.protocol + '//' +
            window.location.hostname + '/' +
            loginCallback
          window.location.href = encodeURI(
            'https://6umby.auth.us-east-2.amazoncognito.com/login?' +
            'client_id=' + cognitoClientId +
            '&response_type=code' +
            '&scope=openid+profile' +
            '&redirect_uri=' + redirectUrl
          )
        }
      },
      { path: loginCallback, component: () => import('pages/Login.vue') },
      { path: 'signout',
        beforeEnter: (to, from, next) => {
          let redirectUrl =
            window.location.protocol + '//' +
            window.location.hostname + '/' +
            logoutCallback
          window.location.href = encodeURI(
            'https://6umby.auth.us-east-2.amazoncognito.com/logout?' +
            'client_id=' + cognitoClientId +
            '&logout_uri=' + redirectUrl
          )
        }
      },
      { path: logoutCallback, component: () => import('pages/Logout.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
