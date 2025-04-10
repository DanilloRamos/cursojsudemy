import Fila from './fila.js'

const frm = document.querySelector("form")
const resp = document.querySelector("#pessoas")
const resp2 = document.querySelector("#atendidos")

const fila = new Fila()
const filaPref = new Fila()
const filaConv = new Fila()
const convencionais = 


frm.addEventListener('submit', (e) =>{

    e.preventDefault()

    const nome = frm.inCliente.value
    const idade = Number(frm.inIdade.value)

    fila.enfileirar({nome, idade})

    frm.inCliente.value = ''
    frm.inIdade.value = ''

    resp.innerText = fila.toString()

    frm.inCliente.focus()

    frm.btTodos.dispatchEvent(new Event('click'))
})

frm.btPref.addEventListener('click', (e) => {
    e.preventDefault()

    const preferenciais = (fila.filtrarFila(fila, cliente => cliente.idade >= 60))

    resp.innerText = preferenciais.map(c => `${c.nome} - ${c.idade} anos`).join('\n')

})

frm.btTodos.addEventListener('click', (e) => {
    e.preventDefault()

    resp.innerText = fila.toString()
})

frm.btConv.addEventListener('click', (e) => {
    e.preventDefault()

    convencionais = fila.filtrarFila(fila, cliente => cliente.idade < 60)

    resp.innerText = convencionais.map(c => `${c.nome} - ${c.idade} anos`).join('\n')
})

frm.btAtenderConv.addEventListener('click', (e) => {
    e.preventDefault()
    
    
})
