function alteraEConverte(obj){
    const alteraValor = (chave,valor) => {
        if (chave==="idade"){
            return valor+=1
        }
        return valor
    }

    return JSON.stringify(obj,alteraValor)
}

const dados = {
    nome:'Danillo',
    idade:36
}

console.log(alteraEConverte(dados))