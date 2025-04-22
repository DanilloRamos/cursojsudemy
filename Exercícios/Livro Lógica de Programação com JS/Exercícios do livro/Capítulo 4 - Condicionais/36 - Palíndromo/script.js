const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const palavra = frm.inPalavra.value.toUpperCase()
    let invertida = ''

    for (let i=palavra.length; i>=0; i--){
        invertida += palavra.charAt(i)
    }

    let palindromo = ``

    palavra === invertida ? palindromo = 'É palíndromo' : palindromo = `Não é palíndomo`

    resp.innerText = palindromo
})