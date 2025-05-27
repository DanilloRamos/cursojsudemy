const frm = document.querySelector('form')
const respLista = document.querySelector('pre')
const respCavalo = document.querySelector('#outCavalo')

//nome dos cavalos participantes do páreo
const CAVALOS = ['Marujo', 'Tordilho', 'Belga', 'Twister', 'Jade', 'Lucky']

//vetor que irá armazenar o objeto aposta (nº do cavalo e valor)
const apostas = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const cavalo = Number(frm.inCavalo.value)
    const valor = Number(frm.inValor.value)

    apostas.push({cavalo, valor})
    
    //variável para exibir lista de apostas realizadas
    let lista = `Apostas Realizadas\n ${'-'.repeat(25)}\n`

    //percorre o vetor e concatena em lista as apostas realizadas
    for (const aposta of apostas) {
        lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`
        lista += ` - R$: ${aposta.valor.toFixed(2)}\n`
    }

    respLista.innerText = lista

    frm.reset()
    frm.inCavalo.focus()
})

const obterCavalo = (num) => {
    const posicao = num - 1 //posição no vetor (subtrai 1, pois inicia em 0)
    return CAVALOS[posicao] //nome do cavalo (da const CAVALOS)
}

frm.inCavalo.addEventListener('blur', () => {
    //se não preencheu o campo, limpa respCavalo e retorna
    //(não exibe mensagem de alerta, pois pode sair por um clique em Ganhador)
    if (frm.inCavalo.value === '') {
        respCavalo.innerText = ''
        return
    }

    const numCavalo = Number(frm.inCavalo.value) //converte número do cavalo

    if (!validarCavalo(numCavalo)) {
        alert('Nº do cavalo inválido')
        frm.inCavalo.focus()
        return
    }

    const nome = obterCavalo(numCavalo) //atribui retorno das funções às variáveis
    const contaNum = contarApostas(numCavalo)
    const total = totalizadorApostas(numCavalo)

    //exibe nome, nº de apostas e total apostado no cavalo
    respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$ ${total.toFixed(2)})`
})

const validarCavalo = (num) => {
    //retorna valor resultante da condição
    return num >= 1 && num <= CAVALOS.length
}

const contarApostas = (num) => {
    let contador = 0

    //percorre o vetor apostas
    for (const aposta of apostas) {
        //verifica se a aposta é no cavalo passado como parâmetro
        if (aposta.cavalo === num) {
            contador++
        }
    }

    return contador
}

const totalizadorApostas = (num) => {
    let total = 0
    for (const aposta of apostas) {
        if (aposta.cavalo === num) {
            total += aposta.valor //soma o valor das apostas
        }
    }

    return total
}

//quando o campo recebe o foco, limpa o conteúdo e dados do cavalo
frm.inCavalo.addEventListener('focus', () => {
    frm.inCavalo.value = ''
    respCavalo.innerText = ''
})

frm.btResumo.addEventListener('click', () => {
    //vetor com valores zerados para cada cavalo
    const somaApostas = [0,0,0,0,0,0]

    //percorre apostas e acumula na posição do cavalo apostado (-1, pois inicia em 0)
    for (const aposta of apostas){
        somaApostas[aposta.cavalo-1] += aposta.valor
    }

    //exibe o resultado
    let resposta = `Nº Cavalo ................. R$ Apostado\n${'-'.repeat(35)}\n`
    
    CAVALOS.forEach((cavalo, i) => {
        resposta += `${i+1} ${cavalo.padEnd(20)}`
        resposta += `${somaApostas[i].toFixed(2).padStart(11)}\n`
    })

    respLista.innerText = resposta
})

frm.btGanhador.addEventListener('click', () => {
    //solicita o número do cavalo ganhador
    const ganhador = Number(prompt('Nº cavalo ganhador: '))

    //para validar o preenchimento do prompt anterior
    if (isNaN(ganhador) || !validarCavalo(ganhador)) {
        alert('Cavalo inválido')
        return
    }

    //uso do método reduce para somar o valor das apostas
    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0)

    //concatena em resumo o resultado a ser exibido na página
    let resumo = `Resultado Final do páreo\n${'-'.repeat(30)}\n`

    resumo += `Nº total de apostas: ${apostas.length}\n`
    resumo += `Total geral: R$ ${total.toFixed(2)}\n\n`
    resumo += `Ganhador Nº ${ganhador} = ${obterCavalo(ganhador)}\n\n`
    resumo += `Nº Apostas: ${contarApostas(ganhador)}\n`
    resumo += `Total Apostado: R$ ${totalizadorApostas(ganhador).toFixed(2)}`

    respLista.innerText = resumo

    frm.btApostar.disabled = true //desabilita os botões apostar e ganhador
    frm.btGanhador.disabled = true
    frm.btNovo.focus()
})

//recarrega a página
frm.btNovo.addEventListener('click', () => window.location.reload())