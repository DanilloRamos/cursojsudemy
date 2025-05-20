const frm = document.querySelector('form')
const dvQuadro = document.querySelector('#divQuadro')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const tarefa = frm.inTarefa.value

    const h5 = document.createElement('h5') //cria o elemento HTML h5
    const texto = document.createTextNode(tarefa) //cria um texto
    h5.appendChild(texto) //define que texto será filho do h5
    dvQuadro.appendChild(h5) //e que h5 será filho do divQuadro

    frm.inTarefa.value = ''
    frm.inTarefa.focus()
})

frm.btSelecionar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5')

    if (tarefas.length === 0) {
        alert('Não há tarefas para selecionar')
        return
    }

    let aux = -1 //variável para auxiliar para indicar linha selecionada

    //percorre a lista de tarefas
    for (let i=0; i<tarefas.length; i++){
        //se a tag é da class tarefa-selecionada
        if(tarefas[i].className === 'tarefa-selecionada') {
            tarefas[i].className = 'tarefa-normal' //troca para normal
            aux = i
            break
        }
    }

    //se a linha que está selecionada é a última, irá voltar para a primeira
    if (aux === tarefas.length - 1) aux = -1

    tarefas[aux+1].className = 'tarefa-selecionada' //muda estilo da próxima linha
})

frm.btRetirar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5') //obtém as tags h5 da página

    let aux = -1
    
    //percorre a lista de tarefas inseridas
    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == 'tarefa-selecionada')  aux = i
    })

    if (aux === -1) {
        alert('Selecione uma tarefa para removê-la')
        return
    }

    if (confirm(`Confirma exclusão de ${tarefas[aux].innerText}?`)) dvQuadro.removeChild(tarefas[aux])
})

frm.btGravar.addEventListener('click', (e) => {
    const tarefas = document.querySelectorAll('h5')

    if (tarefas.length === 0) {
        alert ('Não há tarefas a serem salvas')
        return
    }

    let dados = '' //acumulará os dados a serem salvos

    tarefas.forEach(tarefa => {
        dados += `${tarefas.innerText};` //acumula conteúdo de cada h5
    })

    //grava os dados em localStorage, removendo o último ";"
    localStorage.setItem('tarefasDia', dados.slice(0,-1))

    //confere se os dados foram armazenados em localStorage
    if (localStorage.getItem('tarefasDia')) alert('Tarefas salvas com sucesso!')
})

window.addEventListener('load', () => {
    //verifica se há tarefas salvas no navegador
    if (localStorage.getItem('tarefasDia')) {
        //cria um vetor com a lista de tarefas separadas pelo split ';'
        const dados = localStorage.getItem('tarefasDia').split(';')
    }

    //percorre os dados armazenados em localStorage
    dados.forEach(dado => {
        const h5 = document.createElement('h5') //cria o elemento h5
        const texto = document.createTextNode(dado) //cria um texto
        h5.appendChild(texto) //define que texto será filho de h5
        dvQuadro.appendChild(h5) //e h5 será filho de dvQuadro
    })
})