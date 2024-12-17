function atravessandoARua(posInicial,posFinal,distanciaDoPasso) {
    
    let passos = posInicial

    while (posInicial<posFinal) {
        posInicial += distanciaDoPasso
        passos++
    }

    return passos
}


let posInicial = parseInt(prompt('Informe a posição inicial: '))
let posFinal = parseInt(prompt('Informe a posição final: '))
let distanciaDoPasso = parseInt(prompt('Informe a distância do passo: '))

while(isNaN(posInicial) || isNaN(posFinal) || posInicial>posFinal || isNaN(distanciaDoPasso)){
    if (isNaN(posInicial)){
        posInicial = parseInt(prompt('Valor da posição inicial inválido. Informe um valor válido para a posição inicial: '))        
    } else if (isNaN(posFinal)) {
        posFinal = parseInt(prompt('Valor da posição final inválido. Informe um valor válido para a posição final: '))        
    } else if (posInicial>posFinal) {
        console.log('Posição inicial não pode ser maior que a posição final. Informe novamente os valores')
        posInicial = parseInt(prompt('Informe a posição inicial: '))
        posFinal = parseInt(prompt('Informe a posição final: '))
    } else if (isNaN(distanciaDoPasso)) {
        distanciaDoPasso = parseInt(prompt('Valor inválido para a distância do passo. Informe um valor válido para a distância do passo: '))
    }
}

console.log(`São necessários ${atravessandoARua(posInicial,posFinal,distanciaDoPasso)} passos para atravessar a rua`)