import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from 'views/Main'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: {
      noRequiredAuth: true
    }
  },
  {
    path: '/',
    component: Main,
    redirect: '/welcome',
    children: [
      //welcome
      {
        path: 'welcome',
        component: () => import('../views/welcome/Welcome.vue')
      },
      //项目
      {
        path: 'project/create',
        component: () => import('../views/project/ArticleEdit.vue')
      },
      {
        path: 'project/edit/:id',
        component: () => import('../views/project/ArticleEdit.vue'),
        props: true
      },
      {
        path: 'project/list',
        component: () => import('../views/project/ArticleList.vue')
      },
      //用户
      {
        path: 'admin_user/list',
        component: () => import('../views/adminUser/AdminUserList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

router.beforeEach((to, from, next) => {

  if (!to.meta.noRequiredAuth && !sessionStorage.token) return next('/login')

  return next()

})

export default router
