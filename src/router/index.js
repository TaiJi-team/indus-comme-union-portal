import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import gongshanglian from "../components/gongshanglian";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'gongshanglian',
      component: gongshanglian
    }
  ]
})
