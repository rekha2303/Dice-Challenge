
//Generate random number from 1 to 6
var randomNumber1=Math.floor(Math.random()*6)+1;

//random images are picked
var randomDiceImage = "dice" + randomNumber1 + ".png";

//source file images/dice1 - images/dice6
var randomImageSource = "images/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource); 

 //we can write in one lineHeight
 //document.querySelectorAll("img")[1].setAttribute("src", "images/dice" +(Math.floor(Math.random()*6)+1) + ".png");
 
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

//if player 1 wins 
if(randomNumber1 > randomNumber2)
{
	document.querySelector("h1").innerHTML = " Player 1 wins!";
}
	else if(randomNumber2 > randomNumber1)
	{
document.querySelector("h1").innerHTML = "Player 2 wins !";
	}
	
	else {
	document.querySelector("h1").innerHTML= "Draw!";
	}
	
	