const frm = document.querySelector("form")
const resp = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const num = Number(frm.inNum.value)
    let fabricacao = ''
    
    for (let i=0; i<num; i++){
        if (i%2 === 0) {
            fabricacao += `*`
        } else {
            fabricacao += `_`
        }
    }

    resp.innerText = fabricacao
})