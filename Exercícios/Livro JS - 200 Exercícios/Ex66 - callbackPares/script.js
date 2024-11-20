function achaParesCallback(array, callback){
  return array.filter(callback)
}

let array=[1,2,3,4,5]
let callback = num =>num%2===0

console.log(achaParesCallback(array,callback))