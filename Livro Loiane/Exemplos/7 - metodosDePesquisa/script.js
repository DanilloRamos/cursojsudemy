let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//método indexOf - devolve o índice do primeiro elemento pesquisado
console.log(numbers.indexOf(10))
console.log(numbers.indexOf(100))

//método lastIndexOf - devole o índice do último elemento encontrado
console.log(numbers.lastIndexOf(10))
console.log(numbers.lastIndexOf(100))

//método find - recebe função de callback e devolve o primeiro valor que satisfaça a condição proposta
//método findIndex - semelhante ao find, deolve o índice do elemento
function multipleOf13(element, array, index) {
    return(element % 13 === 0)
}
console.log(numbers.find(multipleOf13))
console.log(numbers.findIndex(multipleOf13))

//método includes - devolve true se o elemento for encontrado no array e false caso não seja
console.log(numbers.includes(15))
console.log(numbers.includes(20))

//no método includes, é possível passar um índice de início da pesquisa:
let numbers2 = [7,6,5,4,3,2,1]
console.log(numbers2.includes(4,5))