function calculaCrescimento(a,b){
  let cont = 0

  do {
    a*=1.03
    b*=1.015
    cont++
    if (a>=b){
      return cont
      break
    }

  } while (a<b)

  return cont
}

console.log(`Crescimento Populacional \n`)
let a = prompt('Informa a população da cidade A: ')
let b = prompt('Informe a população da cidade B: ')

if (a>0 && b>0){
  console.log(`Em ${calculaCrescimento(a,b)} anos, a população de A será maior ou igual à população de B`)
} else {
  while(a<0 || b<0){
    if (a<0) {
      a = prompt('Valor inválido. Informe a população de A novamente')
    } else if (b<0){
      b = prompt('Valor inválido. Informe a população de B novamente')
    }
  
    if (a>0 && b>0){
      console.log(`Em ${calculaCrescimento(a,b)} anos, a população de A será maior ou igual à população de B`)
      break
    }
  }
  
}