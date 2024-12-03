function leERetornaMaiorNumero(){
  let cont = 0
  let maior = Number.MIN_SAFE_INTEGER
  let num

  while (cont<5){
    num = parseFloat(prompt(`Digite o ${cont+1}º número:`))
    if (num>maior){
      maior = num
    }

    cont++
  }

  return maior
}

console.log(`O maior número informado foi ${leERetornaMaiorNumero()}`)