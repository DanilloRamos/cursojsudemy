function contaParesImpares(){
  let contPares = 0
  let contImpares = 0
  let contNum = 0

  let num = parseInt(prompt(`Digite o ${contNum+1}º número inteiro:`))

  if (num%2===0){
    contPares++
  } else {
    contImpares++
  }
  
  contNum++

  while(contNum<9){
    num = parseInt(prompt(`Digite o ${contNum+1}º número inteiro:`))

    if (num%2===0){
      contPares++
    } else {
      contImpares++
   }

   contNum++
  }

  console.log(`Foram digitados ${contPares} pares e ${contImpares} ímpares`)
}

contaParesImpares()