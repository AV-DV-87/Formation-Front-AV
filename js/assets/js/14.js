/****************** LE DOM ******************/
/*le DOM est une interface de développement en JS pour HTML.
Gràce à lui tu peux accéder / modifier mon HTML.
L'objet "document" : c'est le point d'entrée vers 
mon contenu HTML.
Chaque page chargée dans mon navigateur a un objet "document"
-------------------------------------------------------------*/

// Comment récupérer les différentes informations de ma page HTML?

/* document.getElementById () est une fonction qui va permettre
de récupérer un élement HTML à partir de son Identifian unique
ou ID
*/

var bonjour = document.getElementById('bonjour');
console.log(bonjour)

// document.getElementsByClassName
/*est une fonction qui permet de récupérer un ou plusieurs
à partir de leur classe */

var contenu = document.getElementsByClassName('contenu');
console.log(contenu);
/* ! renvoi un tableau JS et index les éléments 
HTML en commencant par 0 (Collection HTML) !*/

// document.getElementsByTagName
/* est une fonction qui permet de récupérer des éléments
HTML par *nom de balise*/
var span = document.getElementsByTagName('span');
console.log(span);