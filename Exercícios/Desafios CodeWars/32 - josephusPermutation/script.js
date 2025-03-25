function josephusSurvivor(n,k){
   let index = k-1
   let circle = []

   for (let i=0; i<n; i++) circle.push(i+1)

   while (circle.length > 1) {
      index = index % circle.length
      circle.splice(index, 1)
      index += k-1
   }

   return Number(circle)
 }
