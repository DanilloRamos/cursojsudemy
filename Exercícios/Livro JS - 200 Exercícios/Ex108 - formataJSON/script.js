function formatarJSON(obj){
    return JSON.stringify(obj,null,2)
}

const dados ={
    nome:"Danillo",
    senha:"12345",
    idade:37
}

console.log(formatarJSON(dados))