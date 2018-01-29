
// démarrage de JQUERY
// <!-- CONSIGNE : Avec l'aide de jQuery, vous devrez :
    
//         1. A la soumission du formulaire, cacher le formulaire puis :
//         2. Créer un élément <p>
//         3. Dans cet élément, afficher : Bonjour <nomcomplet> correspondant 
//            au nom saisie dans le formulaire.
//            <!-- lire un événément en JQUERY + EVENMENT EN JQUERY + RECUPERER CONTENU EN JQUERY -->

$(function(){
        
    $('#MonFormulaire').submit(function(e) {
        e.preventDefault();
        // va cacher le formulaire en 500 ms
        $('form').hide(500);
        
        // vérifier si la variable récupère la valeur de l'input
        $('<p>Bonjour ' + $('#nomcomplet').val() + '</p>').appendTo('body');

        // $(this).replaceWith('<p>Bonjour ' + $('#nomcomplet') + '!</p>);
        // permet de remplacer l'élément dans lequel on execute cette fonction this est la balise form
        // dans cette exemple et le form est supprimé du done et ne peut plus être appellé 
        
      });

});