export class Set {
    constructor(){
        this.items = {}
        this.cont = 0
    }

    has (element){
        return element in this.items
    }

    add (element){
        if (!this.has(element)){
            this.items[element] = element
            this.cont++
            return true
        }
        return false
    }

    delete (element){
        if (this.has(element)){
            delete this.items[element]
            this.cont--
            return true
        }
        return false
    }

    clear(){
        this.items = {}
    }

    size(){
        return this.cont
    }

    values(){
        return Object.values(this.items) //devolve um array com os valores de todas as propriedades do objeto
    }

    union(otherSet){
        const unionSet = new Set()
        this.values().forEach(value => unionSet.add(value))
        otherSet.values().forEach(value => unionSet.add(value))

        return unionSet
    }

    intersection(otherSet){
        const intersectionSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()
        let biggerSet = values
        let smallerSet = otherValues

        if (otherValues.length - values.length > 0){
            biggerSet = otherValues
            smallerSet = values
        }

       smallerSet.forEach(value => {
        if (biggerSet.includes(value)){
            intersectionSet.add(value)
        }
       })
        return intersectionSet
    }

    difference(otherSet){
        const differenceSet = new Set()

        this.values().forEach(value =>{
            if (!otherSet.has(value)){
                differenceSet.add(value)
            }
        })

        return differenceSet
    }

    isSubsetOf(otherSet){
        if (this.size() > otherSet.size()) return false

        let isSubet = true

        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubet = false
                return false
            }
            return true
        })

        return isSubet
    }

    toString(){
        return `{${this.values().join(', ')}}`
    }
}