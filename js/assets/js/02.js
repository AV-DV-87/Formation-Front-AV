/****************************************************
 * LES TABLEAUX
 * pour le stockage de plusieurs valeurs
 * 
 * 
 * 
 */

// -- Déclarer un tableau numérique indexé
var monTableau = [];
var myArray = new Array;

monTableau [0] = "Adeline";
monTableau [1] = "Hugo";
monTableau [2] = "Arnaud";

//possibilité d'appeler une 
console.log(monTableau); //toute les données
console.log(monTableau[0]); //Adeline
console.log(monTableau[2]); //Arnaud

//possibilité de faire un tableau sans préciser l'index numérique attribu auto
var nosPrenoms = ["Hana", "John", 12, "Adnane"];
console.log(nosPrenoms);

// -- Déclarer et affecter des valeurs à un objet.

// PAS DE TABLEAU ASSOCIATIF EN JAVASCRIPT !!!!!!!!!

var Coordonnee = {
    prenom : "Hugo",
    nom : "LIEGARD",
    age : 28
}

console.log(Coordonnee);
//deux façons d'appeller une variable contenu dans l'objet
console.log(Coordonnee['prenom']);
console.log(Coordonnee.nom);

// Création de deux tableaux numériques
var listeDePrenom = ["Hugo", "Rodrigue", "Kristie"];
var listeDeNom = ["LIEGARD", "NOUEL", "SOUKAI"];

//-- création d'un tableau à deux dimensions
var Annuaire = [listeDePrenom, listeDeNom];
console.log(Annuaire);

//afficher nom et prenom sur la page HTML
document.write( Annuaire[0][1]); //appel de l'index 0 du tab annuaire et de l'index du tableau prénom
document.write( ' ');
document.write( Annuaire[1][1]);

// EXERCICE*************************************

var listeNomS    = ["Adjem", "Vallet", "Nira" ]; 
var listePrenomS = ["Adnane", "Arnaud", "Jonathan"];
var listeNumeroS = [0619854568, 0687985478, 0355878585];

var AnnuaireDesStagiaires = [listeNomS, listePrenomS, listeNumeroS];

console.log(AnnuaireDesStagiaires);

document.write(AnnuaireDesStagiaires);

//FORMAT JSON des objets dans un tableau indéxé

var AnnuaireDesStagiairesJSON = {

}

//AJOUTER UN ELEMENT

var Couleurs = ['Rouge', 'Jaune', 'Vert'];

//ajout d'un élément avec la fonction push et renvoi le nombre d'élement

var nombreElementsDeMonTableau = Couleurs.push('Orange');
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

/*La fonction unshift() permet d'ajouter un ou plusieurs élements 
en début de tableau */

/*RECUPERER ET SORTIR LE DERNIER ELEMENT*/

/* la fonction pop() me permet de supprimer un ou plusieurs éléments
de mon tableau et d'en récupérer la valeur. Je peux accessoirement 
récupérer cette valeur dans une variable*/

var monDernierElement = Couleurs.pop();
console.log(Couleurs);
console.log(monDernierElement);

//meme chose pour le premier element avec shift

//la fonction splice() vous permet de faire sortir un ou plusieurs plusieurs éléments de votre tableau.





