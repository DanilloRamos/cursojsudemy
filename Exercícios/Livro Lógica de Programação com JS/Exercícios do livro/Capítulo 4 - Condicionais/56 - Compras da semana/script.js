const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const produto = frm.inProduto.value

    if (verificarProduto(produto)) {
        alert('Esse produto já foi inserido')
        frm.inProduto.focus()
        frm.reset()
        return
    }
    
    
    let lista = localStorage.getItem('produtos')
    lista = lista ? JSON.parse(lista) : []

    lista.push(produto)
    localStorage.setItem('produtos', JSON.stringify(lista))

    frm.reset()

    mostrarLista()

})

const verificarProduto = (produto) => {
    if (localStorage.getItem('produtos')) {
        const listaProdutos = localStorage.getItem('produtos')

        return listaProdutos.includes(JSON.stringify(produto))
    } else {
        return false
    }
}

const mostrarLista = () => {
    const produtos = localStorage.getItem('produtos')
    let linhas = ''

    if (produtos) {
        const lista = JSON.parse(produtos)

        lista.sort((a, b) => a.localeCompare(b)).forEach(produto => {
            linhas += `${produto}\n`
        })
    }

    resp.innerText = linhas || `Nenhum produto adicionado`
}

frm.btLimpar.addEventListener('click', () => {
    if (confirm('Confirma a exclusão de todos os produtos?')) {
        localStorage.removeItem('produtos')
        mostrarLista()
    }
})