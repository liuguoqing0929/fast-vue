import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import Hello from '../view/hello'

// const routerPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return routerPush.call(this, location).catch(error => error)
// }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld2',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
