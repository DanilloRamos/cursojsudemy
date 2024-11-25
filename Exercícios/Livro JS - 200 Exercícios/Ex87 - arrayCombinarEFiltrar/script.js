function combinarEFiltrar(pares, impares){
    return pares.concat(impares).filter(num=>num%5===0)
}

const pares = [2,10,12,14,20]
const impares = [5, 7, 15, 17, 19, 25]

console.log(combinarEFiltrar(pares, impares))
