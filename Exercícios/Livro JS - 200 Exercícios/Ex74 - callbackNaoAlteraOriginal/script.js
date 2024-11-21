function mapearSemAlterar(callback, array){
  return array.map(callback)
}

let callback = num =>num*2
let array = [1,2,3,4,5]

console.log(mapearSemAlterar(callback, array))
console.log(array)

