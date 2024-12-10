function corrigeProva(){
   
    const gabarito = ['A','B','C','D','E','E','D','C','B','A']

    let totalAlunos = 0
    let maiorAcerto = -Infinity
    let menorAcerto = Infinity
    let totalAcertos = 0
    let mediaTurma = 0

    
    while (true){

        let resposta = null
        let acertos = 0
        totalAlunos++

        for (let i=0;i<10;i++){
            resposta = prompt(`Digite a resposta da Questão ${i+1}: `)
            
            while (!gabarito.includes(resposta.toUpperCase())){
                resposta = prompt(`Resposta inválida. Por favor, digite uma resposta válida para a Questão ${i+1}`)
            }

            if (resposta.toUpperCase()===gabarito[i]){
                acertos++               
            }

            if (acertos>maiorAcerto){
                maiorAcerto = acertos
            }

            if (acertos<menorAcerto){
                menorAcerto = acertos
            }

        }

        totalAcertos += acertos
        let continuar = prompt('Deseja continuar utilizando o sistema? (s/n): ')

        if (continuar.toUpperCase()==='N'){
            console.log(`Total de acertos: ${totalAcertos}`)
            console.log(`Total de alunos que utilizaram o sistema: ${totalAlunos}`)
            console.log(`Média de notas da turma: ${(totalAcertos/totalAlunos).toFixed(2)}`)
            break
        }
    }    
}

corrigeProva()