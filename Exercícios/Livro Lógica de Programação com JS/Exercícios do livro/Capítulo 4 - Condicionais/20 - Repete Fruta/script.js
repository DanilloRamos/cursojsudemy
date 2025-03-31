const frm = document.querySelector("form")
const resp = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const chinchila = Number(frm.inChi.value)
    const anos = Number(frm.inAnos.value)
    let resultado = ``
    let aux = chinchila

    for (let i=0; i<anos; i++){
      resultado += `${i+1}º Ano: ${aux} chinchila(s)\n`
      aux *= 3
    }

    resp.innerText = resultado

    frm.reset()
    frm.inChi.focus()
})