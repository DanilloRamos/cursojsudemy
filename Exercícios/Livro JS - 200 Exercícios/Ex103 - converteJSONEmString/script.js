function converteJSON(obj){
    return JSON.stringify(obj)
}

const objTeste = {
    nome:"Danillo",
    idade:37
}

console.log(converteJSON(objTeste))