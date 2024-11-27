const validarIP =/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validarIP.test("127.0.0.1"))
console.log(validarIP.test("127.2.0.1"))
console.log(validarIP.test("127.0.1"))