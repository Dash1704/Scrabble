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

  it('should BCMP as 3 points each', () => {
    expect(scrabble('BCMP')).toEqual(12)
  })

  it('should BCMP as 4 points each', () => {
    expect(scrabble('FHVWY')).toEqual(20)
  })

  it('should K as 5 points', () => {
    expect(scrabble('K')).toEqual(5)
  })

  it('should JX as 8 points each', () => {
    expect(scrabble('JX')).toEqual(16)
  })

  it('should QZ as 8 points each', () => {
    expect(scrabble('QZ')).toEqual(20)
  })
})