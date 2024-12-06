function primosEntreUmEN(num){
    let primos = []
    let contDiv = 0

    for(let i=2;i<=num;i++){
        let isPrimo = true
        for(let j=2;j<=Math.sqrt(i);j++){
            contDiv++
            if (i%j===0){
                isPrimo = false
                break
            }
        }

        if(isPrimo){
            primos.push(i)
        }
    }

    console.log(`Primos entre 1 e ${num}: ${primos.join(", ")}`)
    console.log(`Total de divisões realizadas para encontrar os primos no intervalo definido: ${contDiv}`)
}

primosEntreUmEN(10)