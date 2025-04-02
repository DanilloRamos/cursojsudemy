const frm = document.querySelector("form")
const respErros = document.querySelector("erros")
const respChances = document.querySelector("chances")
const respDicas = document.querySelector("dica")

const erros = []
const sorteado = Math.floor(Math.round()*100) + 1
const chances = 6

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const num = Number(frm.inChute.value)

  if (num == sorteado){
    respDicas.innerText = `Parabéns! Número sorteado: ${sorteado}`
    frm.btSubmit.disabled = true
    frm.btNovo.className = 'exibe'
  } else {
    if (erros.includes(num)) {
      alert(`Você já apostou o número ${num}. Tente outro número...`)
    } else {
      erros.push(num)
      const numErros = erros.length
      const numChances = chances - numErros

      respErros.innerText = `${numErros} (${erros.join(", ")})`
      respChances.innerText = numChances

      if (numChances == 0) {
        alert('Suas chances acabaram...')
        frm.btSubmit.disabled = true
        frm.btNovo.className = 'exibe'

        respDicas.innerText = `Game over. Número sorteado: ${sorteado}`
      } else {
        const dica = num < sorteado ? 'maior' : 'menor'
        respDicas = `Dica: tente um número ${dica} que ${num}`
      }
    }
  }
})