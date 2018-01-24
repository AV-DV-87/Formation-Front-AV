/*--------------------------------------------
|                 EXERCICE                   |
Les évenements vont me permettre de déclencher une
fonction, c'est à dire une série d'instructions;
suite à une action de mon utilisateur...
OBJECTIF : Etre en mesure de capturer ces évenements
afin d'executer une fonction.

Les événements : MOUSE
    click : au clic
    mousenter : la souris passe au dessu d'un element
    mouseleave : la souris sort de cette zone

Les évènements : KEYBOARD
    keydown : une touche du clavier enfoncée
    keyup   : une touche du clavier est relevée

Les évènements WINDOW (Fenêtre)
    scroll : défilement de la fenêtre;
    resize : redimensionnement de la fenêtre

Les événements FORM (formulaire)
    change : pour les élements input / select et textarea 
    modifier par l'utilisateur
    submit : à l'envoi du formulaire
    input : capter la saisie d'un utilisateur
---------------LES ECOUTEURS D'EVENEMENTS--------------
Pour attacher un évènement à un élement ou autrement dit
pour déclarer un écouteur d'évènement qui se chargera de
déclencher une fonction, je vais utiliser la syntaxe suivante :
-------------------------------------------------------*/
var p = document.getElementById('MonPara');

// -- Je souhaite que mon paragraphe soit rouge au clic

function chnagerLaCouleurEnRouge () {
    p.style.color = "red";
}
p.addEventListener('click', chnagerLaCouleurEnRouge);

var input = document.createElement('input')

input.setAttribute ('type', 'text');

document.body.appendChild(input);

function msgU () {
    alert('Votre saisie est bien ' + input.value);
}

input.addEventListener('change',msgU);
