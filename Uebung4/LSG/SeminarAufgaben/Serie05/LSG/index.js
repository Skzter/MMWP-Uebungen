let c = document.getElementById('mC');
var ctx = c.getContext("2d");
ctx.fillStyle = "pink";
ctx.fillRect(0, 0, 300, 100);


let c2 = document.getElementById('mC2');
var ctx2 = c2.getContext("2d");
ctx2.font = "48px serif";
ctx2.fillText("Hello world", 50, 90);

function setCanvas2D()
{
    let c3 = document.getElementById('mC3');
    var ctx3 = c3.getContext('2d');
}

setCanvas2D();
