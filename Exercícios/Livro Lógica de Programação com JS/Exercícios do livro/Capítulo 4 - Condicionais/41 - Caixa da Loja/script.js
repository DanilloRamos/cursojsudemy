const frm = document.querySelector('form')
const resp = document.querySelector('h3')

const TAXA_MULTA = 2/100
const TAXA_JUROS = 0.33/100 //juros diários

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const vencimento = frm.inData.value
    const valor = Number(frm.inValor.value)
    
    //cria objeto do tipo date
    const hoje = new Date()
    const venc = new Date()

    const partes = vencimento.split("-") //data vem no formato aaaa-mm-dd
    venc.setDate(Number(partes[2]))
    venc.setMonth(Number(partes[1])-1)
    venc.setFullYear(Number(partes[0]))

    const atraso = hoje - venc //calcula a diferença entre datas em ms
    let multa = 0
    let juros = 0

    if (atraso > 0) {
        
        //converte ms do atraso em dia (1 dia = 24h x 60min x 60seg x 1000ms: 86400000)
        const dias = atraso/86400000
        multa = valor * TAXA_MULTA
        juros = valor * TAXA_JUROS * dias
    }

    const total = valor + multa + juros

    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})