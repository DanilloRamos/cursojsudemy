function somaCallback(array, callback){
  return array.map(callback).reduce((a,b)=>a+b,0)
}

let array=[1,2,3,4,5]
let callback = num => num*2

console.log(somaCallback(array,callback))