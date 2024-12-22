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

//método entries
console.log('Método entries')
let aEntries = numbers.entries()
for (const n of aEntries){
    console.log(n)
}