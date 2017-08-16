import Vue from 'vue'
import Router from 'vue-router'
import SubjectInterest from '@/components/SubjectInterest.vue'
import Eligibility from '@/components/Eligibility.vue'
import Congratulations from '@/components/Congratulations.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SubjectInterest',
      component: SubjectInterest
    },
    {
      path: '/Eligibility',
      name: 'Eligibility',
      component: Eligibility
    },
    {
      path: '/Congratulations',
      name: 'Congratulations',
      component: Congratulations
    }
  ]
})
