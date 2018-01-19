// Permet de commentaire uniligne.

/*
    Permet de faire un commentaire sur plusieurs ligne */

var prenom;

// attention a la case dans la déclaration des variables

prenom = "Hugo";

// affichage de la variable dans la console inspecter-->console
console.log(prenom);


//********************** LES TYPES DE VARIABLES

//Connaitre le type de variable
console.log(typeof prenom);

// déclarer et attribuer dans le même temps
var Age = 40;

console.log(Age);

console.log(typeof Age);

/*----------------------------------------------
           LA PORTEE DES VARIABLE
Les variables déclarées directement à la racine du fichier JS
sont appelés variables GLOBALES 

elles sont disponibles dans l'ensemble de votre document,
y compris dans les fonctions.
###
Les variables déclarées à l'intérieur d'une fonction sont appelées
variables LOCALES.
###

Depuis ECMA 6, vous pouvez déclarer une variable avec le mot clé
"let". Votre variable sera alors accessible dans le bloc dans lequel,
elle est contenu c'est à dire déclarée.

Si elle est déclarée dans une condition, elle sera disponible, uniquement
dans le bloc de la condition.

--------------------------------------*/

/* Variables FLOAT, JS attribut un type number mais si on met un
chiffre à virgule, attention systm américain donc virgule est un point*/
var uneDecimale = -2.489;
console.log(uneDecimale);
console.log(typeof UneDecimale);

// les boléens VRAI FAUX
var unBooleen = false; //true
console.log(unBooleen);
console.log(typeof unBooleen);

/* Les constantes

La déclaration CONST permet de créer une constante
accessible uniquement en lecture. Sa valeur ne pourra pas
être modifiée par des réaffectations ultérieures. Une constante
ne peut pas être déclarée à nouveau.
Par convention, les constante sont déclarées en majuscules.*/

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

/* Je ne peux pas faire cela
USER = "Hugo";
Uncaught TypeError: Assignment to constant variable
*/

/*------------------------------------------------------------
                    LA MINUTE INFO
Au fur et à mesure que l'on affect ou ré affecte des valeurs
à une variable, celle ci prend la nouvelle valeur et le 
nouveau type.

En javascript, (ECMA script); les variables sont auto-typées.
Pour convertir une varible de type number en STRING et STRING
en NUMBER je peux utiliser les fonctions natives de Javascript.
-------------------------------------------------------------*/

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);
/* la fonction parseInt pour retourner un Entier à partir d'une
chaîne de caractère*/
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);
// float pour la conservation des décimales
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Conversion d'un nombre en String avec toString()

unNombre = 10;
var maChaineDeCaractere = unNombre.toString();
console.log(typeof unNombre);
console.log(typeof maChaineDeCaractere);