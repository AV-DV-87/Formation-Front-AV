/*-----------------------------
    LES SELECTEURS EN JQUERY
------------------------------*/

// --format : $('selecteur');
// JQUERY ---> meme selecteur que en CSS

$(function(){
    // DOM READY

    l = e => console.log(e);

    // SPAN
    l(document.getElementsByTagName('span'));
    l($('span'));

    // ID
    l(document.getElementById('menu'));
    l($('#menu'));

    // CLASS
    l(document.getElementsByClassName('MaClasse'));
    l($('.MaClasse'));

    // UN ATTRIBUT
    l($('[href="https://www.google.fr"]'));

})