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



   // List of background image URLs
const backgroundImages = [
    'url(bg5.jpg)' ,
    'url(bg1.jpg)',
    'url(bg2.jpg)',
    'url(bg3.webp)',
    'url(bg4.jpg)',
    'url(protbg.jpg)',
];

let currentImageIndex = 0;
const homeSection = document.querySelector('.home');

// Function to apply crossfade transition between images
function crossfadeImages() {
    homeSection.style.backgroundImage = backgroundImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;

    homeSection.classList.remove('fade-out', 'fade-in');
    homeSection.classList.add('crossfade'); // Apply crossfade animation

    // Reset animation classes after animation duration
    setTimeout(() => {
        homeSection.classList.remove('crossfade');
    }, 1000); // Adjust timing as needed
}

// Change the background image every 5 seconds
setInterval(crossfadeImages, 6000);



