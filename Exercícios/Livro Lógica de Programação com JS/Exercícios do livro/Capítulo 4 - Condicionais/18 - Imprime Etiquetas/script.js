const frm = document.querySelector("form")
const resp = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const produto = frm.inProd.value
    const quantidade = Number(frm.inQtd.value)
    let etiqueta = ``

    for (let i=0; i<quantidade/2; i++){
      etiqueta += `${produto.padEnd(30)} ${produto.padEnd(30)}\n`
    }

    if (quantidade%2 === 1) etiqueta += `${produto}\n`

    resp.innerText = `${etiqueta}`

    frm.inProd.value = ''
    frm.inQtd.value = ''
    frm.inProd.focus()
})