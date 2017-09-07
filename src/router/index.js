import Vue from 'vue'
import Router from 'vue-router'
import Website from '@/components/Website.vue'
import OnBoarding from '@/components/OnBoarding.vue'
import YourStory from '@/components/YourStory.vue'
import About from '@/components/About.vue'
import Team from '@/components/Team.vue'
import Privacy from '@/components/Privacy.vue'
import Contact from '@/components/Contact.vue'
import FAQ from '@/components/FAQ.vue'
import WhyInterested from '@/components/WhyInterested.vue'
import SubjectInterest from '@/components/SubjectInterest.vue'
import OverviewEligibility from '@/components/OverviewEligibility.vue'
import Eligibility from '@/components/Eligibility.vue'
import Congratulations from '@/components/Congratulations.vue'
import Ineligible from '@/components/Ineligible.vue'
import QuestionOne from '@/components/Quiz/QuestionOne.vue'
import Registration from '@/components/Registration'
import NullPage from '@/components/NullPage'
import auth from '../auth/auth'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/NullPage/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  routes: [
    {
      path: '/NullPage',
      component: NullPage,
      beforeEnter: requireAuth,
      children: [
        {
          path: 'Website',
          component: Website,
          children: [
            {
              path: 'YourStory',
              name: 'YourStory',
              component: YourStory

            },
            {
              path: 'About',
              name: 'About',
              component: About
            },
            {
              path: 'Team',
              name: 'Team',
              component: Team
            },
            {
              path: 'Privacy',
              name: 'Privacy',
              component: Privacy
            },
            {
              path: 'Contact',
              name: 'Contact',
              component: Contact
            },
            {
              path: 'FAQ',
              name: 'FAQ',
              component: FAQ
            }
          ]
        },
        {
          path: 'OnBoarding',
          component: OnBoarding,
          children: [
            {
              path: 'SubjectInterest',
              name: 'SubjectInterest',
              component: SubjectInterest
            },
            {
              path: 'Eligibility',
              name: 'Eligibility',
              component: Eligibility
            },
            {
              path: 'OverviewEligibility',
              name: 'OverviewEligibility',
              component: OverviewEligibility
            },
            {
              path: 'Congratulations',
              name: 'Congratulations',
              component: Congratulations
            },
            {
              path: 'Ineligible',
              name: 'Ineligible',
              component: Ineligible
            },
            {
              path: 'Registration',
              name: 'Registration',
              component: Registration
            },
            {
              path: 'WhyInterested',
              name: 'WhyInterested',
              component: WhyInterested
            },
            {
              path: 'QuestionOne',
              name: 'QuestionOne',
              component: QuestionOne
            }
          ]
        }
      ]
    },
    {
      path: '/NullPage',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/NullPage')
      }
    }
  ]
})
