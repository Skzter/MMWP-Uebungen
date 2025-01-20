let c = document.getElementById('mC');
var ctx_a = c.getContext("2d");
ctx_a.fillStyle = "pink";
ctx_a.fillRect(0, 0, 300, 150);


let c2 = document.getElementById('mC2');
var ctx2 = c2.getContext("2d");
ctx2.font = "48px serif";
ctx2.fillText("Hello world", 50, 90);

let c3 = document.getElementById('mC3');
var ctx3 = c3.getContext('2d');

macheBild();

function macheBild()
{
    img = new Image();
    img.src = "pictures/art.png";
    img.alt = "Kunst oder so";
    img.onload = function(){
        ctx3.drawImage(img, 0, 0, 300, 150);
        ctx3.lineWidth = 7;
        ctx3.strokeStyle = "black";

        //HK1-oben
        ctx3.beginPath();
        ctx3.fillStyle = "red";
        ctx3.arc(150, 75, 70, Math.PI, 2*Math.PI);
        ctx3.closePath();
        ctx3.fill();
        ctx3.stroke();

        //HK2-unten
        ctx3.beginPath();
        ctx3.fillStyle = "white";
        ctx3.arc(150, 75, 70, 0, Math.PI);
        ctx3.closePath();
        ctx3.fill();
        ctx3.stroke();

        // Kreis Mitte
        ctx3.beginPath();
        ctx3.arc(150, 75, 20, 0, 2*Math.PI);
        ctx3.closePath();
        ctx3.fill();
        ctx3.stroke();
    }
}

const ctx = document.getElementById('canvas').getContext("2d");
function spin()
{

}
