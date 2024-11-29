function extrairDadosPessoa(pessoa){
    const {nome, idade} = pessoa
    return `Nome: ${nome}, idade: ${idade}`
}

const pessoa = {
    nome:'João',
    idade: 22,
    cidade: "Aracaju"
}

console.log(extrairDadosPessoa(pessoa))