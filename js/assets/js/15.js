/*--------------------------------------------
|        MANIPULATION DES CONTENUS           |
--------------------------------------------*/
// pour les flémards
function l(e) {
    console.log(e);
}
// en écriture simplifiée ECMA 6 "l = e => console.log(e)"

// var google = document.getElementById ('google');
// l(google);

// Maintenant, je souhaite accéder aux informations de ce lien...

    // -- A : le lien vers lequel pointe la balise
    l(google.href);

    // -- B : l'ID de la balise
    l(google.id);

    // -- C : Class
    l(google.className);

    // -- D : Contenu

    l(google.textContent);

/* Maintenant, je souhaite modifier le contenu de mon lien
comme une variable classique, je vais simplement venir affecter
une nouvelle valeur à mon "textcontent" */

google.textContent = "Mon lien vers GooOOgle !";


// ---- AJOUTER UN ELEMENT DANS LA PAGE

// Méthode 1 : la fonction document.createElement()
// va permettre de générer un nouvel élément dans le DOM et
// il pourra être modifier par la suite comme ci haut...
// PS : ce nouvel élément est placé en mémoire....

var span = document.createElement('span');

span.id = "monSpan";

span.textContent = "Mon beau Texte en JS";

google.appendChild(span);

/*--------------------------------------------
|                 EXERCICE           |
--------------------------------------------*/

var monTitre = document.createElement ('h1');

var lienArt = document.createElement ('a');

lienArt.textContent = 'Titre de mon article';

lienArt.href = "http://lmgtfy.com/";

monTitre.appendChild(lienArt);

console.log(lienArt);

document.body.appendChild(monTitre);

lienArt.style.color = 'red';
lienArt.style.textDecoration = 'none';








