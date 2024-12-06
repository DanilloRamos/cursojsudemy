function calculaMediaNIdades(qtdIdade){
    let somaIdades = 0
    let contaIdades = 0

    for (let i=0;i<qtdIdade;i++){
        let entrada = prompt(`Informe a idade ${i+1}: `)
        let idade = parseFloat(entrada)

        somaIdades += idade
        contaIdades++
    }

    let mediaIdades = somaIdades/contaIdades

    if (mediaIdades>=0 && mediaIdades<=25){
        console.log(`A turma é jovem. Média de idades: ${mediaIdades.toFixed(2)} anos`)
    } else if (mediaIdades>=26 && mediaIdades<=60) {
        console.log(`A turma é adulta. Média de idades: ${mediaIdades.toFixed(2)} anos`)
    } else {
        console.log(`A turma é idosa. Média de idades: ${mediaIdades.toFixed(2)} anos`)
    }
}

calculaMediaNIdades(4)