const incrementar = base => () => ++base

const incrementa5 = incrementar(5)

console.log(incrementa5())
console.log(incrementa5())
console.log(incrementa5())