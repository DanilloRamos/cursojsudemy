function converteDecimal(num){
    let soma = 0

    for (let i=num.length-1, j=0;i>=0;i--, j++){
        soma += parseInt(num[i])*Math.pow(2,j)
    }

    console.log(`O número informado é ${soma} em decimal`)
}

converteDecimal('110110')