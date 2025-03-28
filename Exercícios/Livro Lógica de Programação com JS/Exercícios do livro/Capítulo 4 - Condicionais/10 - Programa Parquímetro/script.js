const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const valor = Number(frm.inValor.value)

    resp1.innerText = valor < 1 ? `Valor Insuficiente` : 
                      valor < 1.75 ? `Tempo de Permanência: 30 min` : 
                      valor < 3 ? `Tempo de Permanência: 60 min` : 
                                  `Tempo de Permanência: 120 min`

    const troco = valor > 3 ? (valor - 3) :
                  valor > 1.75 ? (valor - 1.75) :
                  valor > 1 ? (valor - 1) : 0
    
    resp2.innerText = troco > 0 ? `Troco: R$ ${troco.toFixed(2)}` : ""
} )