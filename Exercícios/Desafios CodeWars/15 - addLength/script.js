function addLength(str) {
  let sep = str.split(' ')
  let wordsLength = []

  for (let i=0; i<sep.length; i++){
    wordsLength.push(`${sep[i]} ${sep[i].length}`)
  }

  return wordsLength
}