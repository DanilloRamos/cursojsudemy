function calculaMedia(array){
    let soma = array.reduce((atual,prox) => atual + prox, 0)
    return (soma/array.length)
}

const array = [1,2,3,4,5,6]

console.log(`Média: ${calculaMedia(array)}`)