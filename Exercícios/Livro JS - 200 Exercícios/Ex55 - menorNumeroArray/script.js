function retornaMenorNumArray(array){
  let menor = Number.MAX_VALUE

  for (let i=0;i<array.length;i++){
    if(array[i]<menor){
      menor=array[i]
    }
  }

  console.log(`Menor elemento do array: ${menor}`)
}

retornaMenorNumArray([1,2,-5,9,75])