const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const num = Number(frm.inNum.value)
    let resultado = ''
    let cont = 1
    
    while(cont <= 10) {
        resultado = `${resultado}${num} x ${cont} = ${num*cont}\n`
        cont++
    }

    resp.innerText = resultado
})