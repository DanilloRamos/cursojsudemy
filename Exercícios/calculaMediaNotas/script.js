function media(...notas) {
     
     const soma = (valores) => valores.reduce((a, b) => a+b,0)
     let total = (soma(notas))
     let media = total/notas.length

     return media.toFixed(2)
}

console.log(media(2,5,6,7,8))
console.log(media(10,8,7,9))