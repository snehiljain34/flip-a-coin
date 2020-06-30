var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Heads Up!";
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Tails Up!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!"
  document.querySelectorAll("img")[0].setAttribute("src", "draw.jpg");
}
