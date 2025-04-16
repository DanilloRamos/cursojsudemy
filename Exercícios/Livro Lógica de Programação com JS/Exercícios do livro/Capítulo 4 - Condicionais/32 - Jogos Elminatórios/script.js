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