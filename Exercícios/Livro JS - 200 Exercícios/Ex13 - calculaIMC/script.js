function calculaIMC(peso,altura){
    let imc = peso/(Math.pow(altura,2))

    if (imc<18.5){
        console.log(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`)
    } else if (imc>=18.5 && imc<25){
        console.log(`Seu IMC é ${imc.toFixed(2)}. Você está em seu peso normal.`)        
    } else if (imc>=25 && imc < 30){
        console.log(`Seu IMC é ${imc.toFixed(2)}. Você está em sobrepeso.`)
    } else {
        console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com obesidade.`)
    }
}

calculaIMC(52,1.8)
calculaIMC(72,1.8)
calculaIMC(92,1.8)
calculaIMC(102,1.8)