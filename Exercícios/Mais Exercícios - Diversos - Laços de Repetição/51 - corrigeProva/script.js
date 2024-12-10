function corrigeProva(){
   
    const gabarito = ['A','B','C','D','E','E','D','C','B','A']

    let totalAlunos = 0
    const maiorAcerto = -Infinity
    const menorAcerto = Infinity
    let totalAcertos = 0
    let mediaTurma = 0

    let respostas = {
        1:'',
        2:'',
        3:'',
        4:'',
        5:'',
        6:'',
        7:'',
        8:'',
        9:'',
        10:''
    }

    while (true){

        let resposta = null
        let acertos = 0

        for (let i=0;i<10;i++){
            resposta = prompt(`Digite a resposta da Questão ${i+1}: `)
            
            while (!gabarito.includes(resposta.toUpperCase())){
                resposta = prompt(`Resposta inválida. Por favor, digite uma resposta válida para a Questão ${i+1}`)
            }

            if (resposta.toUpperCase()===gabarito[i]){
                acertos++               
            }
        }

        totalAcertos += acertos
        let continuar = prompt('Deseja continuar utilizando o sistema? (s/n): ')

        if (continuar.toUpperCase()==='N'){
            console.log(`Total de acertos: ${totalAcertos}`)
            break
        }
    }    
}

corrigeProva()