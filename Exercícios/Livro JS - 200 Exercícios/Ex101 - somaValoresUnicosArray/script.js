function somaValoresUnicos(array){
    return array.filter(num=>array.indexOf(num)===array.lastIndexOf(num))
    .reduce((elem, elemAtual) => elem+elemAtual, 0)
}

const nums = [1,2,3,2,3,4,5]
console.log(somaValoresUnicos(nums))