const frm = document.querySelector('form')
const dvNomes = document.querySelector('#divNomes')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

   const nome = frm.inNome.value
   
    nomeColorido(nome)
})

frm.addEventListener('reset', () =>{
    window.location.reload()
})

const corAleatoria = () => {
    const letras = '0123456789ABCDEF'
    let cor = '#'

    for (let i=0; i < 6; i++){
        cor += letras[Math.floor(Math.random()*16)]
    }

    return cor
}

const nomeColorido = (nome) => {
    const sep = nome.split(' ')

    dvNomes.querySelectorAll('h3').forEach(el => el.remove())

    for (let i=0; i<sep.length; i++){
        const sobrenome = document.createElement('h3')
        sobrenome.textContent = sep[i]
        sobrenome.className = 'nome'
        sobrenome.style.color = corAleatoria()
        dvNomes.append(sobrenome)
    }
}