
/***************************************
 *           LES FONCTIONS             *
 * *************************************/

//  déclarer une fonction
// exemple sans valeur ni paramètre

function Bonjour() {
    alert('Bonjour');
}

//appel de la fonction
// Bonjour();


// fonction avec paramètres

function ditBonjour (prenom, nom) {
    document.write("<p>Bonjour <strong>" + prenom + " " + nom + "</strong>!</p>");
}
// appel de la fonction en mettant les paramètres dans le bon ordre
ditBonjour("Arnaud", "Vallette");

// EXERCICE
// function addition (nb1, nb2) {
//     document.write(nb1 + nb2)
// }

// addition(4, 16)

// à enlever le documen write car la fonction se doit d'être générique pour être réutilisée

function addition (nb1, nb2) {
    return nb1 + nb2;
}

document.write("<p>" + addition(10, 5) + "</p>")