const frm = document.querySelector('form')
const dvVelas = document.querySelector('#divVelas')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const idade = frm.inIdade.value

    if (idade <= 0 || idade > 120) {
        alert('Idade inválida!')
        return
    }

    gerarVelas(idade)
})

frm.addEventListener('reset', () =>{
    window.location.reload()
})

const gerarVelas = (idade) => {
    const num = idade.split('')

    dvVelas.querySelectorAll('img').forEach(img => img.remove())

    for (let i=0; i<num.length; i++){
        const novaVela = document.createElement('img')
        novaVela.src = `img/${num[i]}.png`
        novaVela.alt = `${num[i]}`
        novaVela.className = `vela-${num[i]} img-fluid`
        dvVelas.append(novaVela)
    }
}