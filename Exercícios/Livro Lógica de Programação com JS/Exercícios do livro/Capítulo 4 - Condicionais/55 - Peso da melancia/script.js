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
        const melanciaPeso = localStorage.getItem('melanciaPeso') + ";" + peso
        localStorage.setItem('melanciaNome', melanciaNome) //salva os dados
        localStorage.setItem('melanciaPeso', melanciaPeso)
    } else { //senão é a primeira aposta
        localStorage.setItem('melanciaNome',nome)
        localStorage.setItem('melanciaPeso',peso)
    }

    mostrarApostas() //chama função que mostra apostas já salvas
    frm.reset() //limpa o form
    frm.inNome.focus()
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

const mostrarApostas = () => {
    //se não há apostas armazenadas em localStorage
    if (!localStorage.getItem('melanciaNome')) {
        //limpa o espaço de exibição das apostas (para quando "Limpar Apostas")
        resp.innerText = ''
        return //retorna (não executa os comandos abaixo)
    }

    //obtém o conteúdo das variáveis salvas no localStorage, separando-as
    //em elementos de vetor a cada ocorrência de ";"
    const nomes = localStorage.getItem('melanciaNome').split(';')
    const pesos = localStorage.getItem('melanciaPeso').split(';')

    let linhas = ''

    //repetição para percorrer todos os elementos do vetor
    for (let i=0; i<nomes.length; i++){
        // concatena em linhas os nomes dos apostadores e suas apostas
        linhas += `${nomes[i]} - ${pesos[i]} gr\n`
    }

    //exibe as linhas
    resp.innerText = linhas
}

//chama a função qu321a\VB M,.;/0--/78ndo a página é carregada, para mostrar apostas salvas
window.addEventListener('load', mostrarApostas)

frm.btVencedor.addEventListener('click', () => {
    //se não há apostas armazenadas em localStorage
    if (!localStorage.getItem('melanciaNome')) {
        alert('Não há apostas cadastradas!')
        return
    }

    //solicita o peso correto da melancia
    const pesoCorreto = Number(prompt('Qual o peso correto da melancia?'))

    //se não informou, retorna
    if (pesoCorreto === 0 || isNaN(pesoCorreto)) return

    //obtém os dados armazenados, separando-os em elementos de vetor
    const nomes = localStorage.getItem('melanciaNome').split(';')
    const pesos = localStorage.getItem('melanciaPeso').split(';')
    
    //valor niciap para vencedor é o da primeira aposta
    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])

    //percorre as apostas
    for (let i=0; i<nomes.length; i++){
        //calcula a diferença de peso do vencedor e da aposta atual
        const difVencedor = Math.abs (vencedorPeso-pesoCorreto)
        const difAposta = Math.abs (Number(pesos[i]) - pesoCorreto)

        //se a diferença da aposta atual (no for) for menor que a do vencedor
        if (difAposta < difVencedor){
            vencedorNome = nomes[i] //troca o vencedor
            vencedorPeso = Number(pesos[i]) //para este elemento
        }
    }

    //monta mensagem com dados do vencedor
    let mensagem = `Resultado - Peso Correto: ${pesoCorreto} gr`
    mensagem += `\n---------------------------------------------------`
    mensagem += `\nVencedor: ${vencedorNome}`
    mensagem += `\nAposta: ${vencedorPeso} gr`
    alert(mensagem)
})

frm.btLimpar.addEventListener('click', () => {
    //solicita confirmação para excluir as apostas
    if (confirm('Confirma exclusão de todas as apostas?')) {
        //remove as variáveis salvas em localStorage e exibe a listagem vazia
        localStorage.removeItem('melanciaNome')
        localStorage.removeItem('melanciaPeso')
        mostrarApostas()
    }
})