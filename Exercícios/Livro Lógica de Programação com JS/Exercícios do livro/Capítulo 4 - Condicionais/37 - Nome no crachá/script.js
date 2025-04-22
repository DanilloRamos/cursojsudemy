const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.inNome.value.trim()

    let primeiro = nome.indexOf(' ')
    let ultimo = nome.lastIndexOf(' ')

    const cracha = nome.substr(0, primeiro) + nome.substr(ultimo)

    resp.innerText = `Crachá: ${cracha}`
})