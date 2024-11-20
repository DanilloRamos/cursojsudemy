function aplicarCallbackNVezes(vezes,callback,valorInicial){
  let valor = valorInicial
  for (let i=0;i<vezes;i++){
    callback.forEach(callback => {
      valor = callback(valor)
    });
  }
 return valor
}

let callback = [num=>num*2,num=>num+1]
let valor = 1

console.log(aplicarCallbackNVezes(2,callback, valor))

