function serieH(limite){

    const numerador = 1
    let denominador = 1
    let somaSerie = 0

    let resultado = `H = `

    for (let i=1;i<=limite;i++){
        resultado += `${numerador}/${denominador}`
        somaSerie += numerador/denominador
        denominador++

        if (i<limite) resultado += ' + '
    }

    console.log(`${resultado} = ${somaSerie.toFixed(2)}`)
}

let limite = parseInt(prompt('Digite um número inteiro maior que 0 para definir o limite da série:'))

while(limite<=0){
    limite = parseInt(prompt('Limite inválido. Por favor, digite um número inteiro maior que 0 para definir o limite da série:'))
}

serieH(limite)