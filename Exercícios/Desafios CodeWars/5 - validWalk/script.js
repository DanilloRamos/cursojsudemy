function differenceBetweenYears(date1, date2){
    let ano1
    let ano2

    for (let i=0; i<3; i++){
        ano1 = parseInt(date1)
        ano2 = parseInt(date2)
    }

    if (ano1>ano2){
        return ano1-ano2
    } else {
        return ano2-ano1
    }
}

let date1 = '1997/10/10'
let date2 = '2015/10/10'

console.log(differenceBetweenYears(date1,date2))