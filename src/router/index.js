import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import Hello from '../view/hello'
import Home from '../view/home/home'

// const routerPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return routerPush.call(this, location).catch(error => error)
// }

Vue.use(Router)

const routesAttr = [
  {path: '/', name: 'Hello', component: Hello},
  {path: '/Home', name: 'Home', component: Home},
  {path: '/HelloWorld', name: 'HelloWorld', component: HelloWorld},
  {path: '/HelloWorld2', name: 'HelloWorld2', component: HelloWorld2}
]

const router = new Router({
  routes: routesAttr
})

router.beforeEach((to, from, next) => {
  // if (to.matched.some(record => record.meta.requireAuth)) {  // 判断当前路由是否需要权限
  //   if (sessionStorage.getItem("access_token")) { // 判断当前是否存在 token
  //     next()
  //   } else {
  //     next({
  //       path: '/login',
  //       quiry: {
  //         redirect: to.fullPath // 将跳转的路由path作为参数，登录成功后跳转到改路由
  //       }
  //     })
  //   }
  // } else {
  //   next()
  // }
  next()
})

export default router
