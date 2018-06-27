import Vue from 'vue'
import MatchSummary from '@/components/MatchSummary'

describe('Match Summary', () => {
  it('should render Match Stats', () => {
    const Constructor = Vue.extend(MatchSummary)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Match Stats')
  })
})
