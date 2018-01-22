/***************************************
 * INCREMENTATION ET DECREMENTATION
 * *************************************/

//  Incrémentation

var nb1 = 1;

nb1 = nb1 + 1

// ou ecriture simplifiée
nb1 ++; //incrémentaiton par pas de 1

document.write(nb1)

nb1--; //raccourci de nb1 = nb1 - 1; par pas de 1

/***************************************
 * SUBTILITE AFFICHAGE VS INCREMENTATION
 * *************************************/

 nb1 = 0;
//  va afficher nb1 avant que l'incrementation soit faite
 console.log(nb1++);
//  incrementation est faite donc va s'afficher
 console.log(nb1);

 nb1 = 0;
//  incrementation avant d'afficher
 console.log(++nb1);