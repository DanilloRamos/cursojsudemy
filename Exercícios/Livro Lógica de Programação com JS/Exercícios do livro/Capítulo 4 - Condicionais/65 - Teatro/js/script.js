const frm = document.querySelector('form')
const dvPalco = document.querySelector('#divPalco')

const POLTRONAS = 240 //número de poltronas do teatro
const reservadas = [] //vetor que armazena as poltronas reservadas

window.addEventListener('load', () => {
    //se houver dados salvos em localStorage, faz um split (';') e 
    //atribui esses dados ao array, caso contrário, o array é iniciado vazio
    const ocupadas = localStorage.getItem('teatroOcupadas') ?
    localStorage.getItem('teatroOcupadas').split(';') : []

    //repetição para montar o nº total de poltronas (definida na constante)
    console.log('Iniciando geração de poltronas...')
    for (let i=1; i<=POLTRONAS; i++){
        console.log('criando poltrona' + i)
        const figure = document.createElement('figure') //cria tag figure
        const imgStatus = document.createElement('img') //cria tag img

        //se a posição consta em ocupadas, exibe a imagem ocupada, senão, disponível
        imgStatus.src = ocupadas.includes(i.toString()) ? './img/ocupada.jpg' : './img/disponivel.jpg'
        imgStatus.className = 'poltrona' //classe com dimensão da img
        const figureCap = document.createElement('figcaption')

        //quantidade de zeros antes do número da poltrona
        const zeros = i < 10 ? '00' : i < 100 ? '0' : ''

        const num = document.createTextNode(`[${zeros}${i}]`) //cria texto

        figureCap.appendChild(num) //define os pais de cada tag criada
        figure.appendChild(imgStatus)
        figure.appendChild(figureCap)

        //se i%24 === 12 é o corredor: define margem direita 60px
        if (i % 24 === 12) figure.style.marginRight = '60px'

        dvPalco.appendChild(figure) //indica que figure é filha de divPalco

        //se i%24 === 0: o comando após && será executado (insere quebra de linha)
        if (i%24 === 0) {
            const br = document.createElement('br')
            dvPalco.appendChild(br)
        }
    }
})

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const poltrona = Number(frm.inPoltrona.value)

    //valida o preenchimento do campo de entrada (não pode ser maior que a const)
    if (poltrona > POLTRONAS) {
        alert('Informe um número de poltrona válido')
        frm.inPoltrona.focus()
        return
    }

    const ocupadas = localStorage.getItem('teatroOcupadas') ?
    localStorage.getItem('teatroOcupadas').split(';') : []

    //se poltrona escolhida já está ocupada (existe em localStorage)
    if (ocupadas.includes(poltrona.toString())) {
        alert(`Poltrona ${poltrona} já está ocupada`)
        frm.inPoltrona.value = ''
        frm.inPoltrona.focus()
        return
    }

    //captura imagem da poltrona, filha de divPalco
    const imgPoltrona = dvPalco.querySelectorAll('img')[poltrona-1]
    
    imgPoltrona.src = 'img/reservada.jpg' //modifica imagem

    reservadas.push(poltrona)

    frm.inPoltrona.value = ''
    frm.inPoltrona.focus()
})

frm.btConfirmar.addEventListener('click', () => {
    if (reservadas.length === 0){
        alert('Não há poltronas reservadas')
        frm.inPoltrona.focus()
        return
    }

    const ocupadas = localStorage.getItem('teatroOcupadas') ?
    localStorage.getItem('teatroOcupadas').split(';') :
    []

    //for decrescente, pois as reservas vão sendo removidas a cada alteração da imagem
    for (let i = reservadas.length - 1; i>=0; i--) {
        ocupadas.push(reservadas[i])

        //captura imagem da poltrona, filha de divPalco. É -1 pois começa em 0
        const imgPoltrona = dvPalco.querySelectorAll('img')[reservadas[i] - 1]

        imgPoltrona.src = './img/ocupada.jpg'
        reservadas.pop()
    }

    localStorage.setItem('teatroOcupadas', ocupadas.join(';'))
})