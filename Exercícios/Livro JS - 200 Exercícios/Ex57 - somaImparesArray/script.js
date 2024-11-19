function somaImpares(array){
  let soma = 0

  for (let i=0;i<array.length;i++){
    if (array[i]%2!==0){
      soma+=array[i]
    }
  }

  console.log(`A soma dos ímpares é: ${soma}`)
}

somaImpares([1,2,3,4,5,6,7])