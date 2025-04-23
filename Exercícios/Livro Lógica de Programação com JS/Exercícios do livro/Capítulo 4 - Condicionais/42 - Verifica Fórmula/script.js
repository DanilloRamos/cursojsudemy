const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formula = frm.inFormula.value
    let abre = 0
    let fecha = 0
    let op = 0
    let erros = []


    for (const simbolo of formula) {
        simbolo === '(' || simbolo === '[' ? abre++ : simbolo === ')' || simbolo === ']' ?
        fecha ++ : undefined

        if (fecha > abre) break
    }

    for (const operador of formula) {
        operador === '+' || operador === '*' || operador === '/' || operador === '-' ? op++ : 
        resp.innerText = 'A expressão deve ter pelo menos um operador'
    }

    
})