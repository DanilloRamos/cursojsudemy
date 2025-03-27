const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const num = Number(frm.inNum.value)
    const raiz = Math.sqrt(num)

    if (Number.isInteger(raiz)){
        resp.innerText = `Raiz: ${raiz}`
    } else {
        resp.innerText = `Não há raiz exata para ${num}`
    }
} )