function geraTabuada(num){
  for (let i=1;i<=10;i++){
    console.log(`${num} x ${i} = ${num*i}`)
  }
}

let num = parseInt(prompt('Digite um número inteiro entre 1 e 10:'))

if ((num<=0 && num>10) || !Number.isInteger(num)){
  num = parseInt(prompt(`O número informado não é inteiro ou não está entre 1 e 10. Favor digitar um número válido:`))
  
  while ((num<=0 && num>10) || !Number.isInteger(num)) {
    num = parseInt(prompt(`O número informado não é inteiro ou não está entre 1 e 10. Favor digitar um número válido:`))
  }
} else {
  geraTabuada(num)
}