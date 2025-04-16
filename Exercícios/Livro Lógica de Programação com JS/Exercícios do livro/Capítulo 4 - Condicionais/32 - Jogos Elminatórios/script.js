const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const armazenaClubes = []
const tabelaJogos = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const clube = frm.inClube.value
    armazenaClubes.push(clube)

    frm.inClube.value = ''
    frm.inClube.focus()

    let lista = ``

    for (const time of armazenaClubes) lista += `${time} \n`

    resp.innerText = lista

    frm.btListar.dispatchEvent(new Event('click'))
})

frm.btMontar.addEventListener('click', (e) => {
    e.preventDefault()

    let lista = ''

    while (armazenaClubes.length > 0){
        
        let time1 = armazenaClubes.shift()
        let time2 = armazenaClubes.pop()

        lista += `${time1} x ${time2}\n`
    }

    resp.innerText = lista

})