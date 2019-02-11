let audio;

let key;

function addClass (e) {

    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    key.classList.add("playing");

    audio.play();

}

window.addEventListener("keydown", addClass);

function removeClass (e) {

    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    key.classList.remove("playing");

    audio.play();

}

window.addEventListener("keyup", removeClass);
