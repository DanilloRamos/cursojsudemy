const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(validarNomeUsuario.test("danillo_123"))
console.log(validarNomeUsuario.test("ds"))
console.log(validarNomeUsuario.test("dsaoaifhofnalkfnosiafslkmflsaifhoaifnwkl"))
