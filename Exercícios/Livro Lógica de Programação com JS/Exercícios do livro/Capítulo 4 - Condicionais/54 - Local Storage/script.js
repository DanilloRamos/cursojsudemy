const frm = document.querySelector('form')
const imClube = document.querySelector('#imgClube')
const dvTitulo = document.querySelector('#divTitulo')
const inRadios = document.querySelectorAll('input')

const trocarClube = () => {
    const clubes = ['Brasil', 'Pelotas', 'Farroupilha'] //lista de clubes

    let selecao

    //percorre os inRadios para verificar qual está selecionado
    for (let i=0; i<inRadios.length; i++){
        if (inRadios[i].checked) {
            selecao = i //se selecionado, armazena o índice do radio
            break
        }
    }

    if (selecao <= 2) { //se selecao <= 2, então torce por algum clube
        dvTitulo.className = `row cores-${clubes[selecao]}` //modifica a cor
        
        //muda a propriedade src com a imagem do clube selecionado
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        imClube.className = 'img-fluid' //muda estilo para exibir imagem
        imClube.alt = `Símbolo do ${clubes[selecao]}` //texto alternativo
        localStorage.setItem('clube', clubes[selecao]) //salva nome do clube
    } else { //selecionou nenhum
        dvTitulo.className = 'row' //tira a classe de cor de dvTitulo
        imClube.className = 'd-none' //oculta a imagem
        imClube.alt = '' //limpa texto alternativo
        localStorage.removeItem('clube') //remove variável local do localStorage
    }
} 

frm.rbBrasil.addEventListener('change', trocarClube)
frm.rbPelotas.addEventListener('change', trocarClube)
frm.rbFarroupilha.addEventListener('change', trocarClube)
frm.rbNenhum.addEventListener('change', trocarClube)

const verificarClube = () => {
    if (localStorage.getItem('clube')) { //se já estiver salvo algum clube
        const clube = localStorage.getItem('clube') //obtém o nome do clube
        //conforme o clube, marca um dos elementos do input type radio
        if (clube === 'Brasil') {
            inRadios[0].checked = true
        } else if (clube === 'Pelotas') {
            inRadios[1].checked = true
        } else {
            inRadios[2].checked = true
        }

        trocarClube() //chama a função que troca a imagem e as cores
    }
}

//ao carregar a página, verifica se cliente já selecionouo clube anteriormente
window.addEventListener('load', verificarClube)