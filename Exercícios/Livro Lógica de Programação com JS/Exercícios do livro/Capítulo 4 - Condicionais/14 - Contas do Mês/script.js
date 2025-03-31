const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

let contas = 0
let resposta = ""
let total = 0

frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const descr = frm.inDesc.value
    const valor = Number(frm.inValue.value)

    contas++

    total += valor
    resposta += `${descr} - R$ ${valor.toFixed(2)} \n`
    
    resp1.innerText = `${resposta}---------------------------------------------------`
    resp2.innerText = `${contas} Conta(s) - Total R$: ${total.toFixed(2)}`

    frm.inDesc.value = ""
    frm.inValue.value = ''
    frm.inDesc.focus()
})