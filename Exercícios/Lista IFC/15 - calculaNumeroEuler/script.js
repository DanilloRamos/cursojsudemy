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

function calculaSerieEuler(x){
    
    let euler = 0

    for (let i=0; i<30; i++){
        euler += Math.pow(x,i)/calculaFatorial(i)
    }

    return euler
}

function main(){
    let x = parseInt(prompt('Informe o valor de x: '))

    while (isNaN(x) || x<0) {
        x = parseInt(prompt('Valor de x inválido. Informe um valor de x válido: '))
    }

    console.log(`Valor do número de Euler: ${calculaSerieEuler(x)}`)
}

main()