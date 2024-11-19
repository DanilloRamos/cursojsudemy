function calculaFatorial(num){
    let fat = 1

    for (let i=num;i>=1;i--){
        fat*=i
    }

    console.log(fat)
}

calculaFatorial(5)