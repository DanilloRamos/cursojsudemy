function calculaValorSPi (n) {

    let soma = 0

    for (let i=1;i<=n;i++){
        let termo = Math.pow(-1, (i+1))/Math.pow((2*i-1),3)
        soma += termo
    }

    let pi = Math.cbrt(soma*32)

    return pi
}

function main(){

   console.log(`Valor de PI para 51 termos da série = ${calculaValorSPi(51)}`)
}

main()