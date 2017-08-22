import Vue from 'vue'
import SubjectInterestTwo from '@/components/SubjectInterestTwo'

describe('SubjectInterestTwo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SubjectInterestTwo)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('div.row > p.lead').textContent.trim())
      .to.equal('Why are you interested in joining mPower?')
    expect(vm.$el.querySelector('#submit')).to.equal(null)

    expect(vm.$el.querySelector('p.tiny.lead').textContent.trim()).to
    .equal('I\'d be willing to try')
    // if user clicks an item
    vm.selectedChoice[0].color = 'darkPurple'

    // submit button should show once option is chosen
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('#willing')).to.not.equal(null)
      done()
    })
  })
})
