function contabilizaVotos(totalEleitores){
    
    let votosCandidato1 = 0
    let votosCandidato2 = 0
    let votosCandidato3 = 0
    let votosNulos = 0
    let votosBrancos = 0

    for (let i=0;i<totalEleitores;i++){
        let voto = prompt('Informe o número do candidato (1/2/3):')
        let x = parseInt(voto)

        if (x>3){
            alert('Candidato inexistente. Seu voto será anulado')
            votosNulos++
            continue
        }

        if (x===0){
            alert('Voto em branco')
            votosBrancos++
            continue
        }

        if (x===1){
            votosCandidato1++
            continue
        } else if (x===2){
            votosCandidato2++
            continue
        } else {
            votosCandidato3++
            continue
        }
    }

    console.log('Resultado final:')
    console.log(`Candidato 1: ${votosCandidato1} votos`)
    console.log(`Candidato 2: ${votosCandidato2} votos`)
    console.log(`Candidato 3: ${votosCandidato3} votos`)
    console.log(`Votos nulos: ${votosNulos}`)
    console.log(`Votos em branco: ${votosBrancos}`)
}

contabilizaVotos(10)