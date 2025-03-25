function josephusSurvivor(n,k){
   let survivor = 0
   let index = k-1
   let circle = []

   for (let i=0; i<n; i++) circle.push(i+1)

   while (circle.length > 1) {
      index = index % circle.length
      circle = circle.splice(index, 1)
   }
 }