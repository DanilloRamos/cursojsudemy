function numeroPalindromo(num){
    let invertido = 0
    let temp = num
    
    while (temp>0){
        let digito = temp%10
        console.log(`${temp} % 10 = ${digito} `)
        invertido = (invertido*10)+digito
        temp = Math.floor(temp/10)
    }

   if (num==invertido){
    console.log(`O número ${num} é palíndromo`)
   } else {
    console.log(`O número ${num} não é palíndromo`)
   }
}

numeroPalindromo(12321)
numeroPalindromo(10102)