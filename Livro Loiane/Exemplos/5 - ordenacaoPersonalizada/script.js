const friends = [
    {name: 'John', age:30},
    {name: 'Ana', age:20},
    {name: 'Chris', age:25}
]

function comparePerson(a, b){
    if (a.age < b.age){
        return -1
    }
    if (a.age > b.age){
        return 1
    }
    return 0
}

console.log(friends.sort(comparePerson))