/*--------- LA DISPONIBILITE DU DOM -------

A partir du moment ou mon DOM (ensemble de l'arborescence de la page HTML)
est complétement chargée je peux commencé à utiliser JQuery.
Je vais mettre l'ensemble de mon code dans une fonction, cette
fonction sera appelée automatiquement par Jquery lorsque le DOM sera
entièrement défini. */

//3 METHODES :

jQuery(document).ready(function(){
    // Ici le DOM est entièrement chargé; je peux procéder à mon code JS...
});

// METHODE 2
$(document).ready(function(){
    // Ici le DOM est entièrement chargé, ....
});

// METHODE 3
$(function() {

});

// METHODE pas encore compatible LE FUTUR
$(() => {
   
    alert('Bienvenue dans ce cours JQuery');
    // En JS
    document.getElementById('TexteEnJquery').innerHTML = "<strong>Mon texte en JS</strong>";
    $('#TexteEnJquery').html('Mon Texte en JQ');
})