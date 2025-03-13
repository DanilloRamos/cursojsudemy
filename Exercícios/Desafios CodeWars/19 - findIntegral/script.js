function integrate(coefficient, exponent) {
    if (coefficient < 0 || exponent < 0) return null

    let newExp = exponent + 1
    let newCoef = coefficient/newExp
    
    return `${newCoef}x^${newExp}`
}