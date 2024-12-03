function geraIntervaloEMostraSoma (a,b){
  let soma = 0
  console.log(`Intervalo entre ${a} e ${b}:`)
  for (let i=a; i<=b; i++){
    console.log(i)
    soma += i
  }

  console.log(`Soma do intervalo: ${soma}`)
}

let a = parseInt(prompt('Informe um número inteiro: '))
let b = parseInt(prompt('Informe um número inteiro maior que o anterior: '))

if(a>b){
  b = parseInt(prompt('O valor de A não pode ser maior que o valor de B. Informe um número válido para o intervalo: '))

  while (a>b) {
    b = parseInt(prompt('O valor de A não pode ser maior que o valor de B. Informe um número válido para o intervalo: '))
  }
} else {
  geraIntervaloEMostraSoma(a,b)
}
