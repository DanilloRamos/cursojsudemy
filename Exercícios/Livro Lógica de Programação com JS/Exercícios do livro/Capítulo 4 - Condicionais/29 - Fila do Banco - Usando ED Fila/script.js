import Fila from './fila.js'

const frm = document.querySelector("form")
const resp = document.querySelector("#pessoas")
const resp2 = document.querySelector("#atendidos")

const fila = new Fila()
const filaAtendidos = new Fila()
const preferenciais = fila.filtrarFila(cliente => cliente.idade >= 60)

function atualizarFila() {
    resp.innerText = fila.toString()    
}


frm.addEventListener('submit', (e) =>{

    e.preventDefault()

    const nome = frm.inCliente.value
    const idade = Number(frm.inIdade.value)

    fila.enfileirar({nome, idade})

    frm.inCliente.value = ''
    frm.inIdade.value = ''

    resp.innerText = fila.toString()

    frm.inCliente.focus()

    atualizarFila()

    frm.btTodos.dispatchEvent(new Event('click'))
})

frm.btPref.addEventListener('click', (e) => {
    e.preventDefault()

    resp.innerText = preferenciais.map(c => `${c.nome} - ${c.idade} anos`).join('\n')

})

frm.btTodos.addEventListener('click', (e) => {
    e.preventDefault()

    atualizarFila()
})

frm.btConv.addEventListener('click', (e) => {
    e.preventDefault()

    const convencionais = fila.filtrarFila(cliente => cliente.idade < 60)

    resp.innerText = convencionais.map(c => `${c.nome} - ${c.idade} anos`).join('\n')
})

frm.btAtenderConv.addEventListener('click', (e) => {
    e.preventDefault()

    const itens = Object.values(fila.itens)
    const index = itens.findIndex(cliente => cliente.idade < 60)

    if (index === -1){
        resp2.innerText = `Nenhum cliente convencional para atender`
        return
    }

    const clienteAtendido = itens[index]
    delete fila.itens[index]

    let newItens = {}
    let newIndex = 0

    Object.values(fila.itens).forEach(cliente => {
        if (cliente) newItens[newIndex++] = cliente
    })

    fila.itens = newItens
    fila.cont = newIndex

    filaAtendidos.enfileirar(clienteAtendido)

    atualizarFila()
    resp2.innerText = filaAtendidos.toString()
})

frm.btAtPrioritario.addEventListener('click', (e) => {
    e.preventDefault()

    const itens = Object.values(fila.itens)
    const index = itens.findIndex(cliente => cliente.idade >= 60)

    if (index === -1){
        resp2.innerText = 'Nenhum cliente prioritário para atender'
    }
    
    const clienteAtendido = itens[index]
    delete fila.itens[index]

    let newItens = {}
    let newIndex = 0

   Object.values(fila.itens).forEach(cliente => {
        if (cliente) newItens[newIndex++] = cliente
   })

   fila.itens = newItens
   fila.cont = newIndex

   filaAtendidos.enfileirar(clienteAtendido)

   atualizarFila()
   resp2.innerText = filaAtendidos.toString()
})