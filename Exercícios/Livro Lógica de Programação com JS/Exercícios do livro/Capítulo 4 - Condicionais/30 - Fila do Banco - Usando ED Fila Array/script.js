import Fila from './fila.js'

const frm = document.querySelector('form')
const resp = document.querySelector('#pessoas')
const resp2 = document.querySelector('#atendidos')

const filaGeral = new Fila()
const filaConv = new Fila()
const filaPref = new Fila ()
const atendidos = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.inCliente.value
    const idade = Number(frm.inIdade.value)

    filaGeral.enfileirar({nome, idade})

    frm.inCliente.value = ''
    frm.inIdade.value = ''
    frm.inCliente.focus()

    resp.innerText = filaGeral.toString()

    frm.btTodos.dispatchEvent(new Event('click'))
})

frm.btTodos.addEventListener('click', (e) => {
    e.preventDefault()

    resp.innerText = filaGeral.toString()
})

frm.btConv.addEventListener('click', (e) => {
    e.preventDefault()

    for (const cliente of filaGeral.itens) {
        if (cliente.idade < 60) filaConv.enfileirar(cliente)
    }

    resp.innerText = filaConv.toString()
})

frm.btPref.addEventListener('click', (e) => {
    e.preventDefault()

    for (const cliente of filaGeral.itens) {
        if (cliente.idade >= 60) filaPref.enfileirar(cliente)
    }

    resp.innerText = filaPref.toString()
})

frm.btAtenderConv.addEventListener('click', (e) => {
    e.preventDefault()

    for (const cliente of filaGeral.itens) {
        if (cliente.idade < 60) {
            atendidos.push(cliente)
            filaGeral.desenfileirar()
        }
    }

    resp.innerText = filaGeral.toString()

    let lista = ``

    for (const atendido of atendidos) {
        lista += `${atendido.nome} - ${atendido.idade} anos \n`
    }
    
    resp2.innerText = lista
})

frm.btAtPrioritario.addEventListener('click', (e) => {
    e.preventDefault()

    for (const cliente of filaGeral.itens) {
        if (cliente.idade >= 60) {
            atendidos.push(cliente)
            filaGeral.desenfileirar()
        }
    }

    resp.innerText = filaGeral.toString()

    let lista = ``

    for (const atendido of atendidos) lista += `${atendido.nome} - ${atendido.idade} anos \n`

    resp2.innerText = lista
})

frm.btLimpar.addEventListener('click', (e) => {
    e.preventDefault()

    resp2.innerText = ``
    resp.innerText = ``
})