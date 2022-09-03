import { traditionalColorPair } from "./colors";
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = traditionalColorPair[randomNumber][1];
    color.textContent = traditionalColorPair[randomNumber][0];
});

function getRandomNumber(){
    return Math.floor(Math.random() * traditionalColorPair.length);
}
