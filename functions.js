// DOM Elements references ---------------------------------------------
const songSelectedName = document.querySelector('#song-selected-name');
const audioElement = document.querySelector('#audio-element');

const button1 = document.querySelector('#button-1');
const button2 = document.querySelector('#button-2');
const button3 = document.querySelector('#button-3');
const button4 = document.querySelector('#button-4');
const button5 = document.querySelector('#button-5');
const button6 = document.querySelector('#button-6');
const button7 = document.querySelector('#button-7');
const button8 = document.querySelector('#button-8');
const button9 = document.querySelector('#button-9');
const buttons = document.querySelectorAll('button');

const randomSongButton = document.querySelector('#random-song-button');
// ----------------------------------------------------------------------


// Song Selector Buttons Events -----------------------------------------
button1.addEventListener('click', () => {
    setCurrentSong('/songs/nunca-quedas-mal-con-nadie.mp3', 'Nunca quedas mal con nadie');
});

button2.addEventListener('click', () => {
    setCurrentSong('/songs/mil-horas.mp3', 'Mil horas');
});

button3.addEventListener('click', () => {
    setCurrentSong('/songs/la-torre-de-babel.mp3', 'La torre de Babel');
});

button4.addEventListener('click', () => {
    setCurrentSong('/songs/por-que-los-ricos.mp3', 'Por qué los ricos');
});

button5.addEventListener('click', () => {
    setCurrentSong('/songs/lo-estamos-pasando-muy-bien.mp3', 'Lo estamos pasando muy bien');
});

button6.addEventListener('click', () => {
    setCurrentSong('/songs/la-consentida.mp3', 'La consentida');
});

button7.addEventListener('click', () => {
    setCurrentSong('/songs/noche-en-la-ciudad.mp3', 'Noche en la ciudad');
});

button8.addEventListener('click', () => {
    setCurrentSong('/songs/estrechez-de-corazon.mp3', 'Estrechez de corazón');
});

button9.addEventListener('click', () => {
    setCurrentSong('/songs/mi-profesor-se-esta-volviendo-loco.mp3', 'Mi profesor se esta volviendo loco');
});

randomSongButton.addEventListener('click', () => {
    setRandomSong();
});
// ----------------------------------------------------------------------


// Functions ------------------------------------------------------------
function setCurrentSong(songDirectory, songName) {
    audioElement.src = songDirectory;
    audioElement.play();
    songSelectedName.innerHTML = songName;
}

function setRandomSong() {
    let randomNumber = Math.floor(Math.random() * buttons.length);
    if (randomNumber > 0) randomNumber -= 1;
    buttons[randomNumber].click();
}
// ----------------------------------------------------------------------

// Implementación de botones con color aleatorio
/*
const buttons = document.querySelectorAll('.button');
const buttonsColors = [
    '#',
]

window.addEventListener('load', () => {
    buttons.forEach(button => {
        setButtonColor(button);
    });
});

function setButtonColor(button) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    button.style.backgroundColor = "#" + randomColor;
}
*/