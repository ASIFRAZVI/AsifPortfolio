// typing.js

const typingPhrases = [
    "I'm Backend Developer...",
    "I'm NodeJs Developer...",
    "I'm ExpressJs Developer...",
    "I'm MongoDB Developer."
];

const typingElement = document.querySelector(".typing");
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";

function type() {
    if (letterIndex < typingPhrases[phraseIndex].length) {
        currentPhrase += typingPhrases[phraseIndex][letterIndex];
        typingElement.textContent = currentPhrase;
        letterIndex++;
        setTimeout(type, 60);
    } else {
        setTimeout(erase, 800);
    }
}

function erase() {
    if (letterIndex > 0) {
        currentPhrase = currentPhrase.slice(0, -1);
        typingElement.textContent = currentPhrase;
        letterIndex--;
        setTimeout(erase, 20);
    } else {
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        setTimeout(type, 300);
    }
}

setTimeout(type, 500);
