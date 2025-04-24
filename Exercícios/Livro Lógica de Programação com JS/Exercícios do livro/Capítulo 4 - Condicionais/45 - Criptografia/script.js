const frm = document.querySelector('form')
const resp = document.querySelector('h3')

let copia

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const msg = frm.inMsg.value
    const vet = msg.split('')
    copia = msg

    const par = []
    const impar = []

    for (let i=0; i<vet.length; i++){
        i % 2 === 0 ? par.push(vet[i]) : impar.push(vet[i])
    }

    const resultado = impar.concat(par).join('')

    resp.innerText = resultado
})

frm.btDec.addEventListener('click', (e) => {
    e.preventDefault()

    resp.innerText = copia
})