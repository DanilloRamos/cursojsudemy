const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const servico = frm.inServico.value

    if (verificarServico(servico)) {
        alert('Serviço já cadastrado!')
        frm.inServico.focus()
        frm.reset()
        return
    }


    //obtém a lista atual ou cria uma nova, se não existir
    let listaServicos = localStorage.getItem('servicos')
    listaServicos = listaServicos ? JSON.parse(listaServicos) : []

    listaServicos.push(servico)

    localStorage.setItem('servicos', JSON.stringify(listaServicos))
    frm.reset()
    frm.inServico.focus

})

verificarServico = (servico) => {
    if (localStorage.getItem('servico')) {
        const servicos = localStorage.getItem('servicos')

        return servicos.includes(JSON.stringify(servico))
    } else {
        return false
    }
}

mostrarServico = () => {
    const servicos = localStorage.getItem('servicos')
    let linhas = ''

    if (servicos) {
        const lista = JSON.parse(servicos)

        lista.forEach (produto => {
            linhas += `${servico}\n`
        })
    }

    resp.innerText = linhas || 'Nenhum serviço cadastrado'
}
