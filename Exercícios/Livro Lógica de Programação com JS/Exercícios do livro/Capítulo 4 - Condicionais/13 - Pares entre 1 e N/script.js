const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    let num = Number(frm.inNum.value)
    let pares = []

    while (num >= 1){
        if (num%2 === 0) pares.push(num)

        num--
    }
    
    resp.innerText = pares.join(', ')
})