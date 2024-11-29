function filtrarPropriedade(obj){
    return JSON.stringify(obj, ['nome', 'idade'])
}

const dados ={
    nome:"Danillo",
    senha:"12345",
    idade:37
}

console.log(filtrarPropriedade(dados))