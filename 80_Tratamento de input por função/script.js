function checarNumero(valor){
    let number = Number(valor)

    if (Number.isNaN(number)){
        alert('Por favor, informe somente números')
    } else {
        return number
    }
}

checarNumero(5)
checarNumero('asddhhs')

let number = prompt ('Digite um número: ')

checarNumero(number)