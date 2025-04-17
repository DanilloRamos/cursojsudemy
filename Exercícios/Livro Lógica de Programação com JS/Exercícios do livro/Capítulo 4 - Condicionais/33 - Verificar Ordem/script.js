const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const resp2 = document.querySelector('h3')

const nums = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const num = Number(frm.inNum.value)
    nums.push(num)

    frm.inNum.value = ''
    frm.inNum.focus()

    resp.innerText = nums.join(', ')

})

frm.btVerificar.addEventListener('click', (e) => {
    e.preventDefault()

    const copia = [...nums].sort()
    const estaOrdenado = JSON.stringify(nums) === JSON.stringify(copia)
    let verifica = estaOrdenado ? 'Os números estão em ordem crescente':
                                  'Os números não estão em ordem crescente'

    resp2.innerText = verifica

})

frm.btLimpar.addEventListener('click', (e) => {
    e.preventDefault()

    resp.innerText = ''
    resp2.innerText = ''
    nums = []

})