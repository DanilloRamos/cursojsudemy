function escritaDaCaneta (tinta) {
    let contLinhas = 0
    
    while(tinta>0.02){
        //console.log('Enquanto tem tinta, a caneta escreve...')
        tinta -= tinta*0.02
        contLinhas++
    }

    console.log(`Linhas escritas: ${contLinhas}`)
}

function main(){
    let tinta = parseFloat(prompt('Informe a quantidade de tinta na caneta: '))

    while(isNaN(tinta)){
        tinta = parseFloat(prompt('Quantidade inválida. Informe uma quantidade válida de tinta na caneta: '))
    }

    escritaDaCaneta(tinta)
}

main()