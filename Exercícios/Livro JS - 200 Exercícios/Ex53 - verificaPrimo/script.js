function verificaPrimo(num){
    for (let i=2;i<num;i++){
      if (num%i===0){
          console.log(`${num} não é primo`)
          break
      } else {
          console.log(`${num} é primo`)
          break
      }
    }
  }
  
  verificaPrimo(12)
  verificaPrimo(5)