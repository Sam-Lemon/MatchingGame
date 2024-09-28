// 4x4 gameboard
// on click card flips over showing image
// if both images match cards disappear, player gets point
// if match more than one pair in a row, extra point
// if doesn't match, both cards flip back over showing backside of card
// win when all cards are cleared

const emojis = [
  "🤖",
  "🤖",
  "👽",
  "👽",
  "🐲",
  "🐲",
  "🐙",
  "🐙",
  "🪲",
  "🪲",
  "🎠",
  "🎠",
  "🪅",
  "🪅",
  "🌚",
  "🌚",
];

//shuffle the images
let shuffle_emojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (var i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffle_emojis[i];

  //on click the newly created div in the variable box is given a new class of boxOpen.
  box.onclick = function () {
    this.classList.add("boxOpen");

    setTimeout(function () {
      let click1 = document.querySelectorAll(".boxOpen")[0];
      let click2 = document.querySelectorAll(".boxOpen")[1];

      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (click1.innerHTML == click2.innerHTML) {
          //adding the class of boxMatch and removing the existing boxOpen class
          click1.classList.add("boxMatch");
          click2.classList.add("boxMatch");
          click1.classList.remove("boxOpen");
          click2.classList.remove("boxOpen");

          //if all of the boxes have the boxOpen class, the game will alert for a win
          if (document.querySelectorAll(".boxMatch").length == emojis.length) {
            alert("win");
          }
        } else {
          click1.classList.remove("boxOpen");
          click2.classList.remove("boxOpen");
        }
      }
    }, 800);
  };

  document.querySelector(".game").appendChild(box);
}

// //setting a variable for each image
// let kitty1 = './images/kitty1.jpg';
// let kitty2 = './images/kitty2.jpg';
// let kitty3 = './images/kitty3.jpg';
// let kitty4 = './images/kitty4.jpg';
// let kitty5 = './images/kitty5.jpg';
// let kitty6 = './images/kitty6.jpg';
// let kitty7 = './images/kitty7.jpg';
// let kitty8 = './images/kitty8.jpg';

// //image test
// let img = document.createElement('img');
// img.src = kitty1;
// img.style.width = "100px";
// img.style.height = "100px";
// img.style.objectFit = "cover";
// document.body.appendChild(img);

// //creating array of images
// const images = [
//     kitty1, kitty2, kitty3, kitty4, kitty5, kitty6, kitty7, kitty8,
//     kitty1, kitty2, kitty3, kitty4, kitty5, kitty6, kitty7, kitty8
// ];
