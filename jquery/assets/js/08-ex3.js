/**
 * Validate email function with regular expression
 *
 * https://paulund.co.uk/regular-expression-to-validate-email-address
 * If email isn't valid then return false
 *
 * @param email
 * @return Boolean
 */
// REGEXP
var validateEmail = email => {
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

// FONCTION PREDEFINIE


// -- Initialisation de jQuery
$(() => {

    // -- Ecouter a quel moment est soumis notre formulaire
    // En JS : document.getElementById('contact').addEventListener('submit', MaFonctionAExecuter);
    $('#contact').on('submit', e => {

        // -- Neutraliser la redirection HTML5
        e.preventDefault();

        // -- Supprimer les différentes erreurs
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert').remove();

        // -- OK Déclarer les variables à vérifier
        var nom     = $('#nom');
        var prenom  = $('#prenom');
        var email   = $('#email');
        var tel     = $('#tel');

        // -- Vérification de chaque champ

            // -- 1. Vérification du Nom
            if(nom.val().length === 0) {
                nom.parent().addClass('has-error');
                $('<p class="text-danger">N\'oubliez pas de saisir votre nom</p>').appendTo(nom.parent());
            } else {
                nom.parent().addClass('has-success');
            }

        // -- 2. Vérification du Prénom
        if(prenom.val().length === 0) {
            prenom.parent().addClass('has-error');
            $('<p class="text-danger">N\'oubliez pas de saisir votre prénom</p>').appendTo(prenom.parent());
        } else {
            prenom.parent().addClass('has-success');
        }

        // -- 3. Vérification du Mail
        if(!validateEmail(email.val())) {
            email.parent().addClass('has-error');
            $('<p class="text-danger">Vérifiez votre adresse email</p>')
                .appendTo(email.parent());
        } else {
            // vérifier dans le tableau tblU que l'email n'existe pas

            email.parent().addClass('has-success');
        }

        // -- 4. Vérification du Numéro de Téléphone
        if(!validateTel(tel.val())) {
            tel.parent().addClass('has-error');
            $('<p class="text-danger">Vérifiez votre numéro de téléphone</p>')
                .appendTo(tel.parent());
        } else {
            tel.parent().addClass('has-success');
        }

        // -- Je vérifie si mon formulaire comporte des erreurs.
        if($('#contact').find('.has-error').length === 0) {
            // afficher l'alert de complétion
            $('.alert').show();
            // supprimer la ligne aucune entrée
            $('.aucuncontact td').remove();
            // créer une ligne du tableau avec les input avant de les vider
            $('<tr><td>' +nom.val()+ '</td><td>' +prenom.val()+ '</td><td>' +email.val()+ '</td><td>' +tel.val()+ '</td></tr>').appendTo('tbody');

            // effacer le tableau avec une fonction ou TRIGGER()????
            $('#contact').trigger("reset");

            // Récupérer les email dans un objet
            var tblU = $('#LesContacts tr:has(td)').map(function(i, v) {
                var $td =  $('td', this);
                    return {
                                email: $td.eq(2).text(),               
                            }
            }).get();
            console.log(tblU);
            // rechercher la valeur de l'email dans le tableau avec LODASH
            _.find(tblU, [email=email.val()], [fromIndex=0]);
            
            // // essai 1
            // let result = $.inArray("vallette.arnaud@gmail.com",tblU);
            // console.log(result);
            
            // // essai 2
            // $.grep(tblU, function(n) { return n.email != email.val(); });
            // console.log(n.email);
        } 
        
        else {

            $('#contact').prepend(`
                <div class="alert alert-danger">
                    Nous n'avons pas été en mesure de valider votre
                    demande. Vérifiez vos informations.
                </div>
            `);

        }

    });
});