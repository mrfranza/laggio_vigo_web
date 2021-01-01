//ajax here
const url = `https://api.openweathermap.org/data/2.5/weather?id=3170754&appid=a9abfe22cf907f28adbb590edbf03f28
&units=metric`;

var list = document.getElementById('lista')

fetch(url)
    .then(response => response.json())
    .then(data => {
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
weather[0]["icon"]
}.svg`;

        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
<div class="sfondo" id="sfondo"></div>
<h2 class="city-name" id="citynmn" data-name="${name},${sys.country}">
    <span>Laggio di Cadore (Belluno), Comune di Vigo di Cadore - FONTE: [${name}]</span>
    <sup>${sys.country}</sup>
</h2>
<div class="city-temp" id="temp">${main.temp}<sup>°C</sup></div>
<figure>
  <img class="city-icon" id="iconmenu" src="${icon}" alt="${
weather[0]["description"]
}">
</figure>
`;
        li.innerHTML = markup;
        list.appendChild(li);
        li.style.listStyle = "none";
        li.style.color = "black";
        CambiaColoreTitolo();
    })
    .catch((e) => {
        console.log("Please search for a valid city 😩\n" + e);
    });

window.setInterval(function() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, sys, weather } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
weather[0]["icon"]
}.svg`;
            const markuptemp = `${main.temp}<sup>°C</sup>`;
            const markupicon = `${icon}`;
            const markupdscr = `${weather[0]["description"]}`;

            document.getElementById("temp").innerHTML = markuptemp;
            document.getElementById('iconmenu')
                .src = markupicon;
            document.getElementById('iconmenu')
                .alt = markupdscr;
            console.log("Reload Meteo!");
            CambiaColoreTitolo();
        })
        .catch((e) => {
            console.log("Please search for a valid city 😩\n" + e);
        });
}, 10000);

var i = 0;
window.setInterval(function() {
    document.getElementById('sfondo').style.backgroundImage = "url('http://www.laggiodicadore.it/servizi/webcam/laggio/campanileweb.jpg?" + i + "')";
    i++;
}, 20000);