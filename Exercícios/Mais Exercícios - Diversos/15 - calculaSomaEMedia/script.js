function calculaSomaEMedia(){
  let cont = 0
  let num
  let soma = 0
  
  while(cont<5){
    num = parseFloat(prompt(`Digite o ${cont+1}º número:`))
    soma += num
    cont ++
  }

  console.log(`Soma: ${soma}`)
  console.log(`Média: ${(soma/5).toFixed(2)}`)
}

calculaSomaEMedia()