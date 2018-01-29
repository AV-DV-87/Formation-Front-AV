/*Selecteurs d'enfants de JQUERY*/


$(function() {

    l = e => console.log(e);

    // Selection de toute les div
    l($('div'));

    // Je souhaite selectionner la balise header de ma page

    l($('nav'));

    // je souhaite tous les élements descendants directs

    l($('nav').children());

    // parmi ces descendants, uniquement les élements ul

    l($('nav').children('ul'));

    // tous les éléments i du ul

    l($('nav').children('ul').find('li'));

    // uniquement le deuxième élément de mes li

    l($('nav').find('li').eq(1));

    // voisin immédiat de ma "nav"

    l($('nav').next());
    l($('nav').next().next());
    l($('nav').prev());

    // les parents

    l($('nav').parent());



});