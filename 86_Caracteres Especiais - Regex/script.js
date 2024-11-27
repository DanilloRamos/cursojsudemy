 const pontoRegex = /./

 console.log(pontoRegex)
 console.log(pontoRegex.test("aaa"))
 console.log(pontoRegex.test(" "))
 console.log(pontoRegex.test("123"))
 console.log(pontoRegex.test("aaa123"))

 const dRegex = /\d/

 console.log(dRegex)
 console.log(dRegex.test("aaa"))
 console.log(dRegex.test(" "))
 console.log(dRegex.test("123"))
 console.log(dRegex.test("aaa123"))

 const dRegex2 = /\D/

 console.log(dRegex2)
 console.log(dRegex2.test("aaa"))
 console.log(dRegex2.test(" "))
 console.log(dRegex2.test("123"))
 console.log(dRegex2.test("aaa123"))

 const sRegex = /\s/

 console.log(sRegex)
 console.log(sRegex.test("aaa"))
 console.log(sRegex.test(" "))
 console.log(sRegex.test("123"))
 console.log(sRegex.test("aaa123"))

 const wRegex = /\w/

 console.log(wRegex)
 console.log(wRegex.test("aaa"))
 console.log(wRegex.test(" "))
 console.log(wRegex.test("123"))
 console.log(wRegex.test("aaa123"))
