import * as fc from 'fast-check'

describe('index', () => {
  it('dummy', () => {
    fc.property(fc.string(), (name) => {
      expect(1).toBe(1)
    })
  })
})
