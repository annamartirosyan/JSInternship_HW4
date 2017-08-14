function bgcolor(color) {
    return function() {
        return document.body.style.backgroundColor=color;
    };
}

document.getElementById("blue").onclick=bgcolor("blue");
document.getElementById("green").onclick=bgcolor("green");
document.getElementById("red").onclick=bgcolor("red");
document.getElementById("yellow").onclick=bgcolor("yellow");
