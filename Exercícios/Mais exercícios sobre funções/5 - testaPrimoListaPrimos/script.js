function ehPrimo(num){
    let isPrimo = true

    for (let i=1;i<=num;i++){
        if (num%i===0){
            isPrimo = false
        }
    }

    if (isPrimo){
        console.log(`${num} é primo`)
    } else {
        console.log(`${num} não é primo`)
    }
}