import Fila from './fila.js'

const frm = document.querySelector("form")
const resp = document.querySelector("#pessoas")
const resp2 = document.querySelector("#atendidos")

const fila = new Fila()

frm.addEventListener('submit', (e) =>{

    e.preventDefault()

    const nome = frm.inCliente.value
    const idade = Number(frm.inIdade.value)

    fila.enfileirar({nome, idade})

    const lista = Object.values(fila.itens).reduce((acum, { nome, idade }) => {
        return `${acum}${nome} - ${idade} anos\n`
    }, '')

    resp.innerText = lista

    frm.btTodos.dispatchEvent(new Event('click'))
})

frm.btPref.addEventListener('click', (e) => {
    e.preventDefault()
})