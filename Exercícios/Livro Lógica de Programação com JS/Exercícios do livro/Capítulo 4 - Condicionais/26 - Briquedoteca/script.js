const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const criancas = []

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    criancas.push({nome,idade})

    frm.inNome.value = ''
    frm.inIdade.value = ''

    frm.inNome.focus()

    frm.btTodos.dispatchEvent(new Event('click')) //dispara um evento de click no botão selecionado
})

frm.btTodos.addEventListener("click", (e) => {
    e.preventDefault()

    if (criancas.length === 0) {
        alert("Não existem crianças cadastradas")
        return
    }

    const lista = criancas.reduce((acum, crianca) =>
        acum + crianca.nome + ' - '+ crianca.idade + ' anos\n',''
    )

    resp.innerText = lista
})

frm.btResumir.addEventListener("click", (e) => {
    
    e.preventDefault()

    const qtde = criancas.length
    
    if (criancas.length === 0) {
        alert("Não existem crianças cadastradas")
        return
    }

    const copia = [...criancas]
    copia.sort(a, b => a.idade - b.idade) //ordena pela idade
    let resumo = ``

    let aux = copia[0].idade //menor idade do vetor ordenado
    let nomes = [] //para os nomes de cada idade

    for (const crianca of copia) { //
        const {nome, idade} = crianca

        if (idade === aux){
         nomes.push(nome)
        } else {
            resumo += aux + ' ano(s): '+ nomes.length + ' criança(s) - '
            resumo += ((nomes.length/copia.length)*100).toFixed(2) + `%\n`
            resumo += '(' + nomes.join(', ') + ')\n\n'
            aux = idade //nova idade na ordem
            nomes = [] //limpa o vetor de nomes
            nomes.push(nome)
        }
    }

    //adiciona a última criança
    resumo += aux + ' ano(s): '+ nomes.length + ' criança(s) - '
    resumo += ((nomes.length/copia.length)*100).toFixed(2) + `%\n`
    resumo += '(' + nomes.join(', ') + ')\n\n'
    resp.innerText = resumo
})
