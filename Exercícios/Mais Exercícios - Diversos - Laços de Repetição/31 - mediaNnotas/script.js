function calculaMediaNNotas(qtdNotas){
    let somaNotas = 0
    let contaNota = 0

    for (let i=0;i<qtdNotas;i++){
        let entrada = prompt(`Informe a nota ${i+1}: `)
        let nota = parseFloat(entrada)

        somaNotas += nota
        contaNota++
    }

    console.log(`Média de ${contaNota} notas = ${(somaNotas/contaNota).toFixed(2)}`)
}

calculaMediaNNotas(4)