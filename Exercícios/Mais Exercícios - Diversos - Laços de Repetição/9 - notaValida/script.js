function validaNumero (num){

  if (num>=0 && num<=10){
    console.log(`O valor ${num} é uma nota válida. Encerrando...`)
  }
  
  while (num<0 || num>10){
    num = prompt(`O valor ${num} é uma nota inválida. Informe uma nota válida entre 0 e 10: `)

    if (num>=0 && num<=10){
      console.log(`O valor ${num} é uma nota válida. Encerrando...`)
      break
    }
  }
}

let num = prompt ('Informe uma nota entre 0 e 10: ')
validaNumero(num)