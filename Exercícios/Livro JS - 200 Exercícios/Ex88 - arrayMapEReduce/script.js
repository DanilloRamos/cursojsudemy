function aplicarImposto(precos){
    return precos.map(precos=>precos*1.1).reduce((soma,elem)=>soma+elem,0)
}

const precos = [10,20,30,40]
console.log(aplicarImposto(precos))
