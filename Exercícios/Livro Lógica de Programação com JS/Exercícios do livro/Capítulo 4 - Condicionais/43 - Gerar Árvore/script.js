const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const altura = Number(frm.inAltura.value)
    let arvore = ''

    for (let i=1; i<=altura; i++){
        const espacos = 30 + (altura-i)
        arvore += `${' '.repeat(espacos)} ${'*'.repeat(i*2)}\n`
    }

    resp.innerText = arvore
})