function calculaFatorialNVezes(){
    while (true){
      let entrada = prompt('Digite um número maior que 0 ou menor que 16, ou digite 0 para sair:')
      let num = parseInt(entrada)
      let fat = 1
  
      if (num === 0){
          alert('Encerrando...')
          break
      }
  
      if (num<0 || num>=16){
          alert('O número digitado não está dentro do intervalo exigido. Por favor, digite um número válido')
          continue
      }
  
      for (let i=1; i<=num; i++){
          fat *= i
      }
  
      alert(`${num}! = ${fat}`)
    }
  }
  
  calculaFatorialNVezes()