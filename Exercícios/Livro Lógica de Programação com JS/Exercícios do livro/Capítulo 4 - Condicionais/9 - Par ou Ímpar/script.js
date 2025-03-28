const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    let num = Number(frm.inNum.value)
    
    num % 2 === 0? resp.innerText = `${num} é par` : resp.innerText = `${num} é ímpar`
} )