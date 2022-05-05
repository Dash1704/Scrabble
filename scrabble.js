const scrabble = (word) => {
  const array = word.split('')
  let pointTotal = 0

   const pointsChart = {
       "A":1, "E":1, "I":1, "O":1, "U":1, "L":1, "N":1, "R":1, "S":1, "T":1,
       "D":2, "G":2,
       "B":3, "C":3, "M":3, "P":3
   }

  array.forEach((letter) => {
    pointTotal += pointsChart[letter]
  })
  
return pointTotal
}

module.exports = scrabble