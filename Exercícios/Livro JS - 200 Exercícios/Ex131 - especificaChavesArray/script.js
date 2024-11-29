function filtraPorChaves(arrayObjetos,chaves){
    return arrayObjetos.map(obj => {
        let novoObj = {}
        chaves.forEach(chave => {
            if (obj[chave]!==undefined)
                novoObj[chave] = obj[chave]
        })
        return novoObj
    })
}


const dados = [{nome:"Danillo", idade:37, cidade:"Lagarto"}, {nome:"Maria",idade:22,cidade:"Tobias Barreto"}]

console.log(filtraPorChaves(dados,["nome","cidade"]))