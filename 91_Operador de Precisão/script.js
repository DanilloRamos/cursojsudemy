const cep = /\d{5}-\d{3}/

console.log(cep.test("49400-000"))
console.log(cep.test("xxx"))
console.log(cep.test("4940-000"))

const telefone = /\(\d{2}\)\d{4,5}-\d{4}/

console.log(telefone.test("(79)99970-2039"))
console.log(telefone.test("(79)999702039"))
console.log(telefone.test("(79)970-2039"))