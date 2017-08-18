import Vue from 'vue'
import Eligibility from '@/components/Eligibility'

describe('Eligibility.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Eligibility)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#greatFit').textContent.trim())
      .to.equal('You would be a great fit for the mPower study!')
  })
})
