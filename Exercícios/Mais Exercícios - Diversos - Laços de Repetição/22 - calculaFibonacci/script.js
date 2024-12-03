function calculaFibonacci(num){
  let proximo = 1
  let anterior = 0
  let atual

  console.log(anterior)
  console.log(proximo)
  
  for (let i=2;i<num;i++){
    atual = anterior+proximo
    console.log(atual)

    anterior = proximo
    proximo = atual

  }
}

calculaFibonacci(5)