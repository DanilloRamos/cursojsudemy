const frm = document.querySelector("form")
const resp = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    
    e.preventDefault()
    const ano = Number(frm.inAno.value)
    let resposta = ''
    

      if (ano === 1942 || ano === 1946) resp.innerText = `Não houve Copa do Mundo em ${ano}: Segunda Guerra Mundial \n`

      if (ano >= 1930 && ano%4 === 2) {
        resposta += `${ano} é ano de Copa do Mundo\n`
      } else {
         resposta += `${ano} não é ano de Copa do Mundo\n`
      }
      
  resp.innerText = resposta

  frm.inAno.value = ''
  frm.inAno.focus()
})