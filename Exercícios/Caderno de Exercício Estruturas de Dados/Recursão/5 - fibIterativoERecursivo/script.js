function fibIterativo(n) {
    let f1 = 0
    let f2 = 1
    let f3 = 0
    let contSomas = 0

    for (let i=2; i<=n; i++){
        f3 = f1+f2
        contSomas++
        f1 = f2
        f2 = f3
    }

    return contSomas
}

function fibRecursivo(n){
    
    if (n<=1) return {valor: 1, somas: 0}

    let fib1 = fibRecursivo(n-1)
    let fib2 = fibRecursivo(n-2)

    let valorAtual = fib1.valor + fib2.valor
    let totalSomas = fib1.somas + fib2.somas + 1

    return {valor: valorAtual, somas: totalSomas}
}
    
console.log(`Somas iterativas: ${fibIterativo(5)}`)
console.log(`Somas recursivas: ${fibRecursivo(5).somas}`)
