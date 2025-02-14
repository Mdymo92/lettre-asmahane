document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour afficher les GIFs
    function showGifs() {
        document.getElementById("heart").style.display = "none";
        document.getElementById("gif-container").style.display = "block";
    }

    // Lier la fonction au clic sur le cœur
    document.getElementById("heart").addEventListener("click", showGifs);
});

// Affichage de la lettre de base après le clic sur "Suivant"
function showLetterBase() {
    document.getElementById("gif-container").style.display = "none";
    document.getElementById("letter-base").style.display = "block";
}

// Affichage de la lettre en fonction de la rose choisie
function showLetter(color) {
    document.getElementById("letter-base").style.display = "none";

    // Cacher toutes les lettres
    document.getElementById("letter-blanche").style.display = "none";
    document.getElementById("letter-rouge").style.display = "none";
    document.getElementById("letter-rose").style.display = "none";

    // Afficher la lettre correspondante
    document.getElementById(`letter-${color}`).style.display = "block";
}

// Retour à la lettre de base
function showLetterBase() {
    // Masquer les GIFs et le bouton "Suivant"
    document.getElementById("gif-container").style.display = "none";
    // Afficher la lettre de base
    document.getElementById("letter-base").style.display = "block";
    document.getElementById("letter-blanche").style.display = "none";
    document.getElementById("letter-rouge").style.display = "none";
    document.getElementById("letter-rose").style.display = "none";
    document.getElementById("letter-base").style.display = "block";
}
