/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [

    {
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        moyenne : {
            francais : 4,
            math     : 6,
            physique : 18
        }
    },
    {
        prenom  : "Maxime",
        nom     : "JOYES",
        moyenne : {
            francais : 4,
            math     : 5,
            physique : 12,
            svt      : 15
        }
    },
    {
        prenom  : "John",
        nom     : "GARCIA",
        moyenne : {
            francais : 4,
            math     : 13,
            physique : 12,
            espagnol : 19
        }
    },
    {
        prenom  : "Hana",
        nom     : "MATTEI",
        moyenne : {
            francais : 14,
            math     : 13,
            physique : 13,
            anglais  : 16
        }
    }

];

// --Flemards.js
function l(e) {
    console.log(e);
}
function w(e) {
    document.write(e);
}

w('<ol>');
for(let i = 0 ; i<PremierTrimestre.length ; i++) {
    let Etudiant = PremierTrimestre[i];
    l(Etudiant)
    var NombreDeMatiere = 0, SommeDesNotes =0;
        w('<li>');
            w(Etudiant.prenom + ' ' + Etudiant.nom);
            w('<ul>');
                /* boucle des étudiants qui est imbriquée donc se répète 
                et met en attente sa boucle parente*/
                for(let matiere in Etudiant.moyenne) {
                    
                    NombreDeMatiere++;
                    // va augmenter de 1 à chaque iteration
                    l(NombreDeMatiere)
                    SommeDesNotes += Etudiant.moyenne[matiere];
                    /* va augmenter sommedesnotes de sa valeur 
                    + valeur de la matiere parcourue*/
                    l(SommeDesNotes)
                    w('<li>');
                        w(matiere + ' : ' + Etudiant.moyenne[matiere]);
                    w('</li>');
                } //fin de la boucle matiere
                w('<li>');
                w('<strong>Moyenne générale : </strong>' + (SommeDesNotes / NombreDeMatiere).toFixed(2));
                w('</li>');
                w('</ul>');
        w('</li>');
}
w('</ol>');
