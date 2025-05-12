const frm = document.querySelector('form')
const inClube = document.querySelector('#imgClube')
const dvTitulo = document.querySelector('#divTitulo')
const inRadios = document.querySelectorAll('input')

for (const inRadio of inRadios) {
    inRadio.addEventListener('change', trocarClube)
}

const trocarClube = () => {
    const clubes = ['Brasil','Pelotas','Farroupilha'] //lista dos clubes

    let selecao

    //percorre os inRadios para verificar qual está selecionado
    for (let i=0; i<inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i //se selecionado, armazena indice do radio
            break
        }
    }

    if (selecao <= 2){ //se selecao<=2, torce por algum clube
        dvTitulo.className = `row cores-${clubes[selecao]}` //modifica a cor

        //muda a propriedade src com a imagem do clube selecionado
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        imClube.className = 'img-fluid' //muda o estilo para exibir a imagem
        imClube.alt = `Simbolo do ${clube}` //modifica atributo alt

        localStorage.setItem('clube', clube) //salva no navegador a escolha do cliente        
        
    } else {
        dvTitulo.className = 'row'
        imClube.className = 'd-none'
        imClube = 'alt'
        localStorage.removeItem('clube')
    }


    //verificar se o cliente selecionou um clube em sua visita anterior
    const verificarClube = () => {
        if (localStorage.getItem('clube')) { //se já estiver salvo algum clube
            const clube = localStorage.getItem('clube') //obtém o nome do clube
        }

        if (clube === 'Brasil') { //conforme o clube, marca checked
            inRadios[0].checked = true
        } else if (clube === 'Pelotas') {
            inRadios[1].checked = true
        } else {
            inRadios[2].checked = true
        }

        trocarClube() //chama function que troca imagem e cores
    }

    
    //ao carregar a página, verifica se cliente já selecionou clube anteriormente
    window.addEventListener('load', verificarClube())



}
//associa ao evento change de cada botão do form a função trocarClube
frm.rbBrasil.addEventListener('change', trocarClube)
frm.rbPelotas.addEventListener('change', trocarClube)
frm.rbFarroupilha.addEventListener('change', trocarClube)

