const frm = document.querySelector("form")
const resp = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const num = Number(frm.inNum.value)
    let div = 0
    let aux = num

    while(aux >= 1){
      if (num%aux ===0) div++

      aux--
    }

    if (div === 2){
      resp.innerText = `${num} é primo`
    } else {
      resp.innerText = `${num} não é primo`
    }
})