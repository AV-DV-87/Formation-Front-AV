
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
        $("#submit").click(function(){
        
        })
        var utilisateur = $('#nomcomplet').val();
        
        // vérifier si la variable récupère la valeur de l'input
        console.log('done');

        $('<p>Bonjour ' + utilisateur + '</p>').appendTo('body');
      });

});