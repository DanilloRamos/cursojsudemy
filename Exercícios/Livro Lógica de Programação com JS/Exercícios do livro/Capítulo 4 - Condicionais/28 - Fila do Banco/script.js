const frm = document.querySelector("form")
const resp = document.querySelector("#pessoas")
const resp2 = document.querySelector("#atendidos")

const fila = []
const atendComum = []
const atendPrior = []
let prioridade = false

frm.addEventListener('submit', (e) => {

    e.preventDefault()
    
    const nome = frm.inCliente.value
    const idade = Number(frm.inIdade.value)

    fila.push({nome, idade})

   frm.inCliente.value = ''
   frm.inIdade.value = ''

   frm.inCliente.focus()

   frm.btTodos.dispatchEvent(new Event('click'))
})

frm.btTodos.addEventListener('click',(e) =>{
    e.preventDefault()

    const lista = fila.reduce((acum, cliente) =>
        acum + cliente.nome + ` - ` + cliente.idade + ` anos\n`,''
    )

    resp.innerText = lista
})

frm.btPref.addEventListener('click', (e) => {
    e.preventDefault()

    const pref = fila.filter(cliente => cliente.idade >= 60)
    prioridade = true

    const lista = pref.reduce((acum, cliente) =>
        acum + cliente.nome + " - " + cliente.idade + ` anos\n`,''
    )

    resp.innerText = lista
})

frm.btNormal.addEventListener('click', (e) => {
    e.preventDefault()

    const normal = fila.filter(cliente => cliente.idade < 60)

    const lista = normal.reduce((acum, cliente) =>
        acum + cliente.nome + " - " + cliente.idade + ` anos\n`,''
    )

    resp.innerText = lista
})

frm.btAtender.addEventListener('click', (e) => {
    e.preventDefault()
    
    atendComum = fila.filter(cliente => cliente.idade < 60)
})
