function calculaNotaGinasta(){
    
    let melhorNota = -Infinity
    let piorNota = Infinity
    let notas = []

    while (true){
        
        let notaJurados 
        let nomeAtleta = prompt(`Informe o nome do atleta: `)

        if (nomeAtleta===''){
            break
        }

        for (let i=1; i<=7; i++){
            notaJurados = parseFloat(prompt(`Jurado ${i}, atribua sua nota: `))
            notas.push(notaJurados)

            if(notaJurados>melhorNota){
                melhorNota = notaJurados
            }

            if (notaJurados<piorNota){
                piorNota = notaJurados
            }
        }
        
        let somaNotas = notas.reduce((a,b) => a+b, 0)
        let media = ((somaNotas-melhorNota-piorNota)/5).toFixed(1)

        console.log(`Atleta: ${nomeAtleta}`)

        notas.forEach((nota) => {
            console.log(`Nota: ${nota}`)
        })

        console.log('')
        console.log('Resultado Final:')
        console.log(`Atleta: ${nomeAtleta}`)
        console.log(`Melhor nota: ${melhorNota.toFixed(1)}`)
        console.log(`Pior nota: ${piorNota.toFixed(1)}`)
        console.log(`Média: ${media}`)

    }
}

calculaNotaGinasta()