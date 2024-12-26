function validatePIN(pin){
    let regexPIN = /^\d{4}$|^\d{6}$/

    return regexPIN.test(pin)
}

console.log(validatePIN('1234'))
console.log(validatePIN('12345'))
console.log(validatePIN('12346'))