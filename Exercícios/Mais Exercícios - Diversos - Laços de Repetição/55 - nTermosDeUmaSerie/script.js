function serieS(){
    
    let denominador = 1
    let numerador = 1
    let soma = 0
    let resultado = 'S = '

    let termoFinal = parseInt(prompt(`Digite um inteiro positivo maior que 0 que indique o termo final da série: `))

    while (termoFinal<=0 || isNaN(termoFinal)){
        termoFinal = parseInt(prompt('Termo final inválido. Por favor, digite um número inteiro positivo maior que 0: '))
    }

    for (let i=1;i<=termoFinal;i++){
        resultado += `${numerador}/${denominador}`
        //console.log(`${numerador}/${denominador} = ${numerador/denominador}`)
        soma += numerador/denominador
        //console.log(`Soma ${i}: ${soma}`)
        numerador++
        denominador += 2

        if (i<termoFinal){
            resultado += ' + '
        }
    }
    
    console.log(resultado)
    console.log(soma.toFixed(2))
}

serieS()