function calculaFatorial (n) {

    let fat = 1

    for (let i=1;i<=n;i++){
        if (n===0){
            fat = 1
            break
        } else {
            fat *= i
        }
    }

    return fat
}

function main(){

   let n = parseInt(prompt('Informe um número N: '))

   while (n<0 || isNaN(n)) {
        n = parseInt(prompt('Valor de N inválido. Informe um número N válido: '))
   }

   console.log(`${n}! = ${calculaFatorial(n)}`)
}

main()