/* -------------------------------------------------
        |             ~~~   LA CONSIGNE     ~~~            |
        |                                                  |
        | A partir du Formulaire de Contact ci-dessus :    |
        |                                                  |
        |   1. Afficher à l'utilisateur un Récapitulatif   |
        |   de sa demande de contact.                      |
        |                                                  |
        ------------------------------------------------- */

$(function(){

    $('#MonFormulaire').on('submit', function(e) {
        e.preventDefault();
        // va cacher le formulaire en 500 ms
        $('form').hide(500);
        
        // vérifier si la variable récupère la valeur de l'input
        $('<p>Récapitulatif de votre demande : </p><ul>').appendTo('body');
        
        // peut aussi être fait en récupérant les valeurs avant par des let

        $('<li>').append($('#fullname').attr('placeholder') + ' : ' + $('#fullname').val() ).appendTo('body');
        $('<li>').append($('#email').attr('placeholder') + ' : ' + $('#email').val()).appendTo('body');
        $('<li>').append($('#tel').attr('placeholder') + ' : ' + $('#tel').val()).appendTo('body');
        $('<li>').append($('#sujet').attr('placeholder') + ' : ' + $('#sujet').val()).appendTo('body');
        $('<li>').append($('#message').attr('placeholder') + ' : ' + $('#message').val()).appendTo('body');

        //$(this)replaceWith('<p>Bonjour <strong> + fullname+ ...........).appendTo('body')

        $('</ul>');
        
        });

});