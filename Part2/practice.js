const mainButton = document.querySelector("#click");
console.log(mainButton)
const body = document.body;
const span2= document.querySelector("span");
function RandomColorGenerator(){
    const red = Math.floor(Math.random()*256); 
    const green = Math.floor(Math.random()*256); 
    const blue = Math.floor(Math.random()*256); 
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;
}

mainButton.addEventListener("click",()=>{
    const randomColor = RandomColorGenerator();
    body.style.backgroundColor = randomColor;
    span2.textContent= randomColor;
})
