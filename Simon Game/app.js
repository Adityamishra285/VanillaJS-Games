

let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let toggle = false;
let level = 0;

document.addEventListener("keydown", function (e) {
    if (toggle === false) {
        document.querySelector("#h1").innerHTML = "Level " + level;
        nextSequence();

    }
    // 
})

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour) {
    currentColour.classList.add("pressed");
    setTimeout(function () {
        currentColour.classList.remove("pressed");
    }, 100);
}

function nextSequence() {
    userClickedPattern = [];
    toggle = true;
    const randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("Game :" + gamePattern);
    let chosenId = "#" + randomChosenColour;
    const flashButton = document.querySelector(chosenId);
    $(flashButton).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    document.querySelector("#h1").innerHTML = "Level " + level;
}

const button = document.querySelectorAll("button");
button.forEach(element => {
    element.addEventListener("click", function () {
        userChosenColour = element.id;
        userClickedPattern.push(userChosenColour);
        console.log("User: " + userClickedPattern);
        playSound(userChosenColour);
        animatePress(element);
        checkAnswer(userClickedPattern.length - 1);
    })
});


function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        console.log("Success");

        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }
    }
    else {
        console.log("Wrong");
        playSound("wrong");
        document.querySelector("#h1").innerHTML = "Game Over, Press Any Key to Restart";
        const body = document.querySelector("body");
        body.classList.add("game-over");
        setTimeout(function () {
            body.classList.remove("game-over");
        }, 200);

        startOver();

    }


    function startOver() {
        level = 0;
        gamePattern = [];
        toggle = false;
    }
}