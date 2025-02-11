import { defaultToString } from './util.js'
import { ValuePair } from './valuepair.js'

export default class Dictionary{
    
    constructor (toStrFn = defaultToString){
        this.toStrFn = toStrFn
        this.table = {}
    }

    hasKey(key){
        return this.table[this.toStrFn(key)] != null
    }

    set (key, value){
        if (key != null && value != null){
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key, value)
            return true
        }

        return false
    }
    
    remove (key){
        if (this.hasKey(key)){
            delete this.table[this.toStrFn(key)]
            return true
        }

        return false
    }

    get (key){
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair == null ? undefined:valuePair.value
    }

    set (key, value){
        if (key != null && value != null){
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key, value)
            return true
        }

        return false
    }

    keyValues(){
        return Object.values(this.table)
    }

    keys(){
        return this.keyValues().map(valuePair => valuePair.key)
    }

    values(){
        return this.keyValues().map(valuePair => valuePair.value)
    }

    forEach(callbackFn){
        const valuePairs = this.keyValues()
        for (let i=0; i < valuePairs.length; i++){
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)

            if (result === false){
                break
            }
        }
    }
}