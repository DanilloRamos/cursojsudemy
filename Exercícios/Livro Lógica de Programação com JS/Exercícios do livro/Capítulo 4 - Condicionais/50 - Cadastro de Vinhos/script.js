const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const itens = []

frm.rbPizza.addEventListener('click', () =>{
    frm.inBebida.className = 'oculta'
    frm.inPizza.className = 'exibe'
})

frm.rbBebida.addEventListener('click', () =>{
    frm.inBebida.className = 'exibe'
    frm.inPizza.className = 'oculta'
})

frm.inDetalhes.addEventListener('focus', () =>{
    if (frm.rbPizza.checked) { //se radiobuttoon rbPizza estiver selecionado
        const pizza = frm.inPizza.value //obtém value do item selecionado
        const num = pizza === 'media' ? 2 : pizza === 'grande' ? 3 : 4 //indicar o número de sabores

        //exibe uma dica de preenchimento do campo
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
})

frm.inDetalhes.addEventListener('blur', () =>{ //quando o campo perde o foco
    //limpa a dica de preenchimento
    frm.inDetalhes.placeholder = ''
})

frm.addEventListener('submit',(e) => {
    e.preventDefault()
    let produto

    if (frm.rbPizza.checked) {
        const num = frm.inPizza.selectedIndex //obtém o número do item selecionado
        produto = frm.inPizza.options[num].text //obtém o texto do item selecionado
    } else {
        const num = frm.inBebida.selectedIndex
        produto = frm.inBebida.options[num].text
    }

    const detalhes = frm.inDetalhes.value
    itens.push(`${produto} (${detalhes})`)
    
    resp.innerText = itens.join(`\n`)

    frm.reset() //limpa o form
    frm.rbPizza.dispatchEvent(new Event('click'))
})