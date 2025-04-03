const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clientes = []

frm.addEventListener('submit', (e) => {

    e.preventDefault()

    const fila = []
    
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

    const lista = clientes.reduce((acum, cliente) =>
        acum + cliente.nome + ` - ` + cliente.idade + ``
    )
})
