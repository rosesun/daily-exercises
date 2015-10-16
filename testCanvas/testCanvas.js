/**
 * Created by Administrator on 2015/9/28.
 */
var canvas = document.getElementById("canvas");
if ( canvas.getContext){
    var ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;

}
function drawLine(){
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(200,20);
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "red";
    //ctx.lineTo(200, 100);
    //ctx.lineTo(20, 20);
    ctx.stroke();
    ctx.closePath();
}

function drawRect(){
    //ctx.fillRect(10,30,200,100);
    //ctx.strokeRect(10,30,200,100);//√Ë±ﬂ
    ctx.fillStyle = "red";
    ctx.fillRect(10,30,200,100);
}

function drawCircle(){
    var myGradient = ctx.createLinearGradient(0, 0, 0, 160);
    myGradient.addColorStop(0, "#BABABA");
    myGradient.addColorStop(1, "#636363");
    ctx.beginPath();
    ctx.arc(50, 180, 50, 0, Math.PI*2, true);
    ctx.fillStyle = myGradient;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(60, 60, 50, 0, Math.PI*2, true);
    ctx.lineWidth = 1.0;
    ctx.strokeStyle = "#000";
    ctx.stroke();
}
function resove(){
    ctx.save();

    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 5;
    ctx.shadowColor = "rgba(0,0,0,0.5)";

    ctx.fillStyle = "#CC0000";
    ctx.fillRect(10,10,150,100);

    ctx.restore();

    ctx.fillStyle = "#000000";
    ctx.fillRect(180,10,150,100);
}
drawLine();
drawRect();
drawCircle();
resove();