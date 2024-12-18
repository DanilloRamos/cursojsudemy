function somaSerieCemTermos () {
    let soma = 0

    for (let i=1;i<=100;i++){
        soma += i
    }

    return soma
}

function main(){
    console.log(`Soma da série 1+2+3+4+...+100 = ${somaSerieCemTermos()}`)    
}

main()