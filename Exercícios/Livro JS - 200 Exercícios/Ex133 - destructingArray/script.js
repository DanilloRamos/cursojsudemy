function extrairValores(array){
    const [primeiro=null, segundo=null, terceiro=null] = array
    return [primeiro, segundo, terceiro]
}

let array = [1,2,3,4,5,6]
console.log(extrairValores(array))