function inicializaDado(min,max){
    return Math.floor(Math.random()*(max-min))+min
}

function lancaDado(){
    let contLancamentos = 0

    let contaFace = {
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    }

    for (let i=1;i<=1000000;i++){

        let dado = inicializaDado(1,6)

        contaFace[dado]++
        contLancamentos++
    }

    console.log(`Frequência de cada face em ${contLancamentos} lançamentos:`)

    Object.entries(contaFace).forEach(([face,quantidade]) => {
        console.log(`Face ${face}: ${quantidade} vezes`)
    })
}

lancaDado()