function retornaTipoDeDado(dado){
    return typeof(dado)
}

console.log("O dado informado é do tipo "+retornaTipoDeDado(20))
console.log("O dado informado é do tipo "+retornaTipoDeDado("a"))
console.log("O dado informado é do tipo "+retornaTipoDeDado(4>5))
