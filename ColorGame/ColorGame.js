var numSquers = 6;
var colors = generateRandomColors(numSquers);
var h1 = document.querySelector("h1");
var squeres = document.querySelectorAll(".squere");
var pickedcolor = pickSquere();
var colordisplay = document.getElementById("colordisplay");
colordisplay.textContent = pickedcolor;
var message = document.getElementById("message");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    h1.style.backgroundColor = "steelblue";
    reset.textContent = "new colors"
    message.textContent = "";
    numSquers = 3;
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(numSquers);
    pickedcolor = pickSquere();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < squeres.length; i++) {
        if (colors[i])
            squeres[i].style.backgroundColor = colors[i];
        else
            squeres[i].style.display = "none";
    }

})
hardBtn.addEventListener("click", function () {
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    reset.textContent = "new colors"
    numSquers = 6;
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors = generateRandomColors(numSquers);
    pickedcolor = pickSquere();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < squeres.length; i++) {
            squeres[i].style.backgroundColor = colors[i];
            squeres[i].style.display = "block";
    }
})


for (var i = 0; i < squeres.length; i++) {
    squeres[i].style.backgroundColor = colors[i];
    squeres[i].addEventListener("click", function () {
        var clickedcolor = this.style.backgroundColor;
        if (clickedcolor === pickedcolor) {
            message.textContent = "correct";
            changecolors(pickedcolor);
            h1.style.backgroundColor = pickedcolor;
            reset.textContent="play again?"
        }
        else {
            this.style.backgroundColor = "#000000";
            message.textContent = "try again";

        }
    })
}
function changecolors(color) {
    for (var i = 0; i < squeres.length; i++) {
        squeres[i].style.backgroundColor = color;
    }
}
function pickSquere() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num) {
    var arr=[];
    for (var i = 0; i < num; i++) {
        arr[i] = randomColor();
    }
    return arr;
}
function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red +", "+ green +", "+ blue+")";
    
}
//שינוי הצבעים וריענון
var reset = document.getElementById("reset");
reset.addEventListener("click", function () {
    colors = generateRandomColors(numSquers);
    pickedcolor = pickSquere();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < squeres.length; i++) {
        squeres[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    reset.textContent = "new colors"
})

