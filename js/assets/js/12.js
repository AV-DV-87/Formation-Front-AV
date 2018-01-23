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

// afficher la liste des élèves avec mise en forme HTML
listeEleves :
for (var i = 0 ; i < PremierTrimestre.length; i++) {
    document.write('<ul><li>'+PremierTrimestre[i].nom+ ' ' +PremierTrimestre[i].prenom+ '</li></ul>');
}

// afficher note
document.write('afficher moyenne');
document.write(+PremierTrimestre[1].moyenne['francais']);

//afficher matiere et note dans la console par élève
PremierTrimestre.forEach(afficheMatMoy);

function afficheMatMoy(PremierTrimestre, x) {
    document.write('<ul><li>' + PremierTrimestre.prenom + ' ' + PremierTrimestre.nom + 
    '</li><ul><li>'+PremierTrimestre.moyenne+'</li></ul></ul>');
}



// afficher les matière et la moyenne
for (var j = 0; j < PremierTrimestre.length; j++) {
    document.write('<ul><li>Francais : ' +afficheMatMoy(PremierTrimestre[j])+ '</li></ul>');
}

// affichage élève avec ses moyennes avec FOR mais matière à la main
for (var i = 0 ; i < PremierTrimestre.length; i++) {
    document.write('<ol><li>'+PremierTrimestre[i].nom+ ' ' +PremierTrimestre[i].prenom+ 
    '<ul><li>Francais : ' +PremierTrimestre[i].moyenne['francais']+ '</li><li>Math : ' +PremierTrimestre[i].moyenne['math']+ '</li></li></ol>');
}

// voir correction dossier formateur