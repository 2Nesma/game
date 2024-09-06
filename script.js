"use strict";
const secret = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector(".score").textContent;


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  // no number
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";
  }
  // correct number
  else if (guess === secret) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secret;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector('.highscore').textContent=score ;
  }
  // High Number
  else if (guess > secret) {
    document.querySelector(".message").textContent = "📈 Too high !";
    score--;
    if (score > 0) document.querySelector(".score").textContent = score;
    else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  // low Number
  else if (guess < secret) {
    document.querySelector(".message").textContent = "📉 Too low!";
    score--;
    if (score > 0) document.querySelector(".score").textContent = score;
    else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
