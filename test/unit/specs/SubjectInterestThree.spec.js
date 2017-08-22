import Vue from 'vue'
import SubjectInterestThree from '@/components/SubjectInterestThree'

describe('SubjectInterestThree.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SubjectInterestThree)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('div.row > p.lead').textContent.trim())
    .to.equal('Why are you interested in joining mPower?')
  })
})
