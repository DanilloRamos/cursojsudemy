//soma recursiva
function func(n){
    if (n===0){
        return 0
    }

    return n + (func(n-1))
}

console.log(`Soma Recursiva: ${func(5)}`)

//soma iterativa
function somaIterativa(n){
    
    let soma = 0

    while (n>0){
        soma += n
        n--
    }

    return soma
}

console.log(`Soma Iterativa: ${somaIterativa(5)}`)