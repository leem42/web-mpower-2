import Vue from 'vue'
import Eligibility from '@/components/Eligibility'

describe('Eligibility.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Eligibility)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('div.row > p.lead.mx-auto').textContent.trim())
      .to.equal('You would be a great fit for the mPower study!')
  })
  describe('eligibility question one', () =>
    it('should ask for age', done => {
      const Constructor = Vue.extend(Eligibility)
      const vm = new Constructor().$mount()

      expect(vm.$el.querySelector('#placeField')).to.equal(null)

      vm.age = 11

      // check that error message displays when age entered is < 18
      Vue.nextTick(() => {
        expect(vm.$el.querySelector('#ageError')).to.not.equal(null)
        done()
      })

      vm.age = 31

      Vue.nextTick(() => {
        expect(vm.$el.querySelector('#ageError')).to.equal(null)
        done()
      })
    })
  )
})
