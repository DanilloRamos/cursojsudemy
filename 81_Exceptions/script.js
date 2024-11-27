function saudacao(nome){
    if (typeof nome != 'string'){
        throw new Error('Parâmetro nome precisa ser string')
    } else {
        console.log(`Olá ${nome}`)
    }
}

saudacao("Danillo")
saudacao(5)

console.log("teste")