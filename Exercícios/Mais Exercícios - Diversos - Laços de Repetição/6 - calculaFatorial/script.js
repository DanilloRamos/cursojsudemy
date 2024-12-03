function calculaFatorial(num){
    let fat = 1

    for (let i=1;i<=num;i++){
        fat*=i
    }

    return fat
}

console.log(calculaFatorial(5))