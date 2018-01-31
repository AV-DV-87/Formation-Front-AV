/*

OBJECTIF : A partir d'une liste de contacts, être en mesure de récupérer un contact et d'afficher le détail de ses informations.

CONSIGNE :

    Un internaute doit pouvoir rechercher un contact sur la base de son Username, Email, Phone ou Name
    
	Le résultat des contacts correspondant s'affiche ensuite dans une liste en dessous du champ de recherche.

    ETAPE 1. Mettre en Place le HTML et le CSS nécessaire pour rechercher un contact.
        Ex. Un champ input-text, et/ou un bouton pour lancer la recherche.
        
    ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username, ...
    Attention à la case de ce qui est saisi ==travail sur les input en les normalisant par exemple == sinon REgEx i
    fadetoggle pour l'effet 

    ETAPE 3. Afficher en HTML et CSS uniquement les informations de base : Nom, Prénom, Email, Téléphone.
    
    
*/
$(function(){

    // récupérer le JSON, attention appeler le JSON plutôt à l'intérieur de l'event
    $.getJSON('https://jsonplaceholder.typicode.com/users', function(contact) {
        console.log(contact);
        // événément keyup à surveiller pour la recherche
        $('#search').on('input',function(){
        // possible de remplacer par DeBounce fonction Lodash sur on('input')
            
            // récupérer la valeur du champs de recherche
            var recherche = $('#search').val();
            console.log(recherche);            
            // fonction de recherche
            $.each(contact, function(i, v) {
                $('div.membre').hide();
                // fonction empty pour vider les résultats avant d'afficher les nouveaux
                // formatage des données
                // var username = new RegExp('$(v.username)', 'gi');
                
                // le if peut aussi contenir les RegEx
                if (recherche === v.username || recherche === v.name || recherche === v.email || recherche === v.phone) {
                    $(`
                        <div class="membre">
                            <div class="membre_informations">
                                <p>Nom Complet : ${v.name}</p>
                                <p>Username : ${v.username}</p>
                                <p>Email : ${v.email}</p>
                                <p>Téléphone : ${v.phone}</p>
                            </div>
                        </div>
                    `).appendTo('div.resultat');
                    return false;
                } //fin du IF
                
            });
            
            // for (var i=0; i<contact.length; i++) {
            //     var username = contact[i].username;
            //     console.log(username);
            //     if (recherche == username) {
            //       $('<p>OK</p>').appendTo('resultat'); 
                    
            //     }; //FIN DE IF
            // }; //END OF FOR
        }); //END OF KEYUP
    }) //END DE GETJSON
}); //END JQUERY




// // Afficher les contacts dans une structure HTML dans div class resultat
// $(`
//     <div class="membre">
//         <div class="membre_informations">
//             <p>Nom Complet : ${contact[1].name}</p>
//             <p>Username : ${contact[1].username}</p>
//             <p>Email : ${contact[1].email}</p>
//             <p>Téléphone : ${contact[1].phone}</p>
//         </div>
//     </div>
// `).appendTo('div.resultat');