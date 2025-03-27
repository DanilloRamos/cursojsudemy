const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const valorSaque = Number(frm.inSaque.value)

    if (valorSaque%10 !== 0){
        alert(`Valor inválido para as notas disponíveis! (R$ 10, 50, 100)`)
        frm.inSaque.focus()
        return
    }

    const cem = Math.floor(valorSaque/100)
    let resto = valorSaque % 100

    const cinquenta = Math.floor(resto/50)
    resto = resto%50

    const dez = Math.floor(resto/10)

    if (cem > 0) resp1.innerText = `Notas de R$ 100: ${cem}`

    if (cinquenta > 0) resp2.innerText = `Notas de R$ 50: ${cinquenta}`
    
    if (dez > 0) resp3.innerText = `Notas de R$ 10: ${dez}`
} )