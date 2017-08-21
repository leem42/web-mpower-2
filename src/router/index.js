import Vue from 'vue'
import Router from 'vue-router'
import SubjectInterest from '@/components/SubjectInterest.vue'
import SubjectInterestTwo from '@/components/SubjectInterestTwo.vue'
import SubjectInterestThree from '@/components/SubjectInterestThree.vue'
import Eligibility from '@/components/Eligibility.vue'
import Congratulations from '@/components/Congratulations.vue'
import Ineligible from '@/components/Ineligible.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SubjectInterest',
      component: SubjectInterest
    },
    {
      path: '/InterestTwo',
      name: 'SubjectInterestTwo',
      component: SubjectInterestTwo
    },
    {
      path: '/InterestThree',
      name: 'SubjectInterestThree',
      component: SubjectInterestThree
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
    },
    {
      path: '/Ineligible',
      name: 'Ineligible',
      component: Ineligible
    }
  ]
})
