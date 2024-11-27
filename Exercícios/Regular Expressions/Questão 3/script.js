const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(validaMarca.test("Marca: Nike"))
console.log(validaMarca.test("Marca: Mizuno"))