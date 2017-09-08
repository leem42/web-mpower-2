import Vue from 'vue'
import Router from 'vue-router'

import Website from '@/components/web_components/Website.vue'
import YourStory from '@/components/web_components/YourStory.vue'
import About from '@/components/web_components/About.vue'
import Team from '@/components/web_components/Team.vue'
import Privacy from '@/components/web_components/Privacy.vue'
import Contact from '@/components/web_components/Contact.vue'
import FAQ from '@/components/web_components/FAQ.vue'

import OnBoarding from '@/components/on_boarding_components/OnBoarding.vue'
import WhyInterested from '@/components/on_boarding_components/WhyInterested.vue'
import SubjectInterest from '@/components/on_boarding_components/SubjectInterest.vue'
import OverviewEligibility from '@/components/on_boarding_components/OverviewEligibility.vue'
import Eligibility from '@/components/on_boarding_components/Eligibility.vue'
import Congratulations from '@/components/on_boarding_components/Congratulations.vue'
import Ineligible from '@/components/on_boarding_components/Ineligible.vue'
import QuestionOne from '@/components/on_boarding_components/quiz/QuestionOne.vue'
import QuestionTwo from '@/components/on_boarding_components/quiz/QuestionTwo.vue'
import QuestionThree from '@/components/on_boarding_components/quiz/QuestionThree.vue'
import QuestionFour from '@/components/on_boarding_components/quiz/QuestionFour.vue'
import QuestionFive from '@/components/on_boarding_components/quiz/QuestionFive.vue'
import Registration from '@/components/on_boarding_components/Registration'
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
            },
            {
              path: 'QuestionTwo',
              name: 'QuestionTwo',
              component: QuestionTwo
            },
            {
              path: 'QuestionThree',
              name: 'QuestionThree',
              component: QuestionThree
            },
            {
              path: 'QuestionFour',
              name: 'QuestionFour',
              component: QuestionFour
            },
            {
              path: 'QuestionFive',
              name: 'QuestionFive',
              component: QuestionFive
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
