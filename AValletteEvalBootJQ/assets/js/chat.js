$(function() {
    // vérification démarrage JQUERY
    // alert('yeah right');
    
    $('#form-adopt').on('submit', function(e) {
        
        e.preventDefault();
        // effacer les mises en formes des précédents submit
        $('#form-adopt  .is-invalid').removeClass('is-invalid');
        $('#form-adopt  .alert').remove('p');
        
        // simplification de l'appel des ID du formulaire
        // et des options de la liste déroulante dans option
        
        let message  = $('#raisonAdopt');
        // la valeur de select correspond au chat selectionné
        let select = $('select').val();
        console.log(select);
        

        // vérification q'un nom de chat à bien était choisi
        // on va vérifier si select est différent du choix par défaut 'Choix du chat' 
        if(select == 'Choix du chat') {
            $('#form-adopt select').addClass('is-invalid');
            $('<p class="alert alert-danger mt-2">Veuillez choisir un chat</p>').appendTo($('select').parent());
        } else {
            $('#form-adopt select').addClass('is-valid');
        }
        
        // vérification de la saisie du message avec un minimun de 15 caractères
        if(message.val().length < 15) {
            message.addClass('is-invalid');
            $('<p class="alert alert-danger mt-2">Veuillez saisir votre message</p>').appendTo(message.parent());
        } else {
            message.addClass('is-valid');
        }

        
    }) //fin de l'écoute de l'event
}); //fin de jquery