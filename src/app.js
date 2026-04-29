import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = ["♦","♥","♠","♣"];
  let suitClass = ["diamante","corazones","espadas","treboles"];
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
  let randomSuit = Math.floor(Math.random()*suit.length);
  let randomNumber = Math.floor(Math.random()*numbers.length);
  let suitUp = document.getElementById("suit-up");
  let suitDown = document.getElementById("suit-down");
  let number = document.getElementById("number");
  let card = document.getElementById("card");

  suitUp.innerHTML = suit[randomSuit];
  suitDown.innerHTML = suit[randomSuit];
  number.innerHTML = numbers[randomNumber];

};
