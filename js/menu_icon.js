function MenuAnimation(x) {
    x.classList.toggle("change");
}

function ShowHideMenu() {
    var Menu = document.getElementById('menulaterale');
    Menu.classList.toggle("menuchange");

    var Scrivania = document.getElementById('scrivania');
    Scrivania.classList.toggle("scrivaniachange");
}