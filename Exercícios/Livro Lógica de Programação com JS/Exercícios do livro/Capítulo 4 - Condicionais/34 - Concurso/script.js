const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const concurso = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.inCandidato.value
    const acertos = Number(frm.inAcerto.value)

    concurso.push({nome, acertos})

    frm.inCandidato.value = ''
    frm.inAcerto.value = ''
    frm.inCandidato.focus()

    let lista = ''

    for (const candidato of concurso) lista += `${candidato.nome} - ${candidato.acertos} acertos\n`

    resp.innerText = lista

    frm.btListar.dispatchEvent(new Event('click'))
})

frm.btAprovados.addEventListener('click', (e) => {
    e.preventDefault()

   let aprovacao = Number(prompt('Número de acertos para aprovação?'))

   const aprovados = concurso.filter(candidato => candidato.acertos >= aprovacao).sort((a, b) => b.acertos - a.acertos)

   let lista = ''

   for (const candidato of aprovados) lista += `${candidato.nome} - ${candidato.acertos} acertos\n`

   resp.innerText = lista
})

frm.btLimpar.addEventListener('click', (e) => {
    e.preventDefault()

    resp.innerText = ''
    concurso = []

})