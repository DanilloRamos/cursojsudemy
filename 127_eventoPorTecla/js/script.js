window.addEventListener("keydown", function(e) {
    if (e.key == 'q') {
        console.log("Apertou a letra q")
    } else if (e.key == 'Enter') {
        console.log("Apertou Enter!")
    }
})

window.addEventListener("keyup", function(e){
    if (e.key == 'Enter') {
        console.log("Soltou o Enter")
    }
})