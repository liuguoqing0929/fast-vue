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

export default new Router({
  routes: routesAttr
})
