var flag1 = true;

$(document).ready(function() {

    setTimeout(function() {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
        $('#loader-wrapper').remove();
        flag1 = false;
    }, 4000);

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
        "Se ci dovesse mettere troppo prova a ricaricare o andare sul ciampon(Magari li qualcosa succede, ah si e ricordati di portare il cellulare carico)",
    ];

    tag.innerHTML = myArray[Math.floor(Math.random() * myArray.length)];

}
frase_a_caso()