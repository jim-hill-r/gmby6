
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
      { path: 'donate', component: () => import('pages/Donate.vue') }
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
