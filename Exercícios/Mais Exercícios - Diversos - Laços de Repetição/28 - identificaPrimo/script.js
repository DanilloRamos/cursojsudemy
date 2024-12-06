function identificaPrimo (num){
    
    let isPrimo = true
    let divisores = []

    for (let i=2;i<num;i++) {
        if (num%i === 0){
            isPrimo = false
            divisores.push(i)
        }
    }

    if (isPrimo){
        console.log(`${num} é primo`)
    } else {
        console.log(`${num} não é primo. Seus divisores são ${divisores.join(",")}`)
    }
}

identificaPrimo(125)
identificaPrimo(77)
identificaPrimo(101)