function juntandoSequencias(a, b){

    let c = a.concat(b)
    let d = new Set(a.concat(b))
    let aux = new Set(b)
    let e = new Set([...a].filter(item => aux.has(item)))
    const f = a.filter(item=>b.includes(item))

    console.log(`União com repetição: ${c.join(' ')}`)
    console.log(`União sem repetição: ${Array.from(d).join(' ')}`)
    console.log(`Intersecção com repetição: ${f.join(' ')}`)
    console.log(`Intersecção sem repetição: ${Array.from(e).join(' ')}`)
}

let a = [1,3,8,9,7,0,-5, 9]
let b = [2,7,0,9,8,10,15, -5]

juntandoSequencias(a,b)

let c = [3,'d', 4, '@', '%']
let d = [3, '@', '%']

juntandoSequencias(c,d)