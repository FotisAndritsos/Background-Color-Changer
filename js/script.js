
//we select button and body
const btn = document.querySelector("button")
const body = document.querySelector("body");

//we have our colors
const colors = ["green", "red", "blue", "pink"];

//we give our body a background color(js)
body.style.backgroundColor = "black";

//we add an click event to our button running a function
btn.addEventListener('click',colorChanger);

//our function
function colorChanger(){
    colorIn = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIn];
}