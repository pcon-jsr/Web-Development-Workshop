document.getElementById("para1").innerHTML = "Hello World!";

//changing image src
function changeImg(){
 document.getElementById("myImage").src="img3.jpg";
    
}


//changing the html style
//document.getElementById(id).style.property = new style
var y = document.getElementById("para2");
y.style.color = "blue";


//events
/* 1.onclick
   2.onmouseover
   3.onmouseout
   4.onload
   5.onunload
   6.onchange
*/

function mouseOver(){
    document.getElementById("para3").innerHTML = "mouse over";
    document.getElementById("para3").style.backgroundColor = "blue";
}
function mouseOut(){
    document.getElementById("para3").innerHTML = "mouse out";
}

function validate() {
    var x =document.getElementById("inp1").value;
    if(x.length != 10){
        document.getElementById("inp1").style.backgroundColor="red";
    }
}

// Event listeners
/*
1.click
2.mouseover
3.mouseout
*/


var btn1 = document.getElementById("myBtn");
btn1.addEventListener("mouseover",mOver);
btn1.addEventListener("mouseout",mOut);
function mOver(){
    btn1.style.backgroundColor="green";
}
function mOut(){
    btn1.style.backgroundColor="blue";
}













