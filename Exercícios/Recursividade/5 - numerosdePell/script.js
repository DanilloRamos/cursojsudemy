function numeroDePell(termo){
    if (termo === 0){
        return 0
    }

    if (termo === 1){
        return 1
    }

    return 2 * numeroDePell(termo-1) + numeroDePell(termo-2)
}

console.log(numeroDePell(10))