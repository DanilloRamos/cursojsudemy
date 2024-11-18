function verificaIntervalo(num,limInf,limSup){
    if (num>=limInf && num<=limSup){
        console.log(`${num} está dentro do intervalo informado`)
    } else {
        console.log(`${num} está fora do intervalo informado`)
    }
}

verificaIntervalo(5,2,10)
verificaIntervalo(8,2,7)