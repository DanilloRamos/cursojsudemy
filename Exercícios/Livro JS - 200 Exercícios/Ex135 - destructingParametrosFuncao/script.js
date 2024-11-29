function exibirInformacoes({nome, idade}){
    return `${nome} tem ${idade} anos`
}

const pessoa = {
    nome: "Danillo",
    idade: 37
}
console.log(exibirInformacoes(pessoa))