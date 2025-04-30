const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const vinhos = []
const lista = ``

document.getElementById('inOpcoes').addEventListener('change', function() {
    const selecionado = this.value
    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')
    const p3 = document.getElementById('p3')

    if (selecionado === 'incluir'){
        p1.classList.remove('oculta')
        p2.classList.remove('oculta')
        p3.classList.remove('oculta')
        p4.classList.remove('oculta')
    } else {
        p1.classList.add('oculta')
        p2.classList.add('oculta')
        p3.classList.add('oculta')
        p4.classList.add('oculta')
    }

})


frm.addEventListener('submit', (e) =>{
    
    e.preventDefault()

    const marca = frm.inMarca.value
    const tipo = frm.inTipo.value
    const valor = Number(frm.inValor.value)

    vinhos.push({marca, tipo, valor})
    alert('Vinho cadastrado com sucesso!')

    frm.inMarca.value = ''
    frm.inTipo.value = ''
    frm.inValor.value = ''

    resp.innerText = lista
})

document.getElementById('inOpcoes').addEventListener('change', function() {
    const selecionado = this.value

    if (selecionado === 'listar'){
        resp.classList.remove('oculta')
        document.getElementById('resp1').classList.remove('oculta')

        if (vinhos.length === 0) resp.innerText = 'Não há vinhos cadastrados!'

        const lista = vinhos.map(vinho => 
            `${vinho.marca} | ${vinho.tipo} | R$ ${vinho.valor.toFixed(2)}`
        ).join('\n')

        resp.textContent = lista
    } else {
        resp.classList.add('oculta')
        document.getElementById('resp1').classList.add('oculta')
    }

})

document.getElementById('inOpcoes').addEventListener('change', function() {
    const selecionado = this.value

    if (selecionado === 'pesquisar'){
        
    }
})