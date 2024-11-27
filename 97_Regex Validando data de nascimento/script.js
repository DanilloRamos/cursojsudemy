const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validarDataNasc.test("31/07/1987"))
console.log(validarDataNasc.test("31/07/87"))
console.log(validarDataNasc.test("1/7/87"))
console.log(validarDataNasc.test("31-07-87"))

const validarDatas = /[0-31]{2}[/][0-12]{2}[/][1920-2024]{4}/

console.log(validarDatas.test("02/05/1989"))
console.log(validarDatas.test("32/05/1989"))