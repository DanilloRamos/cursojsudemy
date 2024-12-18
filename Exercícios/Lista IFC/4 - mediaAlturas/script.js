function mediaAlturas (alturas) {
    
    let media = 0
    const somaAlturas = (altura) => altura.reduce((a,b) => a+b,0)
    let total = (somaAlturas(alturas))

    console.log(`Média das alturas: ${(total/alturas.length).toFixed(2)}`)

}

function main(){
    const alturas = [1.7, 1.68,1.9 ,1.55 ,1.63]
    mediaAlturas(alturas)
}

main()