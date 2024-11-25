function extraiValorPropriedades(array, chave){
    return array.map(obj=>obj[chave])
}

const usuarios = [
    {nome:'Danillo',idade:37},
    {nome:'João', idade:28},
    {nome:'Maria', idade:34}
]

console.log(extraiValorPropriedades(usuarios,"nome"))
console.log(extraiValorPropriedades(usuarios,"idade"))