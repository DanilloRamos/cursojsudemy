function renomearVariaveis(obj){
    const {a:alpha, b:beta} = obj
    return {alpha, beta}
}

const obj = {a:"valorA", b:"valorB"}
console.log(renomearVariaveis(obj))