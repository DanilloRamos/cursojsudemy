const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const familia = Number(frm.inFamilia.value)
    const peixes = Number(frm.inPeixes.value)
    const total = 0

    if (peixes > familia) {
        total = (familia*20) + ((peixes-familia)*12)
    } else {
        total = familia*20
    }

    resp.innerText = `Total a pagar: R$ ${total.toFixed(2)}`

} )