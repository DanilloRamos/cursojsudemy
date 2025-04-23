const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const senha = frm.inSenha.value
    const erros = []

    if (senha.length < 8 || senha.length > 15) erros.push(' possuir entre 8 e 15 caracteres')

    if (!senha.match(/[0-9]/g)) erros.push(' possuir números (pelo menos 1)')

    if (!senha.match(/[a-z]/g)) erros.push(' possuir letras minúsculas (pelo menos 1)')
    
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length === 1) erros.push(' possuir letras maiúsculas (pelo menos 2)') 
    
    if (!senha.match(/[\W|_]/g)) erros.push(' possuir caracteres especiais (pelo menos 1)')

    let validar = ''

    erros.length === 0 ? validar = 'Ok! Senha Válida!' : validar = `Erro... A senha deve${erros.join(", ")}`

    resp.innerText = validar
})