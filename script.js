// Turn On function

function bulbOn(){
    let bulbobj = document.querySelector(".bulboff");
    bulbobj.setAttribute("src", "image/bulb-on.png");
}

function bulbOff(){
    let bulbobj = document.querySelector(".bulboff");
    bulbobj.setAttribute("src", "image/bulb-off.png");
}