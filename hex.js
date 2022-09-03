const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const colorNumber = getRandomColor();
    console.log(colorNumber);
    document.body.style.backgroundColor = colorNumber;
    color.textContent = colorNumber;
});

function getRandomColor(){
    let hexString = "#";
    let randNumber;
    for (let i = 0; i < 6; i++){
        randNumber = getRandomNumber();
        hexString += hex[randNumber];
    }
    return hexString;
}
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
