var b = document.getElementById("no");
b.addEventListener("click",change);
function change()
{
    var i = + Math.floor(Math.random()*300)+600;
    var j = Math.floor(Math.random()*500)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";
}

var a = document.getElementById("yes");
a.addEventListener("click",changeText);
function changeText()
{
    document.getElementById("text").innerHTML = "Dear, I love U too <3";
}