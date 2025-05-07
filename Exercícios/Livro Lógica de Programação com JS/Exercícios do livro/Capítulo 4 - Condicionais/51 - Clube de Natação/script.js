const frm = document.querySelector('form')
const resp = document.querySelector('pre')


function retornarTracos(nome){
    const separado = nome.split('')
    let tracos = ''

    for(let i=0; i<separado.length; i++){
        if (separado[i] !== ' ') {
            tracos += '-'
        } else {
            tracos += ' '
        }
    }

    return tracos
}

function categorizarAluno(idade){
   const categoria = idade <= 12 ? 'Infantil' : 
    idade >= 13 && idade <= 18 ?  'Juvenil' : 'Adulto'

    return categoria
}

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

   const categoria = categorizarAluno(idade)

   
   resp.innerText = `${nome}\n${retornarTracos(nome)}\nCategoria: ${categoria}`
})