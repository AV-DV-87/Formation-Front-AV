// <!-- CONSIGNE : Avec l'aide de jQuery, vous devrez :
    
//         1. A l'aide d'une API de Géolocalisation, vous affichez dans un paragraphe du formulaire l'adresse IP ainsi que la Ville et/ou Code Postal de l'utilisateur connecté.
        
//         // -- Utilisation de JSONP : geoip.nekudo.com || ip-api.com
     
//     -->
$(function() {

    // -- 1. Une requète AJAX Simple
    // $.ajax('http://geoip.nekudo.com/api/')
    // .done(function(resultat) {
    //     console.log(resultat);
    //     console.log(resultat.ip)
    // });

    // -- 2. avec getJSON
    $.getJSON('https://ipapi.co/json/', function(resultat) {
        console.log(resultat);

        $(`
            <p>
                Votre IP est surveillée : ${resultat.ip}
                <br> ${resultat.org} - ${resultat.region} 
           </p>                
        `).css({'background':'yellow','color':'red'}).appendTo($('form'));

    });

})
