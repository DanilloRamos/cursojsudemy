const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const pend = document.querySelector('#pendente')
let listaExec = JSON.parse(localStorage.getItem('servicosExecutados')) || []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const servico = frm.inServico.value

    if (confereServico(servico)) {
        alert('Serviço já cadastrado!')
        frm.inServico.focus()
        frm.reset()
        return
    }

    //lista recebe o que está armazenado em localStorage    
    let lista = localStorage.getItem('servicos')
    //se a lista existir, converte seu conteúdo em String. 
    //se não existir, recebe um vetor vazio
    lista = lista ? JSON.parse(lista) : []

    lista.push(servico)
    localStorage.setItem('servicos', JSON.stringify(lista))

    

    //mostrarServicos()
    atualizarContagem()
    frm.inServico.focus()
    frm.reset()
})

function atualizarContagem () {
    const lista = JSON.parse(localStorage.getItem('servicos')) || []
    pend.innerText = `Serviços pendentes: ${lista.length}`
}

const confereServico = (servico) => {
    const lista = localStorage.getItem('servicos')

    if (!lista) return false

    const servicos = JSON.parse(lista)
    return servicos.includes(servico)
}

mostrarServicos = () => {
    const listaJSON = localStorage.getItem('servicos')

    if (!listaJSON) {
        resp.innerText = ''
        return
    }

    const listaServicos = JSON.parse(listaJSON)
    resp.innerText = listaServicos.join('\n')
}

frm.btLimpar.addEventListener('click', () => {
    if (confirm('Confirma a exclusão de todos os serviços?')) {
        localStorage.removeItem('servicos')
        resp.innerText = ''
        pend.innerText = ''
    }
})

frm.btExec.addEventListener('click', () => {
    const lista = JSON.parse(localStorage.getItem('servicos') || '[]')

    if (lista.length === 0) {
        alert('Não há serviços pendentes')
        return
    }

    const servicoExecutado = lista.shift()
    listaExec.push(servicoExecutado)

    localStorage.setItem('servicos', JSON.stringify(lista))
    localStorage.setItem('servicosExecutados', JSON.stringify(listaExec))

    resp.innerText = servicoExecutado
    atualizarContagem()
})