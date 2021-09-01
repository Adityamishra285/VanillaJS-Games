
const btn = document.querySelectorAll(".drum");
btn.forEach(element => {
    element.addEventListener("click", function () {
        let char = element.innerHTML;
        makeSound(char);
        buttonAnimation(char);
    });
});

document.addEventListener("keypress", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});
// --------------------------------------------------------
function makeSound(key) {
    if (key === 'w') {
        const tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    }

    else if (key === 'a') {
        const tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    }

    else if (key === 's') {
        const tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    }

    else if (key === 'd') {
        const tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    }

    else if (key === 'j') {
        const tom5 = new Audio("sounds/snare.mp3");
        tom5.play();
    }

    else if (key === 'k') {
        const tom6 = new Audio("sounds/crash.mp3");
        tom6.play();
    }

    else if (key === 'l') {
        const tom7 = new Audio("sounds/kick-bass.mp3");
        tom7.play();
    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}