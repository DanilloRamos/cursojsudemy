function outed(meet, boss){
   
   let sum = 0
   let media = 0
   
   if (meet.hasOwnProperty(boss)) {
         meet[boss] *= 2
      }

   for (let person in meet){
      sum += meet[person]
   }

   media = sum/Object.keys(meet).length

   if (media <= 5) {
      return 'Get Out Now!'
   } else {
      return 'Nice Work Champ!'
   }
}