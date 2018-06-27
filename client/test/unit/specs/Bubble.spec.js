describe('Sort Helper', () => {
  it('should sort an object with minute property', () => {
    var mockObj = [{minute: 10}, {minute: 5}, {minute: 2}]
    function bubble (obj) {
      return obj.sort(function compare (a, b) {
        if (a.minute < b.minute) {
          return -1
        } else if (a.minute > b.minute) {
          return 1
        } else {
          return 0
        }
      })
    }
    var result = bubble(mockObj)
    expect(result[0].minute)
      .to.equal(2)
  })
})
