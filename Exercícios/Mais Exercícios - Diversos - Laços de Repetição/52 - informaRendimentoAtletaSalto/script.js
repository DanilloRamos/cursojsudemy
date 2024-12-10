function informaRendimentoAtleta(){
    
    let rendimentoFinal = 0
    let melhorSalto = -Infinity
    let piorSalto = Infinity
    let somaSaltos = 0
    let saltos = []


    while (true){
        
        let nome = prompt('Informe seu nome: ')
        let salto

        if (nome === ''){
            break
        }

        for (let i=1; i<=5; i++){
            salto = parseFloat(prompt(`Digite a distância do ${i}º salto: `))
            saltos.push(salto)
            
            if (salto>melhorSalto){
                melhorSalto = salto
            }

            if (salto<piorSalto){
                piorSalto = salto
            }

            somaSaltos += salto
        }

            rendimentoFinal = ((somaSaltos-melhorSalto-piorSalto)/3).toFixed(1)
            console.log(`Atleta: ${nome}`)

            saltos.forEach((pulo, indice) => {
                console.log(`${indice+1}º Salto: ${pulo} m`)
            })
            console.log('')
            console.log(`Melhor salto: ${melhorSalto} m`)
            console.log(`Pior salto: ${piorSalto} m`)
            console.log('')
            console.log(`Resultado final:`)
            console.log(`${nome}: ${rendimentoFinal} m`)
    }
}

informaRendimentoAtleta()