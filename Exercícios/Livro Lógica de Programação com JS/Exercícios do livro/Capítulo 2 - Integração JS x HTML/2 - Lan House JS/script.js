const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valorUso = frm.inUso.value
    const tempo = Number(frm.inTempo.value)

    const valorFinal = Math.floor(preco*2)

    resp1.innerText = `Promoção de ${medicamento}`
    e.preventDefault()
})