const frm = document.querySelector('form')
const resp = document.querySelector('#dtLimite')
const resp2 = document.querySelector('#vlrDesc')

const TAXA_DESCONTO = 20/100


frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const dtInfracao = frm.inData.value
    const valor = Number(frm.inValor.value)
    
    const vencimento = new Date(dtInfracao)

    vencimento.setDate(vencimento.getDate() + 91)

    const dia = vencimento.getDate().toString().padStart(2, '0')
    const mes = (vencimento.getMonth() + 1).toString().padStart(2, '0')
    const ano = vencimento.getFullYear()

    const valorComDesc = valor - (valor*TAXA_DESCONTO)

    resp.innerText = `Data limite para pagamento com desconto: ${dia}/${mes}/${ano}`
    resp2.innerText = `Valor com desconto: R$ ${valorComDesc.toFixed(2)}`
    
})