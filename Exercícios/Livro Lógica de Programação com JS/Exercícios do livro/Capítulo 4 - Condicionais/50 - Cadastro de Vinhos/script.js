const frm = document.querySelector('form')
const resp1 = document.querySelector('#pre1')
const resp2 = document.querySelector('#pre2')
const h1 = document.getElementById('resp1')
const h2 = document.getElementById('resp2')

const vinhos = []

document.getElementById('inOpcoes').addEventListener('change', function() {
    const selecionado = this.value

    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')
    const p3 = document.getElementById('p3')
    const p4 = document.getElementById('p4')
    const p5 = document.getElementById('p5')

    //reseta todos os elementos
    p1.classList.add('oculta')
    p2.classList.add('oculta')
    p3.classList.add('oculta')
    p4.classList.add('oculta')
    p5.classList.add('oculta')
    resp1.classList.add('oculta')
    resp2.classList.add('oculta')
    document.getElementById('resp1').classList.add('oculta')
    document.getElementById('resp2').classList.add('oculta')

    switch(selecionado) {
        case 'incluir':
            p1.classList.remove('oculta')
            p2.classList.remove('oculta')
            p3.classList.remove('oculta')
            p4.classList.remove('oculta')
            break
        
        case 'listar':
            h1.classList.remove('oculta')
            resp1.classList.remove('oculta')

            if (vinhos.length === 0) {
                resp1.innerText = 'Não há vinhos cadastrados'
            } else {
                resp1.innerText = vinhos.map(vinho => 
                    `${vinho.marca} | ${vinho.tipo} | R$ ${vinho.preco.toFixed(2)}`
                ).join('\n')
            }
            break

        case 'pesquisar':
            h2.classList.remove('oculta')
            resp2.classList.remove('oculta')
            p5.classList.remove('oculta')
            break
    }
})

frm.addEventListener('submit', (e) => {
    
    e.preventDefault()
    
    const marca = frm.inMarca.value
    const tipo = frm.inTipo.value
    const preco = Number(frm.inValor.value)

    vinhos.push({marca, tipo, preco})
    alert('Vinho cadastrado com sucesso!')

    frm.inMarca.value = ''
    frm.inTipo.value = ''
    frm.inValor.value = ''

    frm.inMarca.focus()
})

frm.btPesq.addEventListener('click', (e) => {
    
    e.preventDefault()

    const procurado = frm.inTpPesq.value
    
    const encontrados = vinhos.filter(vinho => 
        vinho.tipo.toUpperCase() === procurado.toUpperCase()
    )

    if (encontrados.length > 0){
        resp2.innerText = encontrados.map(vinho =>
            `${vinho.marca} | ${vinho.tipo} | R$ ${vinho.preco.toFixed(2)}`
        ).join('\n')
    } else {
        resp2.innerText = `Não há vinhos do tipo ${procurado} cadastrado`
    }


})