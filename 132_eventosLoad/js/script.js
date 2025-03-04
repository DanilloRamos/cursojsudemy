window.addEventListener("load", function(){
    alert("Assine os nossos termos de uso!")
})

window.addEventListener("beforeunload", function(e){
    this.event.returnValue = null
})