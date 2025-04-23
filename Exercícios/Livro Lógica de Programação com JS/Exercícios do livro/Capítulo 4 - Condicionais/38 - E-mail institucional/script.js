const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.inFunc.value.toLowerCase()
    const parte = nome.split(' ')
    let email = ''
    
    for (let i=0; i<parte.length - 1; i++) {
        email += parte[i].charAt(0)
    }

    email += parte[parte.length - 1] + '@empresa.com.br'

    resp.innerText = `E-mail: ${email}`
})