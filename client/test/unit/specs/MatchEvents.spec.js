import Vue from 'vue'
import MatchEvents from '@/components/MatchEvents'

describe('Match Events', () => {
  it('should render Match Events', () => {
    const Constructor = Vue.extend(MatchEvents)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h3').textContent)
      .to.equal('Match Events')
  })
})
