//cria referência ao form e aos elementos h3 e h4 (respostas)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit",(e) => {
    const quilo = Number(frm.inQuilo.value) //obtém conteúdo dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo/1000)*consumo

    resp.innerText = `Valor a pagar: R$${valor.toFixed(2)}` //exibe as respostas

    e.preventDefault()
})