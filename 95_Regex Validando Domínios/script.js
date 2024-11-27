const validarDominio = /[?www.]\w+\.com.br|.com/

console.log(validarDominio.test("www.google.com"))
console.log(validarDominio.test("www.facebook.com.br"))
console.log(validarDominio.test("www.facebook"))
console.log(validarDominio.test("google.com"))