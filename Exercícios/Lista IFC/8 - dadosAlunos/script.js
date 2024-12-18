function levantamentoAtletas (...dadosAlunos) {
    let contMaiores = 0
    let contAcimaVinte = 0

    for (let i=0;i<dadosAlunos.length;i++){
        if (dadosAlunos[i].idade === 18){
            contMaiores++
        }
        if (dadosAlunos[i].idade >= 20){
            contAcimaVinte++
        }
    }

    console.log(`${contMaiores} alunos possuem 18 anos de idade`)
    console.log(`${contAcimaVinte} alunos possuem acima de 20 anos de idade`)
}

function main(){
    
    let dadosAlunos = []

    while (true){

        let aluno = {}

        aluno.nome = prompt('Informe o nome do aluno: ')

        if (aluno.nome===''){
            break
        }

        aluno.idade = parseInt(prompt('Informe a idade do aluno: '))

        dadosAlunos.push(aluno)
    }

    levantamentoAtletas(...dadosAlunos)

}

main()