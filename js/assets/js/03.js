
/*LA CONCATENATION*/

var DebutDePhrase = "Aujourd'hui ";
var DateDuJour    = new Date();
var SuiteDePhrase = ",sont présents : ";
var NombreDeStagiaire =12;
var FinDePhrase = " stagiaires.<br>";

// comment tout afficher en une seule ligne?

document.write(DebutDePhrase + DateDuJour.getDate() + "/" + (DateDuJour.getMonth() +1) + "/" + DateDuJour.getFullYear() + SuiteDePhrase + NombreDeStagiaire + FinDePhrase);

var phrase1 = "Je m'appelle ";
var phrase2 = "Hugo et j'ai ";
var age     = 28;
var phrase3 = " ans !";

document.write(phrase1 + phrase2 + age + phrase3);

