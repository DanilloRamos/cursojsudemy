const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const atual = new Date().getFullYear() //armazena o ano atual
    const idade = Number(frm.inIdade.value)

    resp.innerText = `Você nasceu em ${atual-idade}`
})