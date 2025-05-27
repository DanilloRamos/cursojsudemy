const tbPalavras = document.querySelector('table')
const ckMostrar = document.querySelector("input[type='checkbox']") //cria referência ao checkbox

const montarTabela = () => {
    //se houver dados salvos em localStorage
    if (localStorage.getItem('jogoPalavra')) {
        //obtém conteúdo e transforma em elementos de vetor
        const palavras = localStorage.getItem('jogoPalavra').split(';')
        const dicas = localStorage.getItem('jogoDica').split(';')

        //percorre os elementos do vetor e os insere na tabela
        for (let i=0; i<palavras.length; i++){
            const linha = tbPalavras.insertRow(-1) //adiciona uma linha na tabela

            //cria colunas na tabela inserida
            const col1 = linha.insertCell(0)
            const col2 = linha.insertCell(1)
            const col3 = linha.insertCell(2)

            col1.innerText = palavras[i]
            col2.innerText = dicas [i]
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>"
        }
    }
}

ckMostrar.addEventListener('change', () => {
    ckMostrar.checked ? montarTabela() : window.location.reload()
})

tbPalavras.addEventListener('click', (e) => {
    //se a classe do elemento alvo clicado contém exclui
    if (e.target.classList.contains('exclui')) {
        //acessa o pai do pai do elemento alvo, e obtém o texto do 1º filho
        const palavra = e.target.parentElement.parentElement.children[0].innerText

        if(confirm(`Confirma exclusão da palavra ${palavra}?` )) {
            //remove a linha da tabela correspondente ao símbolo de excluir clicado
            e.target.parentElement.parentElement.remove()

            localStorage.removeItem('jogoPalavra') //exclui dados do localStorage
            localStorage.removeItem('jogoDica')

            const palavras = []
            const dicas = []

            //obtém os dados da tabela, acrescentando-os aos vetores
            for (let i=1; i<tbPalavras.rows.length; i++){
                palavras.push(tbPalavras.rows[i].cells[0].innerText)
                dicas.push(tbPalavras.rows[i].cells[0].innerText)
            }

            //salva o conteúdo dos vetores em localStorage, sem a linha removida
            localStorage.setItem('jogoPalavra', palavras.join(';'))
            localStorage.setItem('jogoDica', dicas.join(';'))
        }
    }
})