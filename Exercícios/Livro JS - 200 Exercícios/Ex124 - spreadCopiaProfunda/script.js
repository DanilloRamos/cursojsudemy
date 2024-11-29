function copiaProfunda(obj){
    return {...obj} //operador spread
}

const original = {nome:'Danillo', idade:37}
const copia = copiaProfunda(original)

console.log(copia)
original.nome = 'João'
console.log(copia.nome)
console.log(original.nome)