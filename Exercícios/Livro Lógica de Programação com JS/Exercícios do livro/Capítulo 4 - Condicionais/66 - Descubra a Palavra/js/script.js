const frm = document.querySelector('form')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const palavra = frm.inPalavra.value.trim()
    const dica = frm.inDica.value

    //valida preenchimento (palavra não deve possuir espaço em branco no meio)
    if (palavra.includes(' ')){
        alert('Informe uma palavra válida, sem espaços!')
        frm.inPalavra.focus()
        return
    }

    //se já existem dados em localStorage, grava conteúdo anterior + ';' + palavra/dica
    if (localStorage.getItem('jogoPalavra')) {
        localStorage.setItem('jogoPalavra', localStorage.getItem('jogoPalavra') + ';' + palavra)
        localStorage.setItem('jogoDica', localStorage.getItem('jogoDica') + ';' + dica)
    } else {
        //senão é a primeira inclusão; grava apenas a palavra/dica
        localStorage.setItem('jogoPalavra', palavra)
        localStorage.setItem('jogoDica', dica)
    }

    //verifica se salvou
    if (localStorage.getItem('jogoPalavra')) {
        alert(`Ok! Palavra ${palavra} cadastrada com sucesso!`)
    }

    frm.reset()
    frm.inPalavra.focus()
})