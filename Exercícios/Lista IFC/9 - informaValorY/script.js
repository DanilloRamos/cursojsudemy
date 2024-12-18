function valoresDeY () {
    
    let x = 1

    while (x<=5){
        let y = (3+2*x+6*Math.pow(x,2))/(1+9*x+16*Math.pow(x,2))

        console.log(`Valor de y quando x = ${x.toFixed(2)} = ${y.toFixed(2)}`)

        x+=0.1
    }
}

function main(){
    valoresDeY()    
}

main()