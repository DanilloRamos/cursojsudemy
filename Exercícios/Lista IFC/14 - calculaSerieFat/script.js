function calculaFatorial (n) {

    let fat = 1

    for (let i=1;i<=n;i++){
        if (n===0){
            fat = 1
            break
        } else {
            fat *= i
        }
    }

    return fat
}

function calculaSerie(){
    
    let soma = 0
    let numerador = 100

    for (let i=0;i<20;i++){
        soma += (numerador/calculaFatorial(i))
    }

    return soma
}

function main(){
    console.log(`Valor dos 20 primeiros termos da série: ${calculaSerie()}`)
}

main()