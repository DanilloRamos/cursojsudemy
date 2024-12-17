let lista = document.createElement('ul')


for (let i=0;i<5;i++){
    
    let item = document.createElement('li')

    let texto = document.createTextNode('texto-lista'+i)

    item.appendChild(texto)
    lista.appendChild(item)
}

let conteiner = document.getElementById('conteiner-principal')
conteiner.appendChild(lista)