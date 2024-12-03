function maiorMenorSoma(){
  let maior = null
  let menor = null
  let soma = 0

while (true){
  let entrada = prompt('Digite um número inteiro entre 0 e 1000 (0 para encerrar): ')
  let num = parseInt(entrada)

  while(num<0 || num>1000){
    entrada = prompt(`O número digitado está fora do intervalo especificado. Por favor, digite um número dentro do intervalo entre 0 e 1000: `)
    num = parseInt(entrada)
  }


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