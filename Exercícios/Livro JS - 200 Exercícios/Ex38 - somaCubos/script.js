function somaCubosNaturais(){
    let i = 1
    let soma = 0
    
    do {
        soma += Math.pow(i,3)
        console.log(`${i}³ = ${Math.pow(i,3)}`)
        i++
    }while(i<=10)

        console.log(`A soma é ${soma}`)
}

somaCubosNaturais()