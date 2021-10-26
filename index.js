var color_button = document.getElementById("color_button");
var color = document.querySelector(".color");

color_button.addEventListener("click", function (){
    var red = Math.floor(Math.random()*255)
    var blue = Math.floor(Math.random()*255)
    var green = Math.floor(Math.random()*255)
    document.body.style.backgroundColor = "rgba(" + red + "," + blue + "," + green + ")"
})
