function retornaMaiorNumArray(array){
  let maior = Number.MIN_VALUE

  for (let i=0;i<array.length;i++){
    if(array[i]>maior){
      maior=array[i]
    }
  }

  console.log(`Maior elemento do array: ${maior}`)
}

retornaMaiorNumArray([1,2,-5,9,75])