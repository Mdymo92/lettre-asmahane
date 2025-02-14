function showGifs() {
    document.getElementById("heart").style.display = "none";
    document.getElementById("gif-container").style.display = "block";
}

function showLetterBase() {
    // Cacher les GIFs après le bouton "Suivant"
    document.getElementById("gif-container").style.display = "none";

    // Cacher toutes les lettres spécifiques
    let letters = document.getElementsByClassName("letter");
    for (let i = 0; i < letters.length; i++) {
        letters[i].style.display = "none";
    }

    // Afficher la lettre de base
    document.getElementById("letter-base").style.display = "block";
}


function showLetter(color) {
    document.getElementById("letter-base").style.display = "none";

    // Cacher toutes les lettres
    let letters = document.getElementsByClassName("letter");
    for (let i = 0; i < letters.length; i++) {
        letters[i].style.display = "none";
    }

    // Afficher la bonne lettre
    document.getElementById("letter-" + color).style.display = "block";
}
