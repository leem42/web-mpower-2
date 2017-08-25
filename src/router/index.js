import Vue from 'vue'
import Router from 'vue-router'
import Website from '@/components/Website.vue'
import OnBoarding from '@/components/OnBoarding.vue'
import YourStory from '@/components/YourStory.vue'
import About from '@/components/About.vue'
import Team from '@/components/Team.vue'
import SubjectInterest from '@/components/SubjectInterest.vue'
import Eligibility from '@/components/Eligibility.vue'
import Congratulations from '@/components/Congratulations.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Website,
      children: [
        {
          path: '',
          component: YourStory
        },
        {
          path: 'About',
          component: About
        },
        {
          path: 'Team',
          component: Team
        }
      ]
    },
    {
      path: '/OnBoarding',
      component: OnBoarding,
      children: [
        {
          path: '',
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
    }
  ]
})
