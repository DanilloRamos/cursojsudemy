function maiorMenorSoma(){
  let maior = null
  let menor = null
  let soma = 0

while (true){
  let entrada = prompt('Digite um número inteiro: ')
  let num = parseInt(entrada)


  if (num===0){
    break
  }

  soma +=num

  if (maior===null||num>maior){
    maior = num
  }

  if (menor===null||num<menor){
    menor = num
  }
}

console.log(`Maior: ${maior!==null ? maior: 'Nenhum número foi informado'}`)
console.log(`Menor: ${menor!==null ? menor: 'Nenhum número foi informado'}`)
console.log(`Soma: ${soma}`)
}

maiorMenorSoma()