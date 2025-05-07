const frm = document.querySelector('form')
const resp = document.getElementById('h1')

frm.rbSim.addEventListener('click',(e) =>{
    const p1 = document.getElementById('p1')
    p1.classList.remove('oculta')
})

frm.rbNao.addEventListener('click', (e) =>{
    const p1 = document.getElementById('p1')
    p1.classList.add('oculta')
})

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    let convenio

    const valor = Number(frm.inValor.value)

    if (frm.rbSim.checked) {
        convenio = frm.escolheConv.value        
    }

    function calcularDesconto(valor){

       let desconto

       if (convenio === 'amigo') {
        desconto = valor*0.2
       } else if (convenio === 'saude') {
        desconto = valor*0.5
       } else {
        desconto = valor*0.1
       }

        return desconto
    }

    let valorFinal = valor - calcularDesconto(valor)

    resp.innerText = `Desconto: R$ ${calcularDesconto(valor).toFixed(2)}\n
    Valor a pagar: R$ ${valorFinal.toFixed(2)}`
})