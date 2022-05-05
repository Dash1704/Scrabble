const scrabble = (word) => {
  const array = word.split('')
  let pointTotal = 0

  array.map((letter) => {
    if(letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U' || letter === 'L' || letter === 'N' || letter === 'R' || letter === 'S' || letter === 'T'){
        pointTotal += 1
    }
  })
  
return pointTotal
}

module.exports = scrabble