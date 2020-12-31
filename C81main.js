var a = document.getElementById("cans");
var b = a.getContext("2d");
var color = "orange";
b.beginPath();
b.strokeStyle=color;
b.lineWidth=3;
b.arc(50,50,40,0,2*Math.PI);
b.stroke();
a.addEventListener("mousedown",drawCircle);
function drawCircle(e){
c = document.getElementById("tag123").value;
console.log(c);
xmouse = e.clientX-a.offsetLeft;
ymouse = e.clientY-a.offsetTop;
console.log("X =" + xmouse + " , Y = " + ymouse);
error(xmouse,ymouse);
}
function error(xmouse,ymouse){
    b.beginPath();
    b.strokeStyle = c;
    b.lineWidth=3;
    b.arc(xmouse,ymouse,40,0,2*Math.PI);
    b.stroke();
}