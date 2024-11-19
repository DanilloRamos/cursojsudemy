function somaPares(array){
  console.log(`A soma dos pares é: ${array.reduce((soma,num) => num%2===0? soma+num:soma,0)}`)
}

somaPares([1,2,3,4,5,6,7])