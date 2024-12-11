function verificaDigitosNumero(num){
    let digitos = num.toString().split('')

    return digitos.length
}


console.log(verificaDigitosNumero(1234))