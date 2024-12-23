function isEven(x){
    //devolve true se x for múltiplo de 2

    console.log(x)

    return x%2===0 ? true:false
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//método every - itera por todos os elementos até a função devolver false
console.log('Every:')
numbers.every(isEven)

//método some - oposto ao every - itera pelos elementos até que a função devolva true
console.log('Some:')
numbers.some(isEven)

//método forEach - itera por cada elemento de acordo com a função passada
console.log('For each:')
numbers.forEach(x=>console.log(x%2===0))

//método map - 
const myMap = console.log(`Map: ${numbers.map(isEven)}`)

//método filter
const evenNumbers = console.log(`Filter: ${numbers.filter(isEven)}`)

//método reduce
const sum = console.log(`Reduce: ${numbers.reduce((anterior, atual) => anterior+atual, 0)}`)

//laço for...of
console.log('Laço for...of')
for (const n of numbers){
    console.log(n%2===0? 'even':'odd')
}

//objeto @@iterator
console.log('Objeto @@iterator:')
iterator = numbers[Symbol.iterator]()
for (const n of iterator){
    console.log(n)
}

//método entries - devolve um @@iterator com par [chave, valor]
console.log('Método entries')
let aEntries = numbers.entries()
for (const n of aEntries){
    console.log(n)
}

//método keys - devolve um @@iterator com a chave
console.log('Método Keys')
const aKeys = numbers.keys()
for (const n of aKeys){
    console.log(n)
}

//método values - retorna um @@iterator com os valores do array
console.log('Método values')
const aValues = numbers.values()
for (const n of aValues){
    console.log(n)
}

//método from - cria outro array a partir de um já existente
let numbers2 = Array.from(numbers)
let evens = Array.from(numbers, x => (x%2===0))
console.log('Método from, retornando um array com true quando o número for par: '+evens.join(', '))

//método Array.of - devolve outro array a partir dos argumentos passados para o método
let numbers3 = Array.of(1)
let numbers4 = Array.of(1,2,3,4,5,6)
let numbersCopy = Array.of(...numbers4)

//método fill - preenche o array com um valor
numbersCopy.fill(0)
console.log(numbersCopy.join(', '))
numbersCopy.fill(2,1) //preenche o array com 2, a partir da posição 1
console.log(numbersCopy.join(', '))
numbersCopy.fill(1,3,5) //preenche o array com 1, da posição 3 à posição 5 (não inclusiva)
console.log(numbersCopy.join(', '))
let ones = Array(6).fill(1) //cria um array de tamanho 6 e preenche com 1
console.log(ones.join(', '))

//método copyWithin - copia uma sequência de valores do array para a posição de um índice de início
let copyArray = [1,2,3,4,5,6]
copyArray.copyWithin(0,3)
console.log(copyArray.join(', '))

//método reverse - inverte a ordem do array
console.log(numbers.reverse())

//método sort - ordena o array
numbers.reverse()
console.log(numbers.sort((a,b)=>a-b))