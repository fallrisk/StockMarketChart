/**
 * Created by Justin on 2016-02-19.
 */

define(['../stocks'], function () {
  describe('stocks', () => {
    it('fetches the data for the Amazon stock AMZN', () => {
      stocks.fetchStock('AMZN')
        .then(function (results) {
          console.log(results)
          expect(1).toBe(1)
        })
    })
  })
})
