function calculaPotencia(base,exp){
  let resultado = 1
  let i = 0

  while(i<exp){
    resultado *= base
    i++
  }

  return resultado
}

let base = parseInt(prompt('Digite um número para a base: '))
let exp = parseInt(prompt('Digite um número para o expoente'))

console.log(`${base}^${exp} = ${calculaPotencia(base,exp)}`)