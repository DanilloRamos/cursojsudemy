function callbackInverso(callback, valor){
  return callback.reverse().map(callback=>callback(valor))
}

let callback = [num=>num*2, num=>num*num, num=> num/2]
let valor = 4

console.log(callbackInverso(callback, valor))
