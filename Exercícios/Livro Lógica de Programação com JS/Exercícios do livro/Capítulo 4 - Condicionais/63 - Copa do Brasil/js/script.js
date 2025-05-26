const frm = document.querySelector('form')
const dvClubes = document.querySelector('#divClubes')
const dvTabela = document.querySelector('#divTabela')
const tabela = document.querySelector('table')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const clube = document.querySelector('#inClube').value
    
    if (verificaClube(clube)) {
        document.querySelector('#inClube').value = ''
        document.querySelector('#inClube').focus()
        return       
    }

    const h5 = document.createElement('h5')
    h5.textContent = clube
    h5.className = 'alinha-direita'
    dvClubes.appendChild(h5)

    document.querySelector('#inClube').value = ''
})

const verificaClube = (clube) => {
    const clubes = document.querySelectorAll('h5')

    for (let i=0; i<clubes.length; i++){
        if (clube === clubes[i].textContent) {
           alert(`${clube} já está cadastrado!`)
           return true
        }
    }

    return false
}

frm.btTabela.addEventListener('click', () => {
    const clubes = document.querySelectorAll('h5')

    if (clubes.length % 2 !== 0){
        alert('Numéro de clubes cadastrados não é par')
        return
    } else {
        tabela.innerText = ''
        
        const titulo = document.createElement('h4')
        titulo.id = 'tituloTabela'
        titulo.textContent = 'Tabela de Jogos'
        tabela.before(titulo)
        
        for (let i=0; i<clubes.length; i+= 2) {
            const linha = tabela.insertRow()
            const col1 = linha.insertCell(0)
            const col2 = linha.insertCell(1)

            col1.textContent = clubes[i].textContent
            col2.textContent = clubes[i+1].textContent
        }
    }
})