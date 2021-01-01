var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}

function Maps() {
    switch (slideIndex) {
        case 1:
            window.open("https://www.google.it/maps/place/Chiesa+di+Sant'Antonio+Abate/@46.4954713,12.4824338,18.27z/data=!4m8!1m2!2m1!1scampanile+laggio+di+cadore!3m4!1s0x4779c6e0b933c7ed:0xc8f1746840e0dcec!8m2!3d46.4957685!4d12.4817629", "_blanl");
            break;
        case 2:
            window.open("https://www.google.it/maps/place/Appostamento+di+Col+Ciampon/@46.5088717,12.4750004,628m/data=!3m2!1e3!4b1!4m5!3m4!1s0x4779c6ed9f9f6699:0xfa523397185e0740!8m2!3d46.508868!4d12.4771891", "_blank")
            break;
        case 3:
            window.open("https://www.google.it/maps/place/Albergo+Miramonti/@46.4973677,12.4755243,16.28z/data=!4m5!3m4!1s0x4779c6e69ddc6cd7:0xd523bce6a89d6ad3!8m2!3d46.497364!4d12.477713", "_blank");
            break;
        case 4:
            window.open("https://www.google.it/maps/place/Parrocchia+di+San+Martino/@46.4989464,12.468225,17z/data=!3m1!4b1!4m5!3m4!1s0x4779c6e4b16b0f63:0x509b401a36cd82cf!8m2!3d46.4989427!4d12.4704137", "_blank")
            break;
        default:
            console.log("Index Error");
            break;
    }
}
var i = 1;