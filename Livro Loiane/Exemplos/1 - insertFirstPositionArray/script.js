Array.prototype.insertFirstPosition = function(value){
    for (let i=this.length; i>=0; i--){
        this[i] = this[i-1]
    }

    this[0] = value
}

let numbers = [0,1,2,3,4,5,6,7,8,9]
console.log(`Array antes da inserção: ${numbers.join(', ')}`)
numbers.insertFirstPosition(-1)
console.log(`Array após a inserção: ${numbers.join(', ')}`)