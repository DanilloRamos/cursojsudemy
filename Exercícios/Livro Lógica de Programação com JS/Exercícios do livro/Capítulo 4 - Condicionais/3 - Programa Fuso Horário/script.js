const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const hrBrasil = Number(frm.inBrasil.value)
    const horaFranca = hrBrasil + 5

    if (horaFranca>24) horaFranca -= 24

    if (horaFranca === 24) horaFranca = 0

    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`
} )