const scrabble = require('./scrabble')

describe('scrabble', () => {
  it('should return A as 1', () => {
      expect(scrabble('A')).toEqual(1)
  })

  it('should return AE as 2', () => {
    expect(scrabble('AE')).toEqual(2)
  })
  
  it('should return AE as 2', () => {
    expect(scrabble('AEIOULNRST')).toEqual(10)
  })
})