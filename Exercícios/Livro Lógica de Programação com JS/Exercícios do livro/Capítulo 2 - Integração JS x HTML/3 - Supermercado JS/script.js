const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const precoFinal = (preco*3)-(preco/2)

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${precoFinal.toFixed(2)}`
    resp2.innerText = `O 3º produto apenas R$ ${(preco/2).toFixed(2)}`

    e.preventDefault()
})