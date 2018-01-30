$(function() {

// -- tableau indéxé des objets contact

var CollectionDeContacts = [];



// -------------------TRAITEMENT DU FORMULAIRE-------------------
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

// Focntion vérification existence contact
function unContactEstPresent (Contact) {
    // Booleen qui indique la présence ou nom de l'email
    let estPresent = false;
    // on parcours le tableau à la recherche d'une correspondance
    for (let i = 0 ; i < CollectionDeContacts.length ; i++) {

        if(Contact.email === CollectionDeContacts[i].email) {
            // si une correspondanc est trouvée "estPresent" passe à true
            estPresent = true;
            break;
        }

    }
    // On retourne le Booleen
    return estPresent;
}

function reinitialisationFormulaire () {
    // EnJquery
    $('#contact').trigger('reset');
    // $('#contact').get(0).reset();
    // En Javascript
    // document.getElementById('contact').requestFullscreen();

}


function ajouterContact (Contact) {
    // ajouter contact dans collection de contact
    CollectionDeContacts.push(Contact);
    
    // on cache le TR aucuncontact
    $('.aucuncontact').hide();

    // Mise à jour HTML + nouvelles syntaxe pour insérer une valeur sans concaténation
    $(`
        <tr>
            <td>`+ Contact.nom +`</td>
            <td>${Contact.prenom}</td>
            <td>${Contact.prenom}</td>
            <td>${Contact.prenom}</td>
        </tr>

    `).appendTo($('#LesContacts tbody'))

    reinitialisationFormulaire();
    $('.alert-contact').fadeIn().delay(4000).fadeOut();

}


// -------------------TRAITEMENT DU FORMULAIRE-------------------


// --vérifier la soumission du formulaire

$('#contact').on('submit',function(e){
    // Stopper la redirection HTML du formulaire
    e.preventDefault();
    // Récupération des champs à vérifier
    var prenom, nom, email, tel;
    nom    = $('#nom');
    prenom = $('#prenom');
    email  = $('#email');
    tel    = $('#tel');

    // Vérification des informations
    let mesInformationsSontValides = true;

    // Vérification prénom
    if(prenom.val().length === 0) {
        // champ incorrect non rempli
        mesInformationsSontValides = false;
    }

    // Vérification du Nom
    if (nom.val()) {
        mesInformationsSontValides = false;
    }

    // Vérification email 

    if (!validateEmail(email.val())) {
        mesInformationsSontValides = false;
    }

    // Vérification tel

    if (!validateEmail(tel.val())) {
        mesInformationsSontValides = false;
    }

    // Vérification de la variable mesInformationsSontValides
    if(mesInformationsSontValides) {
        // --Tout est correct

        let Contact = {
            nom    : nom.val(),
            prenom : prenom.val(),
            email  : email.val(),
            tel    : tel.val(),
        };
        // si le contact existe déjà
        if (unContactEstPresent(contact)) {
            alert('ATTENTION\nCe contact est déjà présent !')
        } else {
            ajouterContact(Contact);
        }

    } else {
        // --Tous les champs n'ont pas été remplis
        alert('ATTENTION\nVeuillez bien remplir tous les champs');
    }

})

})