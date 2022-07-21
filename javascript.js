var num=Math.floor(Math.random()*6)+1;
var randomimage="images/dice"+num+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage)

var num1=Math.floor(Math.random()*6)+1;
var randomimage="images/dice"+num1+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage)

if(num>num1){
    document.querySelector("h1").innerHTML="🚩Player 1 Won";
}
else if( num1>num){
    document.querySelector("h1").innerHTML="Player 2 Won🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw ✌️ Well played";
}

