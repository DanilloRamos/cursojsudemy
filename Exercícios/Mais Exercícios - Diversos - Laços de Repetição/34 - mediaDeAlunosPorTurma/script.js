function defineQtdeAlunosTurma(turmas){
    
    let alunos = 0
    let somaAlunos = 0


    for (let i=0;i<turmas;i++){

        while (true){

            let entrada = prompt(`Informe a quantidade de alunos da turma ${i+1}. As turmas devem ter no máximo 40 alunos:`)
            alunos = parseInt(entrada)

            if (!isNaN(alunos) && alunos<=40){
                somaAlunos += alunos
                break
            } else {
                alert('A quantidade informada é inválida ou superior a 40 alunos. Por favor, informe uma quantidade válida: ')
            }
        }
    }

    console.log(`Média de alunos por turma: ${(somaAlunos/turmas).toFixed(2)}`)
}

defineQtdeAlunosTurma(3)