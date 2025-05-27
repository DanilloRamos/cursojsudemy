//cavalos participantes do páreo
const cavalos = ['Marujo', 'Tordilho', 'Belga', 'Twister', 'Jade', 'Lucky']

//vetor que irá armazenar um objeto aposta (número do cavalo e valor da aposta)
let apostas = []

function adicionaAposta() {
    //cria referência ao elemento inValor e outApostas
    //(inCavalo é referenciado em variável global na sequência do programa)
    let inValor = document.getElementById('inValor')
    let outApostas = document.getElementById('outApostas')

    //obtém número do cavalo
    const cavalo = Number(inCavalo.value)
    const valor = Number(inValor.value)

    //validação dos dados
    if (isNaN(cavalo) || isNaN(valor) || valor === 0 || !validarCavalo(cavalo)) {
        alert('Aposta inválida')
        inCavalo.focus()
        return
    }

    //adiciona ao vetor de objetos
    apostas.push({cavalo: cavalo, valor: valor})

    //variável para exibir a lista das apostas
    let lista = 'Apostas realizadas\n ------------------------------------------------------------\n'

    //percorre o vetor e concatena em lista as apostas realizadas
    for (let i=0; i<apostas.length; i++){
        lista += `Nº ${apostas[i].cavalo} ${obterCavalo(apostas[i].cavalo)}`
        lista += ` - R$: ${apostas[i].valor.toFixed(2)} \n`
    }

    outApostas.textContent = lista //exibe a lista das apostas

    inCavalo.value = ''
    inValor.value = ''
    inCavalo.focus()
}

//cria referência ao botão e associa ao evento click a função indicava
let btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', adicionaAposta)

function validarCavalo(num) {
    var tam = cavalos.length //obtém número de cavalos

    //verifica se o número do cavalo é válido
    if (num >= 1 && num <= tam) {
        return true
    } else {
        return false
    }
}

function mostrarCavalo() {
    //cria referência ao elemento outCavalo
    let outCavalo = document.getElementById('outCavalo')

    //se não preencheu o campo, limpa outCavalo e retorna
    //(não exibe alerta, pois pode sair por um clique em ganhador)
    if (inCavalo.value === ''){
        outCavalo.textContent = ''
        return
    }

    //obtém o conteúdo do campo de entrada
    let cavalo = Number(inCavalo.value)

    //valida se o número do cavalo for preenchido
    if (isNaN(cavalo) || !validarCavalo(cavalo)) {
        outCavalo.textContent = 'Número do cavalo inválido'
        return
    }

    //cria variáveis com retorno dos métodos a serem exibidos em outCavalo
    let nomeCavalo = obterCavalo(cavalo)
    let numApostas = contarApostas(cavalo)
    let total = totalizarApostas(cavalo)

    //exibe nome, número de apostas e total apostado no cavalo
    outCavalo.textContent = `${nomeCavalo} (Apostas: ${numApostas} - R$ ${total.toFixed(2)})`
}

//cria referência ao botão e associa ao evento blur a função indicada
let inCavalo = document.getElementById('inCavalo')
inCavalo.addEventListener('blur', mostrarCavalo)

function obterCavalo(num){
    var posicao = num-1 //posicao no vetor (subtrai 1, pois inicia em 0)    

    return cavalos[posicao] //nome do cavalo   
}

function contarApostas(numCavalo) {
    let contador = 0

    //percorre o vetor apostas
    for (let i=0; i<apostas.length; i++){
        //verifica se a aposta é no cavalo passado como argumento
        if (apostas[i].cavalo === numCavalo) {
            contador++ //conta quando a aposta for no cavalo do argumento
        }
    }

    return contador
}

function totalizarApostas(numCavalo){
    let total = 0

    for (let i=0; i<apostas.length; i++){
        if (apostas[i].cavalo === numCavalo) total += apostas[i].valor //soma valor das apostas
    }

    return total
}

//quando o campo recebe o foco, limpa o conteúdo e dados do cavalo
inCavalo.addEventListener('focus', function() {
    inCavalo.value = ''
    document.getElementById('outCavalo').textContent = ''
})

function ganhadorPareo() {
    //solicita o número do cavalo ganhador
    let ganhador = Number(prompt('Número do cavalo ganhador: '))

    //para validar o preenchimento do ganhador
    if(isNaN(ganhador) || !validarCavalo(ganhador)){
        alert('Cavalo inválido')
        return
    }

    //cria referência ao elemento outApostas, onde será exibido o resumo
    let outApostas = document.getElementById('outApostas')

    //concatena em resumo o resultado a ser exibido no elemento outApostas
    let resumo = 'Resultado final do páreo \n'
    resumo += `-----------------------------------------------\n`
    resumo += `Nº total de apostas ${apostas.length} \n`
    resumo += `Total Geral: R$ ${totalizarGeral().toFixed(2)}\n\n`
    resumo += `Ganhador Nº ${ganhador} - ${obterCavalo(ganhador)}\n`
    resumo += `---------------------------------------------------\n`
    resumo += `Nº de apostas: ${contarApostas(ganhador)}\n`
    resumo += `Total apostado R$ ${totalizarApostas(ganhador).toFixed(2)}`

    outApostas.textContent = resumo //exibe o resultado

    btApostar.disabled = true //desabilita os botões apostar e ganhador
    btGanhador.disabled = true

    btNovo.focus() //joga o foco no botão "Novo Páreo"
}

//cria referência ao botão e associa ao evento click a função indicada
let btGanhador = document.getElementById('btGanhador')
btGanhador.addEventListener('click', ganhadorPareo)

function totalizarGeral() {
    //percorre o vetor para somar o total das apostas
    for (let i=0; i<apostas.length; i++){
        total += apostas[i].valor
    }

    return total
}

//cria referência ao btNovo e cria função anônima associada ao evento click
