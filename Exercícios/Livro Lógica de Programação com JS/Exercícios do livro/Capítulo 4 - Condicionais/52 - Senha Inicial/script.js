const frm = document.querySelector('form')
const resp = document.getElementById('h1')


function validarNome(nome){
    const separaNome = nome.split(' ')
    
    const valido = separaNome.length <= 1 ? false : true

    return valido
}

function obterSobrenome(nome) {
    const separaNome = nome.split(' ')
    const sobrenome = separaNome[separaNome.length-1]

    return sobrenome
}

function contaVogais(nome){
    const separaNome = nome.split('')
    let vogais = 0

    for (let i=0; i<separaNome.length; i++){
        if (separaNome[i].toLowerCase() === 'a' || separaNome[i].toLowerCase() === 'e' ||
        separaNome[i].toLowerCase() === 'i' || separaNome[i].toLowerCase() === 'o' || separaNome[i].toLowerCase() === 'u')
            vogais++
    }

    return vogais
}

frm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const nome = frm.inNome.value

    let senhaInicial = obterSobrenome(nome)

    if (contaVogais(nome) < 10) {
        senhaInicial += `0${contaVogais(nome)}`
    }

    resp.innerText = `Senha Inicial: ${senhaInicial.toLowerCase()}`
})