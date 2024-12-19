function filterList(l){    
    return l.filter(item => typeof item === 'number' && item >=0)
}

let arr1 = [1,2,'a','b']
console.log(filterList(arr1))

let arr2 = [1,2,'aasf','1','123',123]
console.log(filterList(arr2))

console.log(typeof('112'))