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

  it('should return D as 2', () => {
    expect(scrabble('D')).toEqual(2)
  })

  it('should return DG as 4', () => {
    expect(scrabble('DG')).toEqual(4)
  })
})