const frm = document.querySelector("form")
const resp = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

   const valor = Number(frm.inValue.value)
   const parcelas = Number(frm.inParc.value)
   let centavos = 0
   let valores = ``
   let parcelaBruta = valor/parcelas

   for (let i=0; i<parcelas; i++){
      valores += `Parcela ${i+1}: R$ ${Math.floor(parcelaBruta.toFixed(2))}\n`
      centavos += (parcelaBruta - Math.floor(parcelaBruta))
}

  let parcelaFinal = parcelaBruta+centavos
  valores += `Parcela ${parcelas}: R$ ${parcelaFinal.toFixed(2)}\n`
   
   resp.innerText = `${valores}`
})