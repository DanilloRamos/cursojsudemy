function calculaDivida (valor, parcelas){
    
    let juros
    let valorParcela
    const formatarReais = (valor) => `R$ ${valor.toFixed(2)}`
    const parcelasValidas = [1,3,6,9,12]

    while(true){
        if (!parcelasValidas.includes(parcelas)){
            parcelas = parseInt(prompt(`Número de parcelas inválido. Digite um número de parcelas válido `))
            //if (parcelasValidas.inc)
        } else {
            break
        }
    }

    console.log('Valor da dívida'.padEnd(20)+
'Valor dos juros'.padEnd(20)+
'Quantidade de Parcelas'.padEnd(25)+
'Valor da Parcela')

    for (let i=1;i<parcelas;i++){
        if (parcelas===1){
            valorParcela = valor
            juros = 0
            console.log(`${formatarReais(valor).padEnd(20)} ${formatarReais(juros).padEnd(20)} ${String(parcelas).padEnd(25)} ${formatarReais(valorParcela)}`)
            break
        }

        if (parcelas===3){
            juros = valor*0.1
            valorParcela = Math.floor((valor+juros)/parcelas)
            console.log(`${formatarReais(valor).padEnd(20)} ${formatarReais(juros).padEnd(20)} ${String(parcelas).padEnd(25)} ${formatarReais(valorParcela)}`)
            break
        }

        if (parcelas===6){
            juros = valor*0.15
            valorParcela = Math.floor((valor+juros)/parcelas)
            console.log(`${formatarReais(valor).padEnd(20)} ${formatarReais(juros).padEnd(20)} ${String(parcelas).padEnd(25)} ${formatarReais(valorParcela)}`)
            break
        }

        if (parcelas===9){
            juros = valor*0.2
            valorParcela = Math.floor((valor+juros)/parcelas)
            console.log(`${formatarReais(valor).padEnd(20)} ${formatarReais(juros).padEnd(20)} ${String(parcelas).padEnd(25)} ${formatarReais(valorParcela)}`)
            break
        }

        if (parcelas===12){
            juros = valor*0.25
            valorParcela = Math.floor((valor+juros)/parcelas)
            console.log(`${formatarReais(valor).padEnd(20)} ${formatarReais(juros).padEnd(20)} ${String(parcelas).padEnd(25)} ${formatarReais(valorParcela)}`)
            break
        }
    }
}

calculaDivida(1000,3)