function verificaNumero(num){
    if (num>0){
        console.log(`${num} é positivo`)
    } else if (num<0) {
        console.log(`${num} é negativo`)
    } else {
        console.log(`Zero!`)
    }
}

verificaNumero(-7)
verificaNumero(0)
verificaNumero(7)