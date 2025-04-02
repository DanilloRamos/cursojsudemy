const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const modelo = frm.inModel.value
    const preco = Number(frm.inPreco.value)

    carros.push({modelo,preco})

    frm.inModel.value = ''
    frm.inPreco.value = ''

    frm.inModel.focus()

    frm.btTodos.dispatchEvent(new Event('click'))
})

frm.btTodos.addEventListener("click", (e) => {
    e.preventDefault()

    if (carros.length === 0) {
        alert("Não existem carros cadastrados")
        return
    }

    const lista = carros.reduce((acum, carro) =>
        acum + carro.modelo + ' - R$ '+ carro.preco.toFixed(2) + '\n',''
    )

    resp.innerText = `Lista dos carros cadastrados \n ${'-'.repeat(40)}\n ${lista}`
})

frm.btPreco.addEventListener("click", (e) => {
    
    e.preventDefault()

    const temp = prompt("Qual o valor máximo que o cliente quer pagar?")
    
    while(isNaN(temp)) {
        temp = prompt("O valor informado não é um número. Informe um valor válido:")
    }

    const max = Number(temp)

    const carrosFilter = carros.filter(carro => carro.preco <= max)

    if (carrosFilter.length === 0) return `Não há carros cadastrados na faixa de preço informada`

    let lista = ``

    for (const carro of carrosFilter) lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`

    resp.innerText = `Carros até o preço procurado: \n ${'-'.repeat(40)}\n ${lista}`
})

frm.btSimular.addEventListener("click", (e) => {
    e.preventDefault()

    let temp = prompt(`Informe o percentual de desconto: `)

    while(isNaN(temp)) {
        temp = prompt(`Percentual inválido. Informe um valor percentual válido`)
    }
    
    const perc = Number(temp)

   const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco*perc/100)
    }))

    let lista = ``

    for (const carro of carrosDesc) lista += `${carro.modelo} -  R$ ${carro.preco.toFixed(2)}\n`
    
    resp.innerText = `Preços com o desconto aplicado: ${perc}%\n ${'-'.repeat(40)}\n ${lista}`

})