const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")
const status = document.querySelector("h3")

const pacientes = []
const atendidos = []

frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const nome = frm.inPac.value
    pacientes.push(nome)
    let lista = ''

    for (let i=0; i<pacientes.length; i++){
      lista += `${i+1}. ${pacientes[i]}\n`
    }
    
    respLista.innerText = lista
    frm.inPac.value = ''
    frm.inPac.focus()
})

//ouvinte para o evento click do botão Urgência

frm.btUrgencia.addEventListener("click", () => {
  //verifica se as validações do form estão ok (no caso, paciente is required)
  if (frm.checkValidity()){
    alert('Informe o nome do paciente a ser atendido em caráter de urgência')
    frm.inPac.focus()
    return
  }

  const nome = frm.inPac.value
  pacientes.unshift(nome)
  let lista = ''

  pacientes.forEach((paciente, i) => {
    lista += `${i+1}. ${paciente}\n`    
  })

  respLista.innerText = lista
    frm.inPac.value = ''
    frm.inPac.focus()
})

frm.btAtender.addEventListener("click", () => {
  if (pacientes.length === 0) {
    alert('Não há pacientes na lista de espera')
    frm.inPac.focus()
    return
  }

  const atender = pacientes.shift()
  atendidos.push(atender)
  respNome.innerText = atender //exibe o nome do paciente em atendimento
  let lista = ''
  pacientes.forEach((paciente,i) => (lista += `${i+1}. ${paciente}\n`))
  respLista.innerText = lista

})