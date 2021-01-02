var flag1 = true;

$(document).ready(function() {

    setTimeout(function() {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
        $('#loader-wrapper').remove();
        flag1 = false;
    }, 0);

});


var dots = window.setInterval(function() {
    if (flag1) {
        var wait = document.getElementById("attesa");
        if (wait.innerHTML.length > 23)
            wait.innerHTML = "Caricamento in corso ";
        else
            wait.innerHTML += ".";
    } else {
        //LOADED
    }
}, 300);


function frase_a_caso() {
    var tag = document.getElementById("frase_a_caso");
    var myArray = [
        "Le Montagne Pesano...dammi il tempo di scaricarle",
        "A Laggio la connessione non va sempre bene quindi per piacere..dimenticati questo sito",
        "Servizio aperto 24/24 senza pubblicità e accessibile a tutti",
        "Se ci dovesse mettere troppo prova a ricaricare o andare sul ciampon" +
        "(Magari li qualcosa succede, ah si e ricordati di portare il cellulare carico)",
        "Curiosità: la connessione è più veloce con una palanca di vino",
        "Aspetti da troppo?...fatti una partita a briscola",
        "Aspetta che smetta di nevicare sul Tudaio",
        "Cos'è questo profumo di ragù ?!?",
        "Attenzione, avvistato nativo del luogo a fissare un cantiere, elaborazione in corso..."
    ];

    tag.innerHTML = myArray[Math.floor(Math.random() * myArray.length)];

}
frase_a_caso()