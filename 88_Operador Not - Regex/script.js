const notAB = /[^ab]/

console.log(notAB.test("a"))
console.log(notAB.test("aqui tem a"))

const notToAZ = /[^a-z]/

console.log(notToAZ.test("asz"))
console.log(notToAZ.test("123 asz"))