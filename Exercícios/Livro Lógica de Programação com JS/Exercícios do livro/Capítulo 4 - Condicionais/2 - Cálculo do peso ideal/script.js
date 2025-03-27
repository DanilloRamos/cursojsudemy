const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const nome = frm.inAluno.value
    const altura = Number(frm.inAltura.value)
    const masc = frm.inMasculino.checked

    if (masc) {
        const peso = 22*Math.pow(altura,2)
        resp.innerText = `${nome}: seu peso ideal é ${peso.toFixed(2) kg}`
    } else {
        const peso = 21*Math.pow(altura,2)
        resp.innerText = `${nome}: seu peso ideal é ${peso.toFixed(2) kg}`
    }

    e.preventDefault()
} )