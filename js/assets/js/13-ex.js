/* --
    CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf4'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];

// fonction de vérification de mot de passe
// function verifAut(emailU, mdpU) {
//     if (emailU == BaseDeDonnees.email && mdpU === BaseDeDonnees.mdp) {
//             return true;
//     }
//     // peut être remplacé par deux conditions if (emailU == email && mdpU == mdp)
//     else {
//         return false;
//     }
// }


function Hello() {

    // 2a. Je demande à l'utilisateur son email
    var emailU = prompt("Email","<Saisir votre Email>");
    console.log(emailU);
    console.log(typeof emailU);

    // 2b. Je lui demande mot de passe
    var mdpU = prompt("Mot de passe","<Saisir votre mdp>");
    console.log(mdpU);
    console.log(typeof mdpU);
    // fin de la saisie

    function verifAut(emailU, mdpU) {
    for (i = 0; i < BaseDeDonnees.length; i++) {
        
                               
                    if (emailU == BaseDeDonnees[i].email && mdpU === BaseDeDonnees[i].mdp) {
                        return true;
                    }
                    // peut être remplacé par deux conditions if (emailU == email && mdpU == mdp)
                    else {
                        return false;
                    }
                }
        }

    // vérification de l'authentification
    console.log(verifAut(emailU,mdpU))

    // conditions de renvoi de message

    if (verifAut(emailU, mdpU)) {
        alert ('Bienvenue ' + BaseDeDonnees[i].prenom + ' ' + BaseDeDonnees[i].nom)
    }
    else(
        alert ('Informations de connexions érronées')
    )
}


Hello();