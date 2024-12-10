function exibeMenu(){
    console.log('Menu')
    console.log('1 - Converter Celsius para Farenheit')
    console.log('2 - Converte Farenheit para Celsius')
    console.log('3 - Exibe resultados')
    console.log('4 - Sair')
}

function converteCelsiusFarenheit(tempCelsius){
    let tempFarenheit = (tempCelsius*1.8)+32

    return tempFarenheit
}

function converteFarenheitCelsius(tempFarenheit){
    let tempCelsius = (tempFarenheit-32)*1.8

    return tempCelsius
}

function chamaFuncaoConversao(){

    let conversoes = []

    while (true){
        
        exibeMenu()

        let opcao = parseInt(prompt(`Digite a opção desejada: `))

         while (opcao<=0 || opcao>4){
             opcao = parseInt(prompt(`Opção inválida. Digite uma opção válida: `))
        }

        if (opcao === 1){
            let tempCelsius = parseFloat(prompt('Informe a temperatura em Celsius: '))
            conversoes.push(`${tempCelsius}º C = ${converteCelsiusFarenheit(tempCelsius).toFixed(2)} ºF`)
        } else if (opcao === 2){
            let tempFarenheit = parseFloat(prompt('Informe a temperatura em Farenheit: '))
            conversoes.push(`${tempFarenheit}º F = ${converteCelsiusFarenheit(tempFarenheit).toFixed(2)} ºC`)
        } else if (opcao === 3){
            //alert('Resultado das conversões:')
            alert(conversoes.length ? conversoes.join(`\n`):'Nenhuma conversão realizada')
        } else if(opcao === 4){
            console.log('Encerrando...')
            break
        }
    }
}

chamaFuncaoConversao()

