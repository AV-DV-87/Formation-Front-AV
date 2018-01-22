var majoriteLegaleFR = 18;

if(14>= majoriteLegaleFR) {
    alert('Bienvenue');
}

//le Else n'est pas obligatoire

else{
    alert('Google');
}

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */

function ageLegal() {
    let ageU = prompt('Quel age avez-vous?','tapez votre âge ici')
    if(ageU>=18) {
        alert('Bienvenue');
    }
    else{
        alert('Vous n\'avez pas l\'age pour consulter cette page');
        window.open("https://google.fr", "_self");
    }
}
// éviter de mélanger la f

ageLegal()