function calculaFibonacci(){
  let proximo = 1
  let anterior = 0
  let atual

  console.log(anterior)
  console.log(proximo)
  
  do{
    atual = anterior+proximo
    console.log(atual)

    anterior = proximo
    proximo = atual

  }while(atual<500)
}

calculaFibonacci()