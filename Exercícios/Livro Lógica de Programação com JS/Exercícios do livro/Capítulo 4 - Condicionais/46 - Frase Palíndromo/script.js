const frm = document.querySelector('form')
const resp = document.querySelector('h3')


frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value
    const copia = frase.toLowerCase().replace(/\s/g, '')
    let invertida = ''

    for (let i=copia.length; i>=0; i--){
        invertida += `${copia.charAt(i)}`
    }

    let palindromo = ''

    invertida === copia ? palindromo = `${frase} é um palíndromo` : palindromo = `${frase} não é um palíndromo`

    resp.innerText = palindromo

})