function broken(x){
   let digits = x.split('')

   for (let i=0; i<digits.length; i++){
      if (digits[i] === '1') {
         digits[i] = '0'
      } else {
         digits[i] = '1'
      }
   }

   return digits.join()
}