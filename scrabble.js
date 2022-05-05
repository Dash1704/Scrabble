const scrabble = (word) => {
  const array = word.split('')
  let pointTotal = 0

  array.map((letter) => {
    if(letter === 'A' || letter === 'E'){
        pointTotal += 1
    }
  })
  
return pointTotal
}

module.exports = scrabble