function noOdds( values ){
   let newValues = []

   for (let i=0; i<values.length; i++){
    if (values[i]%2 === 0) newValues.push(values[i])
   }

   return newValues
  }