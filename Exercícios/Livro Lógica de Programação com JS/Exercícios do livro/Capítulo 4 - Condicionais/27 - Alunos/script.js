const frm = document.querySelector("form")
const respTodos = document.querySelector("#todos")
const respMaior = document.querySelector('#maior')

const alunos = []

frm.addEventListener('submit', (e) => {

    e.preventDefault()
    
    const nome = frm.inNome.value
    const nota = Number(frm.inNota.value)

    alunos.push({nome, nota})

   frm.inNome.value = ''
   frm.inNota.value = ''

   frm.inNome.focus()

   frm.btTodos.dispatchEvent(new Event('click'))
})

frm.btTodos.addEventListener('click', (e) => {
    
    e.preventDefault()

    if (alunos.length === 0) {
        alert('Não há alunos cadastrados')
        return
    }

    const lista = alunos.reduce((acum, aluno) =>
        acum + aluno.nome + ' - ' + aluno.nota.toFixed(1) + `\n`, ''
    )
 
     respTodos.innerText = lista
})

frm.btDest.addEventListener('click', (e) => {
    
    e.preventDefault()
    
    const destaques = alunos.filter(aluno => aluno.nota >= 7)

    const listaDestaque = destaques.reduce((acum, destaque) =>
        acum + destaque.nome + ' - ' + destaque.nota.toFixed(1) + `\n`,''
    )

    respTodos.innerText = listaDestaque
})

frm.btMaiorNota.addEventListener('click', (e) => {
    e.preventDefault()

    const maiorNota = alunos.reduce((a,b) => Math.max(a, b.nota), 0)
    const destaques = alunos.filter(aluno => aluno.nota >= maiorNota)  

    const listaDestaque = destaques.reduce((acum, destaque) => 
        acum + destaque.nome + `\n`,''
    )

    respMaior.innerText = `Maior nota da turma: ${maiorNota.toFixed(1)}\n do(s) aluno(s): 
                            ${listaDestaque}`
})