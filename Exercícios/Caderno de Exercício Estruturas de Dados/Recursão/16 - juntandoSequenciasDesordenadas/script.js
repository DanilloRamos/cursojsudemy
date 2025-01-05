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

let a = ['g', 'z', 'r', 'i', 't', 'm', 'z', 'i', 'i']
let b = ['o', 'o','g', 't', 'i', 'g', 'k', 'i', 'd']

juntandoSequencias(a,b)