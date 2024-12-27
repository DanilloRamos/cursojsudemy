function somaSubconjunto(inicio, array, totNumeros, soma){
    if (inicio >= totNumeros) return (soma === 0)
    
    //chamada recursiva para o caso de o início ser considerado
    if (somaSubconjunto (inicio+1, array, totNumeros, soma-array[inicio])) return true

    //chamada recursiva para o caso de o inísio não ser considerado
    if (somaSubconjunto(inicio+1, array, totNumeros, soma)) return true

    //se as tentativa acima falharem, não é possível obter a soma
    return false
}

let array = [2,4,8]
console.log(somaSubconjunto(0,array,3,10))
console.log(somaSubconjunto(0,array,3,14))
console.log(somaSubconjunto(0,array,3,9))