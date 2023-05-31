        //it is for dice 1

//it help to select random number of dice

var randomNumber1 = Math.floor(Math.random() *6) +1;

//random image form dice1 to dice6

var randomDiceImage = "dice" + randomNumber1 +".png";

var randomImageSources = "/images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomImageSources);


            //it is for dice 2

var randommNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSources2 = "/images/dice" + randommNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

 image2.setAttribute("src", randomImageSources2);

                //for result showing

if (randomNumber1 > randommNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randommNumber2 > randomNumber1) 
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}