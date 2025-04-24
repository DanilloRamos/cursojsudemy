const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const parcelas = Number(frm.inParc.value)
    const data = new Date()
    let lista = ''

    for (let i=1; i<=parcelas; i++){
        data.setMonth(data.getMonth()+1)
        const dia = data.getDate()
        const mes = data.getMonth()+1
        const ano = data.getFullYear()

        const diaZero = dia < 10 ? '0' + dia : dia
        const mesZero = mes < 10 ? '0' + mes : mes

        lista += `${i}ª Parcela: ${diaZero}/${mesZero}/${ano}\n`
    }

    resp.innerText = lista
    
})