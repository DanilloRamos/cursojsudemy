function juntandoSequencias(a, b){
    a = a.sort()
    b = b.sort()

    let c = a.concat(b).sort()
    let d = new Set(a.concat(b).sort())
    let aux = new Set(b)
    let e = new Set([...a].filter(item => aux.has(item)))
    const f = a.filter(item=>b.includes(item))

    console.log(`União com repetição: ${c.join(' ')}`)
    console.log(`União sem repetição: ${Array.from(d).join(' ')}`)
    console.log(`Intersecção com repetição: ${f.join(' ')}`)
    console.log(`Intersecção sem repetição: ${Array.from(e).join(' ')}`)
}

let a = ['g', 'i',  'i', 'i', 'm', 'r', 't']
let b = ['d', 'g', 'g', 'i', 'i', 'k', 'o', 'o', 't']

juntandoSequencias(a,b)