// <!-- 
//         CONSIGNE : 

// Considérons un Formulaire HTML avec les champs pseudo, age, email et mdp.
// Considérons un Tableau JS contenant une liste de membre.

// ---------

// ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.

// Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s'afficher et le bouton "submit" être désactivé.

// A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus.

// ---------

// ETAPE 2 : L'inscription n'est possible qu'aux personnes majeurs de 18 ans.
// Vous devez donc vérifier que l'age saisi est bien supérieur ou égale à 18 ans.

// Si cette condition n'est pas valide, alors la notification ageError doit s'afficher et le bouton "submit" être désactivé.

// Quand l'utilisateur corrige son age, la situation revient à la normal. La notification ageError ne s'affiche plus et le bouton submit est de nouveau disponible.

// ---------

// ETAPE 3 : 
   
// Lors de la saisie du Pseudo, vous devrez afficher en temps réel dans le titre id "Bienvenue" : Bonjour [Pseudo] : Pseudo étant la saisie en cours de l'utilisateur.
  
// ---------
  
//   ETAPE 4 : Si toutes les conditions sont validées, l'utilisateur va pouvoir procéder à son inscription.
  
//   En cliquant sur le bouton "M'inscrire", vous devrez enclencher une action permettant :
  
//       A. L'ajout de l'utilisateur dans le tableau.
//       B. L'affichage pour l'utilisateur sur la page d'un message de bienvenue, ainsi que la liste des membres inscrit dans une liste non-ordonnée.
      
//       Ex. Merci Hugo ! Tu es maintenant inscrit.
//       Voici la liste de nos Membres :
      
//           Hugo : 26ans
//           Rodrigue : 56ans
//           ...
          
//       NB : Devra bien entendu s'afficher le membre qui vient de s'inscrire.

//     -->

var membres = [
    {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
    {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
    {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
    {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
  ]; 

// ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.
// Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s'afficher et le bouton "submit" être désactivé.
// A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus.

var pseudo = document.getElementById('pseudo');
var pseudoError = document.getElementsByClassName('pseudoError');
// ou var pseudoError = document.getELementByClassName('pseudoError')[0];
console.log(pseudoError);
var submit = document.getElementById('submit');
var age = document.getElementById('age');
var ageError = document.getElementsByClassName('ageError');
var email = document.getElementById('email');
var mdp = document.getElementById('mdp');
var bienvenue = document.getElementById('Bienvenue');

var pseudoOk = false;
var ageOk = false;


// FONCTION VERIFICATION DE PSEUDO
function verificationP () {
    for (let i = 0 ; i < membres.length ; i++) {
        
        if(pseudo.value === membres[i].pseudo) {

            // -- J'ai trouvé une correspondance donc affichage class
            // Pseudo Error
            submit.disabled = true;
            pseudoError[0].style.display = 'block';
            break;        
        }

        else{
            submit.style.display = 'block';
            pseudoError[0].style.display = 'none';
            bienvenue.textContent = 'Bienvenue ' + pseudo.value + '!';
            pseudoOk = false;
        }
    }
}

// Fonction vérification Age

function verificationAge () {
    for (let i = 0 ; i < membres.length ; i++) {
        
        if(age.value >= 18) {
            submit.disabled = false;
            ageError[0].style.display = 'none';
        }
        else{
            submit.disabled = true;
            ageError[0].style.display = 'block';
            ageOk = true;
        }
    }

}




// ECOUTE SAISIE
pseudo.addEventListener('input',verificationP);
age.addEventListener('change',verificationAge);
// age.addEventListener('change',verificationAge);
console.log(submit.value);
console.log(email.value);

// FONCTION LISTE MEMBRE
function w(e) {document.write(e);}

function listeU () {
    w('Voici la liste des membres : ')
    w('<ul>');
    for (i=0; i<membres.length; i++) {
        w('<li> '); 
        w(membres[i].pseudo); 
        w(' </li>');
    }
    w('</ul>');
}

// REECRITURE DES PARAMETRES DU FORMULAIRE
var form = document.getElementById ('InscriptionForm');
form.action = "#"


// INSCRIPTION AU CLICK DU SUBMIT

submit.addEventListener('click', function (){
        
    // définition de variables à appeler dans le push
    let pseudoU = pseudo.value;
    let emailU = email.value;
    let mdpU = mdp.value;
    

    membres.push ({'pseudo': pseudoU, 'age' : age.value, 'email' : emailU, 'mdp' : mdpU});
    
    let listeMembres = listeU();

    alert(
        "Bienvenue parmis nous " + pseudo.value
    );
    
    // alert('Voici la liste des membres ' + listeMembres +;

});






console.log(membres);


// pourquoi Age est un string???

// FONCTION ENVOI UTILISATEUR au SUBMIT FORMULAIRE

// form.addEventListener('submit', function(event)) {
//     event.preventDefault(); //stop la redirection HTTP du formulaire evite la reecriture
//     let membre = { 'pseudo': pseudo.value,'age':age.value,'email':email.value,'mdp':mdp.value};
//     membres.push(membre);
//     var p = document.createElement('p');
// }

