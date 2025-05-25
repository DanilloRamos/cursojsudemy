const frm = document.querySelector('form')
const dvQuadro = document.querySelector('#divQuadro')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const tarefa = frm.inTarefa.value

    if (confereTarefa(tarefa)) {
        frm.inTarefa.value = ''
        frm.inTarefa.focus()
        return
    }
    
    const h5 = document.createElement('h5') //cria o elemento h5 no HTML
    const texto = document.createTextNode(tarefa) //cria um texto
    h5.appendChild(texto) //define que texto será filho de h5
    dvQuadro.appendChild(h5) //e que h5 será filho de dvQuadro

    frm.inTarefa.value = ''
    frm.inTarefa.focus()
})

const confereTarefa = (tarefa) => {
    const tarefas = document.querySelectorAll('h5')

    for (let i=0; i<tarefas.length; i++) {
        if (tarefas[i].innerText === tarefa) {
            alert(`A tarefa ${tarefa} já está cadastrada`)
            return true
        }
    }

    return false
}

frm.btSelecionar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5')

    if (tarefas.length === 0) {
        alert('Não há tarefas para selecionar')
        return
    }

    let aux = -1 //auxiliar para indicar linha selecionada

    //percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for (let i=0; i<tarefas.length; i++){
        //se a tag é da class tarefa-selecionada
        if (tarefas[i].className === 'tarefa-selecionada'){
            tarefas[i].className = 'tarefa-normal' //troca para normal
            aux = i 
            break
        }
    }

    if (aux === tarefas.length-1) {
        aux = -1
    }

    tarefas[aux+1].className = 'tarefa-selecionada' //muda o estilo da próxima linha
})

frm.btRetirar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5')

    let aux = -1

    tarefas.forEach((tarefa, i) => {
        if (tarefa.className === 'tarefa-selecionada') aux = i
    })

    if (aux === -1) { //se não há tarefa selecionada ou se lista está vazia
        alert('Selecione uma tarefa para removê-la')
        return
    }

    if (confirm(`Confirma exclusão de ${tarefas[aux].innerText}?`)) {
        dvQuadro.removeChild(tarefas[aux]) //remove um dos filhos de divQuadro
    }
})

frm.btGravar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5')

    if (tarefas.length === 0){
        alert ('Não há tarefas a serem salvas')
        return
    }

    let dados = ''
    tarefas.forEach(tarefa => {
        dados += `${tarefa.innerText};` //acumula conteúdo de h5
    })

    //grava em localStorage, removendo o último ';'
    localStorage.setItem('tarefasDia', dados.slice(0,-1))

    //confere os dados armazenados em localStorage
    if (localStorage.getItem('tarefasDia')) alert('Tarefas salvas com sucesso')
})

frm.btLimpar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5')

    if (confirm('Deseja limpar a tela?')) {
        tarefas.forEach(tarefa => {
        tarefa.innerText = ''
    })
  }
})

frm.btRestaurar.addEventListener('click', () => {
    //dvQuadro.innerText = ''

    const tarefasSalvas = localStorage.getItem('tarefasDia')

    if (!tarefasSalvas) {
        alert('Não há tarefas a serem restauradas')
        return
    }

    //divide as tarefas por separados
    const listaTarefas = tarefasSalvas.split(';')

    //Para cada tarefa, cria um h5 e adiciona ao quadro
    listaTarefas.forEach(tarefa => {
        const h5 = document.createElement('h5')
        const texto = document.createTextNode(tarefa)
        h5.appendChild(texto)
        dvQuadro.appendChild(h5)
    })

    alert('Tarefas restauradas com sucesso!')
})