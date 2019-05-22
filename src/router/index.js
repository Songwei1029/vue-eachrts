import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import PageOne from '@/components/pageOne'
import PageTwo from '@/components/pageTwo'
import PageThree from '@/components/pageThree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Info',
      component: Info
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
      children: [
        {
          path: 'PageOne',
          name: 'PageOne',
          component: PageOne,
        },
        {
          path: 'PageTwo',
          name: 'PageTwo',
          component: PageTwo,
        },
        {
          path: 'PageThree',
          name: 'PageThree',
          component: PageThree,
        },
      ]
    },
  ]
})
