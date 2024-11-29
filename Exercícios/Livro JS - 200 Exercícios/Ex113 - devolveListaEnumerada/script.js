function devolveListaEnumerada(array){
    return array.map((item,index)=>`${index+1}. ${item}`).join(`\n`)
 }
 
 let array = ['maçã','banana','uva']
 
 console.log(devolveListaEnumerada(array))