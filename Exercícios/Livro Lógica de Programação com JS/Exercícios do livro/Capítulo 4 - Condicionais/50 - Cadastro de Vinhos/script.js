const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const vinhos = []

frm.inOpcoes.addEventListener('click', () =>{
    const num = frm.inOpcoes.selectedIndex
    const opcao = frm.inOpcoes.options[num].text

    if (opcao === 'incluir') {
        frm.inOpcoes
    }
})