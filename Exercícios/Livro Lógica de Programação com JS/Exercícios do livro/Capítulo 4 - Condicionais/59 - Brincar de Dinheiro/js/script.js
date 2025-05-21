const frm = document.querySelector('form')
const dvMoedas = document.querySelector('#divMoedas')

window.addEventListener('load', () => {
    //gera números aleatórios, entre 1 e 5, para cada moeda
    const num1_00 = Math.ceil(Math.random()*5)
    const num0_50 = Math.ceil(Math.random()*5)
    const num0_25 = Math.ceil(Math.random()*5)
    const num0_10 = Math.ceil(Math.random()*5)

    //define texto alternativo das imagens
    const alt1_00 = 'Moedas de 1 real'
    const alt0_50 = 'Moedas de cinquenta centavos'
    const alt0_25 = 'Moedas de vinte e cinco centavos'
    const alt0_10 = 'Moedas de dez centavos'

    //chama o método criarMoedas passando os argumentos
    criarMoedas(num1_00, '1_00.jpeg', alt1_00, 'moeda1-00')
    criarMoedas(num0_50, '0_50.jpg', alt0_50, 'moeda0-50')
    criarMoedas(num0_25, '0_25.webp', alt0_25, 'moeda0-25')
    criarMoedas(num0_10, '0_10.jpg', alt0_10, 'moeda0-10')
})

const criarMoedas = (num, moeda, textoAlt, classe) => {
    //cria laço de repetição para inserir várias imagens na página
    for (let i=1; i<=num; i++) {
        const novaMoeda = document.createElement('img') //cria elemento img
        novaMoeda.src = 'img/' + moeda //atributo src
        novaMoeda.textAlt = textoAlt //texto alternativo
        novaMoeda.className = classe //classe da moeda (css)
        dvMoedas.append(novaMoeda) //hierarquia DOM
    }

    const br = document.createElement('br') //cria quebra de linha
    dvMoedas.appendChild(br)
}

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const soma = Number(frm.inSoma.value) //valor informado pelo usuário
    const moedas = dvMoedas.querySelectorAll('img') //obtém img filhas de dvMoedas
    let totalMoedas = 0 //declara e inicializa acumulador

    //percorre as tags img (em moedas) e verifica a propriedade className
    for (const moeda of moedas) {
        if (moeda.className === 'moeda1-00') {
            totalMoedas += 1
        } else if (moeda.className === 'moeda0-50') {
            totalMoedas += 0.5
        } else if (moeda.className === 'moeda0-25') {
            totalMoedas += 0.25
        } else {
            totalMoedas += 0.1
        }
    }

    const div = document.createElement('div')
    const h3 = document.createElement('h3')

    let mensagem

    //verifica se o valor informado é igual ao total de moedas exibido
    if (soma === Number(totalMoedas.toFixed(2))) {
        div.className = 'alert alert-success' //define a classe div
        mensagem = 'Parabéns! Você acertou!' //e mensagem a ser exibida
    } else {
        div.className = 'alert alert-danger'
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`
    }

    const texto = document.createTextNode(mensagem) //cria elemento de texto
    h3.appendChild(texto) //texto é filho de h3
    div.appendChild(h3) //h3 é filho da div criada na function
    dvMoedas.appendChild(div) //e a div com alerta é filha de divMoedas

    frm.submit.disabled = true //desabilita botão, já que resposta foi exibida
})

frm.addEventListener('reset', () => {
    window.location.reload()
})