function extrairCidade(usuario){
    const {endereco: {cidade}} = usuario
    return cidade
}

const usuario = {nome:"Danillo", endereco:{rua:"Rua Um", numero:8, cidade:"Lagarto"}}
console.log(extrairCidade(usuario))