import Vue from 'vue'
import SubjectInterest from '@/components/SubjectInterest'

describe('SubjectInterest.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SubjectInterest)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('div.row > p.robot').textContent.trim())
      .to.equal('Why are you interested in joining mPower?')
    expect(vm.$el.querySelector('#interestedIn').textContent.trim()).to
    .equal('I\'m interested in joining mPower because I')
    vm.interestReasonsPicked = 'darkPurple'
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('#submit')).to.not.equal(null)
      done()
    })
  })
})
