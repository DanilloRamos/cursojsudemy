const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const peso = Number(frm.inPeso.value)

    //chama function que verifica se peso já foi apostado
    if (verApostaExiste(peso)) {
        alert("Alguém já apostou esse peso, informe outro")
        frm.inPeso.focus()
        return
    }

    if (localStorage.getItem('melanciaNome')) { //se houver dados em localStorage
        //obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem('melanciaNome') + ";" + nome
        const melanciaPeso = localStorage.getItem('melanciaPeso') + ";" + nome
    }
})

const verApostaExiste = (peso) => {
    if (localStorage.getItem('melanciaPeso')) {//se existir dados em localStorage
        //obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
        const pesos = localStorage.getItem('melanciaPeso'.split(';'))

        //o peso deve ser convertido para string, pois o vetor contém strings
        return pesos.includes(peso.toString())
    } else {
        return false
    }
}