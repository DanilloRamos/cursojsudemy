const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    resp1.innerText = ''

    const num = Number(frm.inNum.value)
    let divs = []
    let somaDivs = 0

    for (let i=1; i<num; i++){
      if (num%i === 0){
        divs.push(i)
        somaDivs += i
      }
    }

    if (somaDivs === num) {
      resp1.innerText = `Divisores de ${num}: ${divs.join(', ')} (Soma: ${somaDivs})`
      resp2.innerText = `${num} é um número perfeito`
    } else {
      resp2.innerText = `${num} não é um número perfeito`
    }
    

    frm.reset()
    frm.inNum.focus()
})