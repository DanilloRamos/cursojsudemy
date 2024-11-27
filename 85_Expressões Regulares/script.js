const reg1 = new RegExp('bola')

console.log(reg1.test("Tem bola?"))
console.log(reg1.test("Não tem"))

const reg2 = /bola/

let texto = 'Tem bola na cesta'

console.log(reg2.test("Tem bola?"))
console.log(reg2.test("Não tem"))
console.log(reg2.test(texto))

console.log(/quadrado/.test("Onde tem um quadrado"))

const reg3 = /[12345]/

console.log(reg3.test("Temos o número 6"))
console.log(reg3.test("Temos o número 2"))

const reg4 = /[0-9]/

console.log(reg4.test("Temos o número 65"))