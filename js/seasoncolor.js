// Return the southern hemisphere season for a date
// If no date provided, uses current system date
function getSeason(d) {
    d = d || new Date();
    var mon = d.getMonth() + 1; // Adjust to be indexed from 1
    var day = d.getDate();
    var seasons = ['estate', 'autunno', 'inverno', 'primavera'];

    // Do silly seasons here
    if (mon == 12) {
        if (day >= 13 && day <= 27) {
            return 'natale';
        }
        if (day >= 28 && day <= 31) {
            return 'capodanno';
        }
    }

    // If wasn't a silly season, do others
    mon = Math.floor((mon % 12) / 3);
    return seasons[mon];
}

function CambiaColoreTitolo() {

    var title = document.getElementById("citynmn");
    switch (getSeason()) {
        case "estate":
            title.style.backgroundColor = "#33CCFF";
            break;
        case "inverno":
            title.style.backgroundColor = "#d0e2f2";
            break;
        case "primavera":
            title.style.backgroundColor = "#F3A8BC";
            break;
        case "autunno":
            title.style.backgroundColor = "#f47b20";
            break;
        case "natale":
            title.style.backgroundColor = "red";
            break;
        case "capodanno":
            title.style.backgroundColor = "blue";
            break;
        default:
            title.style.backgroundColor = "black";
            break;
    }
}