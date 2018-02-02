function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

var validateTel = tel => {
    var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
    var valid = telReg.test(tel);

    if(!valid) {
        return false;
    } else {
        return true;
    }
}





$(function() {
    // // alert pour vérifier le lancement de Jquery
    // alert('yeah right');
    $('#form-info').on('submit', function(e) {
        e.preventDefault();
        // effacer les mises en formes des précédents submit
        $('#contact .is-invalid').removeClass('is-invalid');
        $('#contact .alert').remove('p');
        $('#contact .alert-danger').remove();
        // simplification de l'appel des ID du formulaire
        let identite = $('#nomprenom');
        let email    = $('#email');
        let tel      = $('#tel');
        let sujet    = $('#sujet');
        let message  = $('#message');

        // vérification nom et prenom
        if(identite.val().length === 0) {
            identite.addClass('is-invalid');
            $('<p class="alert text-white">N\'oubliez pas de saisir votre nom prenom !</p>').appendTo(identite.parent());
        } else {
            identite.addClass('is-valid');
        }
        // vérification email

        
    }) //fin de l'écoute de l'event
}); //fin de jquery