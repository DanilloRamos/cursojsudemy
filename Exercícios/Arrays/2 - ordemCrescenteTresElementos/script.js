function ordenaNumeros(arr){
    let [a,b,c] = arr

    if((a>b && a>c) && (c>b)){
        return [b,c,a]
    } else if (b>c) {
        return [a,c,b]
    }

    return[a,b,c]
}

function verificaTamanhoArray(arr){
    if (arr.length !== 3){
        console.log('O array deve ter tamanho 3')
    }
}

function main(){
    
    let arr = []
    let num

    for (let i=0;i<3;i++){
        num = parseInt(prompt(`Digite o ${i+1}º elemento`))
        arr.push(num)
    }

    while(verificaTamanhoArray(arr)){
        for (let i=0;i<2;i++){
            num = parseInt(prompt(`Digite o ${i+1}º elemento`))
            arr.push(num)
        }        
    }

    console.log(`Array ordenado: ${ordenaNumeros(arr)}`)
}

main()