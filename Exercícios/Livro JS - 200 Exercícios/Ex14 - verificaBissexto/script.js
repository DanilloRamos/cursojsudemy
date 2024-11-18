function verificaBissexto(ano){
    if ((ano%4==0 && ano%100!=0) || (ano%400!=0)){
        console.log(`${ano} é bissexto`)
    } else {
        console.log(`${ano} não é bissexto`)
    }
}

verificaBissexto(2000)
verificaBissexto(2001)
verificaBissexto(2100)