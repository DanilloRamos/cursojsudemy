function eleicaoPresidencial(){
    
    const totalCandidatos = {
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    }

    const votosValidos = [1,2,3,4,5,6]

    let totalVotos = 0

    while (true){
        let voto = parseInt(prompt('Informe o código do candidato desejado ou 0 para encerrar: '))

        if (voto === 0) break

        while (!votosValidos.includes(voto)){
            voto = parseInt(prompt('Código inválido. Informe um código válido ou 0 para encerrar: '))
        }

        totalCandidatos[voto]++
        totalVotos++
    }

    console.log('Resultados da eleição presidencial:')
    console.log('')

    console.log(`Total geral de votos: ${totalVotos}`)

    for (const[voto, total] of Object.entries(totalCandidatos)) {
            let descricao
            switch(parseInt(voto)){
                case 1: descricao = 'José'; break
                case 2: descricao = 'João'; break
                case 3: descricao = 'Maria'; break
                case 4: descricao = 'Carlos'; break
                case 5: descricao = 'Nulo'; break
                case 6: descricao = 'Branco'; break
            }

            console.log(`${descricao}: ${total} votos`)
    }

    if (totalVotos>0){
        console.log(`Percentual de votos nulos: ${(100*totalCandidatos[5]/totalVotos).toFixed(1)}%`)
        console.log(`Percentual de votos brancos: ${(100*totalCandidatos[6]/totalVotos).toFixed(1)}%`)
    } else {
        console.log('Nenhum voto foi registrado')
    }
}

eleicaoPresidencial()