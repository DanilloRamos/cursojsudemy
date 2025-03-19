function reduce(fraction) {
    
   const [numerator, denominator] = fraction
   
   function calculateMDC (a,b){
       while(b != 0){
           const temp = b
           b = a%b
           a = temp
       }
       return a
   }

   const mdc = calculateMDC(numerator, denominator)
   
   const reducedNum = numerator/mdc
   const reducedDen = denominator/mdc
   
   return [reducedNum,reducedDen]
}

let fraction = [45,120]

console.log(reduce(fraction))