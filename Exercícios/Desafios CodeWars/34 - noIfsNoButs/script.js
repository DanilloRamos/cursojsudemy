function noIfsNoButs(a, b) {
   const results = {
      "1":`${a} is greater than ${b}`,
      "-1":`${a} is smaller than ${b}`,
      "0": `${a} is equal to ${b}`
   }

   return results[Math.sign(a-b)]
}