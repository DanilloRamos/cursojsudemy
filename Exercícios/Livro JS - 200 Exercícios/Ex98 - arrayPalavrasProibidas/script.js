function retiraPalavrasProibidas(arr1, arr2){
    return arr1.filter(palavraPermitida =>!arr2.includes(palavraPermitida))
}

let palavras = ['maça', 'banana', 'cherry', 'date']
let palavrasProibidas = ['banana', 'date']

console.log(retiraPalavrasProibidas(palavras, palavrasProibidas))