function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
function move() {
    var left;
    var top;
    var wh;
    left = Math.random() * 500;
    top = Math.random() * 500;
    wh = (Math.random() * 500) + 100;
    document.getElementById('box').style.left = left + "px";
    document.getElementById('box').style.top = top + "px";
    document.getElementById('box').style.width = wh + "px";
    document.getElementById('box').style.height = wh + "px";
    document.getElementById('box').style.display = "block";
    document.getElementById('box').style.backgroundColor = getRandomColor();
    start = new Date().getTime();
}
move();
document.getElementById('box').onclick = function () {
    document.getElementById('box').style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 60; //divide 1000 to calculate seconds
    alert(timeTaken);
    move();
}
