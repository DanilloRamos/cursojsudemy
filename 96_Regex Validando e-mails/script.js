const validarEmail = /\w+@\w+\.\w+/

console.log(validarEmail.test("danillo.ramos@ifs.edu.br"))
console.log(validarEmail.test("danillo.ramos@ifs"))
console.log(validarEmail.test("ifs.edu.br"))