/***************************************
 *           LES BOUCLES               *
 * *************************************/

//  la boucle FOR
for(let i = 0 ; i <= 10 ; i++) {
    document.write('<p>Execution de instruction : <strong>' + i + '</strong></p>');
}

document.write('<hr>');

var j = 1;
while (j <= 10) {
    document.write('<p>Insctruction executée : <strong>' +j+ '</strong></p>');
    // Ne pas oublier l'incrémentation
    j++;
}


/***************************************
 *           EXERCICE              *
 * *************************************/

//  supposons le tableau suivant :
document.write('<hr>');

var prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 
'Pierre', 'Paul', 'Jacques', 'Hugo'];

/* Consigne : gràce à une boucle FOR afficher la liste des 
prénoms dans la console ou sur votre page */

for (var i = 0 ; i < prenoms.length; i++) {
    document.write('<br> Etudiant ' +prenoms[i]+ '.');
}

document.write('<hr>');

// BOUCLE FOR EACH
// ATTENTION A LA PERFORMANCE

console.log('La liste des prénoms avec for each');

// for each va parcourir automatiquement le tableau
prenoms.forEach(affichePrenom);

/* puis il va répéter cette fonction pour chaque index
donc pas éfficient sur une grande quantité de données */
function affichePrenom(prenoms, index) {
    console.log(prenoms);
}

    


