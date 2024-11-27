const dia =/\d\d/

console.log(dia.test("2024")&&"2024".length==2)
console.log(dia.test("Segunda"))
console.log(dia.test("05")&&"05".length==2)

const palavraTresLetras = /\w\w\w/

console.log(palavraTresLetras.test("asd")&&"asd".length==3)
console.log(palavraTresLetras.test("asdd")&&"asdd".length==3)
console.log(palavraTresLetras.test("as"))
