function somaQuadradosNaturais(){
    let soma = 0
    let i = 1

    while (i<=10){
        soma+=Math.pow(i,2)
        console.log(`${i}² = ${Math.pow(i,2)}`)
        i++
    }

    console.log(`A soma é ${soma}`)
}

somaQuadradosNaturais()