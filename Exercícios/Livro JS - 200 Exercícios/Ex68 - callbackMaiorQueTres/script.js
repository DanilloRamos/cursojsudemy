function maioresQueTresCallback(array, callback){
  return array.filter(callback)
}

let array=[1,2,3,4,5,6,7,8,9]
let callback = a => a>3
console.log(maioresQueTresCallback(array,callback))