const frm = document.querySelector("form")
const resp = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const fruta = frm.inFruta.value
    const rep = Number(frm.inRep.value)

    if (!fruta) {
      resp.innerText = `Por favor, digite uma fruta`
      return
    }

    if (isNaN(rep)){
      resp.innerText = `Quantidade inválida. Digite um número`
      return
    }

    if (rep <= 0){
      resp.innerText = `A quantidade deve ser maior que zero`
    }
    
    const ft = Array(rep).fill(fruta)

    resp.innerText = ft.join(' * ')

    frm.reset()
    frm.inFruta.focus()
})