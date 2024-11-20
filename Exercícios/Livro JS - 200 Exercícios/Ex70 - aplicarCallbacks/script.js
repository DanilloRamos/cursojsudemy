function aplicarCallBacks(n, callback){
  return callback.map(callback=>callback(n))
}

let callback = [num => num*2, num=>Math.pow(num,2), num=>num/2]
let n = 4

console.log(aplicarCallBacks(n,callback))
console.log(aplicarCallBacks(8,callback))