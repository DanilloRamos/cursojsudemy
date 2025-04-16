const frm = document.querySelector('form')
const resp = document.querySelector('#saqPoss')
const resp2 = document.querySelector('#saqImp')
const resp3 = document.querySelector('#poss')
const resp4 = document.querySelector('#imp')

const saquesPoss = []
const saquesImp = []
let contPoss = 0
let contImp = 0

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const valor = Number(frm.inSaque.value)
    
    if (valor%10 === 0) {
        saquesPoss.push(valor)
        contPoss++
    } else {
        saquesImp.push(valor)
        contImp++
    }

    frm.inSaque.value = ``
    frm.inSaque.focus()

    let listaPoss = ``
    let listaImp = ``

    for (const sp of saquesPoss) listaPoss += `R$ ${sp.toFixed(2)}\n`
    for (const si of saquesImp) listaImp += `R$ ${si.toFixed(2)}\n`

    resp.innerText = listaPoss
    resp2.innerText = listaImp

    frm.btVerificar.dispatchEvent(new Event('click'))
})

frm.btLimpar.addEventListener('click', (e) =>{
    e.preventDefault()

    saquesPoss = []
    saquesImp = []

    resp2.innerText = ``
    resp.innerText = ``
})

frm.btCont.addEventListener('click', (e) => {
    e.preventDefault()

    resp2.innerText = ``
    resp.innerText = ``

    resp3.innerText = `${contPoss} saques possíveis`
    resp4.innerText = `${contImp} saques impossíveis`
})