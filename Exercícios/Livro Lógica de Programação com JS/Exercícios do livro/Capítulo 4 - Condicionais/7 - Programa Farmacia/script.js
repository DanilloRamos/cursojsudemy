const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const compra = Number(frm.inCompra.value)
    const aux = Math.floor(compra/20)
    const parcelas = aux === 0 ? 1: aux > 6 ? 6 : aux
    const valorParcela = compra/parcelas

    resp.innerText = `Pode pagar em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`
} )