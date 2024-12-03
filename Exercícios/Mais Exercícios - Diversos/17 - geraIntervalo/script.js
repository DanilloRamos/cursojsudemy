function geraIntervalo (a,b){
  console.log(`Intervalo entre ${a} e ${b}:`)
  for (let i=a; i<=b; i++){
    console.log(i)
  }
}

let a = parseInt(prompt('Informe um número inteiro: '))
let b = parseInt(prompt('Informe um número inteiro maior que o anterior: '))

if(a>b){
  b = parseInt(prompt('O valor de A não pode ser maior que o valor de B. Informe um número válido para o intervalo: '))

  while (a>b) {
    b = parseInt(prompt('O valor de A não pode ser maior que o valor de B. Informe um número válido para o intervalo: '))
  }
} else {
  geraIntervalo(a,b)
}

geraIntervalo(a,b)