function meeting(x, need){
   
   let availableChairs = []
   let sum = 0

   if (need === 0) return 'Game On'
   
   for (let i=0; i<x.length; i++){
      let occupants = x[i][0].length
      let chairs = x[i][1]

      let chairsAvailable = Math.max(0, chairs - occupants)

      availableChairs.push(Math.min(chairsAvailable, need-sum))

      sum += availableChairs[i]

      if (sum >= need) break
   }

   if (sum < need) return 'Not enough!'

   return availableChairs
}