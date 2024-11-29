function extraiValores(array){
    const [[,valor1], [valor2]] = array
    return[valor1, valor2]
}

console.log(extraiValores([[1,2,3,4],[5,6,7]]))