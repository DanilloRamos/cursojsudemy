function mostraPrimos(){
    for(let i=1;i<=100;i++){
        let primo = true
        for(let j=2;j<i;j++){
            if (i%j==0){
                primo = false
                break
            }
        }
        if (primo){
            console.log(i)
        }
    }
}

mostraPrimos()