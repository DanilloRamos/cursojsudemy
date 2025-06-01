const frm = document.querySelector('form')
const resp = document.querySelector('#divElem')
const vet = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const num = Number(frm.inNum.value)

    vet.push(num)

    //let lista = ``

    resp.innerText = vet.join(',')
    frm.inNum.value = ''
    frm.inNum.focus()    
})

frm.btVerificar.addEventListener('click', (e) => {
})

const soma = (nums, target) => {
    let retorno = []

    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            if (nums[i] + nums[j] === target){
                retorno.push(i, j)
                return retorno
            }
        }
    }

    return retorno
}