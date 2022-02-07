let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

document.getElementsByClassName("img1")[0].src = `images/dice${randomNumber1}.png`;
document.getElementsByClassName("img2")[0].src = `images/dice${randomNumber2}.png`;

document.getElementById("title").innerHTML = randomNumber1 > randomNumber2 ? "Player 1 is the winner!" : "Player 2 is the winner";