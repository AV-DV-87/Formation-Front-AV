$(function() {
    $.getJSON('https://jsonplaceholder.typicode.com/posts', function(resultat) {
        console.log(resultat);
        
        // TEST affichage titre article 1
        var article1 = resultat[0].title;
        console.log(article1);

        for (var i=0 ; i<=10 ; i++) {
        // peut être remplacé par $.each(articles, function(indice, article){}) 
        // récupération du titre et du contenu
        var titre = resultat[i].title;
        var contenu = resultat[i].body;
        // affichage en HTML
        $(`
        <section>
            <header>
                <h1>${titre}</h1>
            </header>
            <article>
                <p>${contenu}</p>
            </article>
        </section>                
        `).appendTo('main');
        
        }
    }); 
    
        
    $('#markJS').on('keyup',function(){
        // enlève les surlignement précedents
        $('main').unmark();
        // ajoute un surlignement sur le terme saisi et this = #markJS
        $('main').mark($(this).val(),{
        // Chainage de methode $('main').unmark().mark($(this).val() ou option);
            "accuracy": {
                "value": "exactly",
                "limiters": [",", "."]
            }
            
        });

    });


}); //END JQUERY