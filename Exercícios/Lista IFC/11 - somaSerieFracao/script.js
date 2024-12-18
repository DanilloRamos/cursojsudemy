function somaSerieCemTermosFracao () {
    let soma = 0

    for (let i=1;i<=100;i++){
        soma += (1/i)
    }

    return soma.toFixed(2)
}

function main(){
    console.log(`Soma da série 1+ 1/2 + 1/3 + 1/4 +...+ 1/100 = ${somaSerieCemTermosFracao()}`)    
}

main()