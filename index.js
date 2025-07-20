// i also have to give varible for the select any element.
// now, i am adding a random number b/w 1 to 6.
// strings are used in the "" this.
var image1=document.querySelector(".img1")
var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceImage1 = "images/dice" + randomNumber1 + ".png";
image1.setAttribute("src", diceImage1);

// now same thing for .img2

var image2=document.querySelector(".img2")
var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "images/dice" + randomNumber2 + ".png";
image2.setAttribute("src", diceImage2);

if (randomNumber1 > randomNumber2){
document.querySelector("h1").innerText="Player 1 win !! ";

}
else if (randomNumber2>randomNumber1){
document.querySelector("h1").innerText="player 2 win !! ";

}
else{
    document.querySelector("h1").innerText="both win !! ⛳";
}