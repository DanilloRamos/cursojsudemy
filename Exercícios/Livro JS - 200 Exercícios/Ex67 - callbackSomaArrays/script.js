function somaArraysCallback(array, callback){
  return array.map(callback)
}

let array=[[1,2,3], [4,5,6],[7,8,9]]
let callback = arr => arr.reduce((a,b)=>a+b,0)
console.log(somaArraysCallback(array,callback))