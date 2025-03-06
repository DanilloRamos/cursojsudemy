
let timeout

window.addEventListener("mousemove", function(e){
    this.clearTimeout(timeout)
    timeout = this.setTimeout(function() {
        console.log('x: ' + e.x)
    }, 500)
})