const validaStringTerminadaEmID = /\d+ID\b/

console.log(validaStringTerminadaEmID.test("345ID"))
console.log(validaStringTerminadaEmID.test("ID"))
console.log(validaStringTerminadaEmID.test("345"))