const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    const triangulo = ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB ? 
                      false : true

    resp1.innerText = triangulo ? `Lados podem formar um triângulo` : `Lados não podem formar um triângulo`

    resp2.innerText = triangulo ? ladoA === ladoB && ladoB === ladoC ? `Tipo: Equilátero` :
                      ladoA === ladoB || ladoA === ladoC || ladoB === ladoC ? `Tipo: Isósceles` :
                      `Tipo: Escaleno` : ''
})