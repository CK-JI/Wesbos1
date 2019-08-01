// const circle = document.querySelector(".circle");
// const numbers = document.querySelectorAll(".number");
// const sound = document.querySelector("audio");

// window.document.addEventListener("keydown", function(e) {
//   const number = document.getElementById(`${e.keyCode}`);

//   if (96 < e.keyCode && e.keyCode < 106) {
//     sound.currentTime = 0;
//     sound.play();
//     circle.classList.add("effect");
//     numbers.forEach(number => (number.style.display = "none"));
//     number.style.display = "block";

//     console.log(number);
//   }
//   return;
// });

// circle.addEventListener("transitionend", function() {
//   console.log(this);
//   this.classList.remove("effect");
// });

const circle = document.querySelector(".circle");
const numbers = document.querySelectorAll(".number");
const audio = document.querySelector("audio");

window.document.addEventListener("keydown", action);

function action(e) {
  const number = document.getElementById(`${e.keyCode}`);
  numbers.forEach(number => (number.style.display = "none"));

  if (96 < e.keyCode && e.keyCode < 106) {
    audio.currentTime = 0;
    audio.play();
    circle.classList.add("effect");
    number.style.display = "block";
  }
  return;
}

circle.addEventListener("transitionend", function() {
  circle.classList.remove("effect");
});
