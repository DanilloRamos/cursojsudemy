let elemento = document.querySelector('#titulo-principal')

//considera as bordas
console.log('Largura: '+elemento.offsetWidth)
console.log('Altura: '+elemento.offsetHeidth)

//desconsidera as bordas
console.log('Largura: '+elemento.clientWidth)
console.log('Altura: '+elemento.clientHeight)