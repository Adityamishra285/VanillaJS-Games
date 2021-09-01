
const rollDice = () => {
    const randomNumber1 = (Math.floor(Math.random() * 6) + 1);
    console.log(randomNumber1);
    const randomDIceImage1 = "images/" + "dice" + randomNumber1 + ".png";
    console.log(randomDIceImage1);
    const img1 = document.querySelector("#img1");
    img1.src = randomDIceImage1;
    const randomNumber2 = (Math.floor(Math.random() * 6) + 1);
    console.log(randomNumber2);
    const randomDIceImage2 = "images/" + "dice" + randomNumber2 + ".png";
    console.log(randomDIceImage2);
    const img2 = document.querySelector("#img2");
    img2.src = randomDIceImage2;

    const h1 = document.querySelector("#h1");

    if (randomNumber1 > randomNumber2) {
        // console.log("Player 1 wins!");
        h1.innerHTML = "🚩Player 1 wins!";
    }
    else if (randomNumber1 === randomNumber2) {
        // console.log("Draw!");
        h1.innerHTML = "Draw!";
    }
    else {
        // console.log("Player 2 wins!");
        h1.innerHTML = "Player 2 wins!🚩";
    }

}


// -----------------------------------------------------------------
// // ------------------------------------------------------------------

const btn = document.querySelector("#btn");
btn.onclick = function () {
    rollDice();
};


