function trocaValores(a,b){
    return [a,b] = [b,a]
}

console.log('Antes da troca:')
let a = 2
console.log('a = '+a)
let b = 5
console.log(`b = ${b}`)

console.log("Após a troca:")
console.log(trocaValores(a,b))