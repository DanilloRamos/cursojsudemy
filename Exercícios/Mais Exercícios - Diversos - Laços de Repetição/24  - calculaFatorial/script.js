function calculaFatorial(num){
  let fat = 1

  for (let i=1;i<=num;i++){
    fat*=i
  }

  return fat
}


let num = 10
console.log(`${num}! = ${calculaFatorial(num)}`)