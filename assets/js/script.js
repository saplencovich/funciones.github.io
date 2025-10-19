const ele = document.getElementById("ele1");

function pintar(color = "green", event) {
    event.target.style.backgroundColor = color;
}

ele.addEventListener("click", function(event) {
    pintar("yellow", event);
});
