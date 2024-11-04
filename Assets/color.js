start()
function start() {
    let btnEl = document.getElementById("btn")
    let pageEl = document.querySelector(".page")
    let innerPageEl = document.querySelector(".innerpage")
    btnEl.addEventListener("click",()=> {
        innerPageEl.textContent = "Background Color: " + getRandomColor()
        pageEl.style.backgroundColor = getRandomColor()
      })
}


function getRandomColor(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return "rgb("+r+", "+g+", "+b+")"
}
