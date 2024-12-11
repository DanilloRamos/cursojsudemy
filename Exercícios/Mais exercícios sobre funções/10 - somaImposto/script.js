function somaImposto(taxaImposto, custo){
    return custo += custo*(taxaImposto/100)
}

console.log(somaImposto(10,50))