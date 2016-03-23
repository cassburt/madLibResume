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

  //Game: Have the user fill in the blanks
  function madLib(question, answer, answer2, id, image) {
    var response = prompt(question);
    if (response.toLowerCase() === answer.toLowerCase() || response.toLowerCase() === answer2.toLowerCase()) {
      document.getElementById(id).innerHTML = response + "<br>" + image;
    } else {
      document.getElementById(id).style.color = "red";
      document.getElementById(id).innerHTML = "WRONG!" + "<br>" + "<img src='wrong.jpg' height='200'width='300'>";
    }
  }

  //madLibs: My list of madLibs
  madLib("Let's begin with an easy one. In which state was I born?", "in", "indiana", "origin", "<img src='indiana.png' height='200'width='300'>");
  madLib("Ok, let's try another. In which country did I teach abroad?", "italy", "poland", "school", "<img src='italy_poland.jpg' height='200'width='300'>");
  madLib("Well, smartypants, what was my first job in California?", "writer", "author", "work", "<img src='writer.jpg' height='200'width='300'>");

//Rejection: If the user decides not to play
} else {
      alert("Fine, be that way, I don't want to play with you anyway. Just go away. You're ugly. And a jerk. Call me.");
      console.log(username+" has chosen not to play the game");
}
