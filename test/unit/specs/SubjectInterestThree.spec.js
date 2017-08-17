import Vue from 'vue'
import SubjectInterestThree from '@/components/SubjectInterestThree'

describe('SubjectInterestThree.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SubjectInterestThree)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('div.row > p.lead').textContent.trim())
      .to.equal('Why are you interested in joining mPower?')
  })
  describe('interest reason', () =>
    it('should ask for items willing to try in study', done => {
      const Constructor = Vue.extend(SubjectInterestThree)
      const vm = new Constructor().$mount()

      // user submit button should not show without any selection made
      expect(vm.$el.querySelector('#submit')).to.equal(null)

      expect(vm.$el.querySelector('p.tiny.lead').textContent.trim()).to
      .equal('I would like to recieve')

      expect(vm.$el.querySelector('v-icon').textContent.trim()).to
      .equal('fa-plus-circle')

      // if user clicks an item
      vm.selectedChoice[0].color = 'darkPurple'

      // submit button should show once option is chosen
      Vue.nextTick(() => {
        expect(vm.$el.querySelector('#submit')).to.not.equal(null)
        done()
      })
    })
  )
})
