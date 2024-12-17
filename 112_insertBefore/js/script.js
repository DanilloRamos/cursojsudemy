let novoElemento = document.createElement('p')
let elementoAlvo = document.querySelector('#titulo-principal')
let elementPai = document.querySelector('#conteiner-principal')

elementPai.insertBefore(novoElemento, elementoAlvo)

let texto = document.createTextNode('Algum texto')
novoElemento.appendChild(texto)