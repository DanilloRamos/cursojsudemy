function maiorString(nomes){
    return nomes.split(" ").reduce((maiorNome,nome)=>maiorNome.length>nome.length?maiorNome:nome,"")
}

const sentenca = "Essa frase tem muitas palavras, qual é a maior?"
console.log(maiorString(sentenca))