function calculaCrescimento(){
  let a = 80000
  let b = 200000
  let cont = 0

  do {
    if (a>=b){
      return cont
      break
    }

    a*=1.03
    b*=1.015
    cont++
  } while (a<b)
}

console.log(`São necessários ${calculaCrescimento()} anos para que A ultrapasse B`)