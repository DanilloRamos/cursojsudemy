function ePrimo(num){
  for (let i=2;i<num;i++){
    if (num%i===0){
      return false
    }
  }
  return num>1
}


function primosAteN(num){
  let primos = []

  for (let i=2;i<=num;i++){
    if (ePrimo(i)){
      primos.push(i)
    }
  }

  console.log(`${primos} `)
}

primosAteN(10)