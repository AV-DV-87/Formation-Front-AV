/***************************************
 *         LES OPERATEURS DE COMPARAISON         *
 * *************************************/

/* l'opérateur "==" signifie égal à
| Il permet de vérifier que deux variables sont identiques.
| 
| L'opérateur de comparaison '===' signifie :
| strictement égal à , il va comparer la VALEUR et le TYPE
| 
| L'opérateur de comparaison "!=" : différent de :
| L'opérateur de comparaison "!==" : strictement différent de
|***************************************************************

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

var emailU = prompt('quel est votre email?','saissisez votre email');
var mdpU   = prompt('quel est votre mot de passe?','saissisez votre mot de passe');

function verifAut(emailU, mdpU) {
    if (emailU == email) {
            return true;
    }
    else if (mdpU == mdp) {
        return true;
    }
    // peut être remplacé par deux conditions if (emailU == email && mdpU == mdp)
    else {
        return false;
    }

}
console.log(verifAut(emailU, mdpU));

if (verifAut(emailU, mdpU)) {
        alert ('Bienvenue')
    }
else {
        alert ('Login ou mot de passe incorrect')
    }

