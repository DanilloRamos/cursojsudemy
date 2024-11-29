function adicionarPropriedade(string,chave,valor){
    const obj = JSON.parse(string)
    obj[chave]=valor
    return obj
}

const string = '{"nome":"Danillo","idade":"37"}'
console.log(adicionarPropriedade(string,"profissao","servidore público"))