const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    let num = Number(frm.inNum.value)
    let inv = 0

    while (num>0){
        let dig = num%10
        inv = (inv*10)+dig
        num = Math.floor(num/10)
    }

    resp.innerText(`Número invertido: ${inv}`)
} )