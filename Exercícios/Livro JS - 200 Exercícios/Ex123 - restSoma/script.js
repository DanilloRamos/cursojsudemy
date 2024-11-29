function soma (...nums){
    return nums.reduce((atual,prox)=>atual+prox,0)
}

console.log(soma(1,2,3,4))
console.log(soma(5,5,10))