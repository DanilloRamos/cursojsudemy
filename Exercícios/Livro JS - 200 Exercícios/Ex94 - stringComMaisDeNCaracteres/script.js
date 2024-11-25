function filtraArray (array, n){
    return array.filter(palavra => palavra.length>n)    
}

const palavras = ["apple","banana","cherry","date","elderberry"]
console.log(filtraArray(palavras,5))