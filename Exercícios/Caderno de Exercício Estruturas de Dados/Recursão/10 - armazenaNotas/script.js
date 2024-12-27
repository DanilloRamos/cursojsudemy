function cadastraAlunos(){
    let cadastro = []

    let somaNotas = 0
    let contAcimaMedia = 0
    let contAbaixoMedia = 0
    let contIgualMedia = 0
    let maiorNota = -Infinity
    let contAlunosMaiorNota = 0

    let mediaTurma = 0

    let alunos = parseInt(prompt('Quantos alunos deseja cadastrar? (Limite: 30 alunos): '))

    while(isNaN(alunos) || alunos > 30){
        alunos = parseInt(prompt('Valor inválido. Por favor, informe novamente quantos alunos deseja cadastrar (Limite: 30 alunos):'))
    }

    for (let i=0; i<alunos; i++){

        let aluno = {}

        aluno.matricula = parseInt(prompt(`Informe a matrícula do aluno ${i+1}: `))
        while (isNaN(aluno.matricula) || aluno.matricula <= 0){
            aluno.matricula = parseInt(prompt(`Matrícula inválida. Por favor, informe uma matrícula para o aluno ${i+1}: `))
        }

        aluno.nota = parseFloat(prompt(`Digite a nota do aluno ${i+1}: `))
        while (isNaN(aluno.nota) || aluno.nota < 0){
            aluno.nota = parseFloat(prompt(`Nota inválida. Por favor, digite uma nota válida para o aluno ${i+1}: `))
        }

        somaNotas += aluno.nota

        if (aluno.nota > maiorNota){
            maiorNota = aluno.nota
            contAlunosMaiorNota = 1
        } else if (aluno.nota === maiorNota){
            contAlunosMaiorNota++
        }

        cadastro.push(aluno)
    }

    mediaTurma = somaNotas/alunos

    for (let i=0; i<cadastro.length; i++){
        if (cadastro[i].nota > mediaTurma){
            contAcimaMedia++
        } else if (cadastro[i].nota < mediaTurma) {
            contAbaixoMedia++
        } else {
            contIgualMedia++
        }
    }

    console.log(`Média da turma: ${mediaTurma.toFixed(2)}`)
    console.log(`${contAcimaMedia} alunos obtiveram notas acima da média`)
    console.log(`${contAbaixoMedia} alunos obtiveram notas abaixo da média`)
    console.log(`${contIgualMedia} alunos obtiveram notas iguais à média`)
    console.log(`${maiorNota} foi a maior nota, obtida por ${contAlunosMaiorNota} alunos`)
}

cadastraAlunos()