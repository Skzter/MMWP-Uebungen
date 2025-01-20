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

function clock() {
  const now = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Hour marks
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const sec = now.getSeconds();
  // To display a clock with a sweeping second hand, use:
  // const sec = now.getSeconds() + now.getMilliseconds() / 1000;
  const min = now.getMinutes();
  const hr = now.getHours() % 12;

  ctx.fillStyle = "black";

  // Write image description
  canvas.innerText = `The time is: ${hr}:${min}`;

  // Write Hours
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgb(0 0 0 / 0%)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);


