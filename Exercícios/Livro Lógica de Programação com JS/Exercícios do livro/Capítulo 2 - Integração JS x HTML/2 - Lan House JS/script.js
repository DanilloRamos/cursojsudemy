const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valorUso = Number(frm.inUso.value)
    const tempo = Number(frm.inTempo.value)

    if (tempo <= 15){
        resp1.innerText = `Valor a pagar: R$ ${valorUso.toFixed(2)}`
    } else if (tempo > 15){
        const valorFinal = ((tempo/60)*valorUso)+valorUso
        resp1.innerText = `Valor a pagar: R$ ${valorFinal.toFixed(2)}`        
    }

    e.preventDefault()
})