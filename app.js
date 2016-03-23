//Welcome: Say hello to the user and ask their name
var username = prompt("Hi! What's your name?");

//Invite: Ask the user if they would like to play
var gameStart = prompt("Hello "+username+" , would you like to play a game?");
while (gameStart.toLowerCase() != "yes" && gameStart.toLowerCase() != "y" && gameStart.toLowerCase() != "no") {
  gameStart = prompt("I'm sorry, I didn't catch that. Would you like to play?");
}

//Rules: Give the user the rules of the game
if (gameStart.toLowerCase() == "yes" || gameStart.toLowerCase() == "y") {
  gameStart = alert("let's play a game. Fill in my bio by answering the questions that follow.");
  //Game condensed:
  //var guess = prompt(ask);
  //if answer == true {
  //}

  //Game: Have the user fill in the blanks
  var homeTown = prompt("Let's begin with an easy one. In which state was I born?");
  if (homeTown.toLowerCase() == "in" || homeTown.toLowerCase() == "indiana") {
    document.getElementById("origin").innerHTML = homeTown + "<br>" + "<img src='indiana.png'>";
  } else {
    (document.getElementById("origin").innerHTML = "WRONG!");
    var myElement = document.querySelector("#origin");
    myElement.style.color = "red";
  }
  var study = prompt("In which country did I teach abroad?");
  if (study.toLowerCase() == "italy" || study.toLowerCase() == "poland") {
    (document.getElementById("school").innerHTML = study + "<br>" + "<img src='italy.png'>");
  } else {
    (document.getElementById("school").innerHTML = "WRONG!");
    var myElement = document.querySelector("#school");
    myElement.style.color = "red";
  }
  var job = prompt("What was my first job in California?");
  if (job.toLowerCase() == "author" || job.toLowerCase() == "writer") {
    (document.getElementById("work").innerHTML = job + "<br>" + "<img src='writer.jpeg'>");
  } else {
    (document.getElementById("work").innerHTML = "WRONG!");
    var myElement = document.querySelector("#work");
    myElement.style.color = "red";
  }

//Rejection: If the user decides not to play
} else {
      alert("Fine, be that way, I don't want to play with you anyway. Just go away. You're ugly. And a jerk. Call me.");
      console.log(username+" has chosen not to play the game");
}
