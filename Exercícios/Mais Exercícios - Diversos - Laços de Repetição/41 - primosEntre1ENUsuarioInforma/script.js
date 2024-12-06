function primosEntreUmEN(num){
    
    let primos = []

    for (let i=2;i<=num;i++){
        
        let primo = true
        
        for (let j=2;j<=Math.sqrt(i);j++){
            if (i%j===0){
                primo = false
                break
            }
        }

        if (primo){
            primos.push(i)
        }
    }

    console.log(`Primos entre 1 e ${num}: ${primos.join(',')}`)
}

primosEntreUmEN(10)
primosEntreUmEN(125)