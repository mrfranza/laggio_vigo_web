fetch(url)
    .then(response => response.json())
    .then(data => {
        const { coord, weather, main } = data;
        appendTable(`Longitudine`, `${coord.lon}`);
        appendTable(`Latitudine`, `${coord.lat}`);
        appendTable(`ID (Identificativo Meteo)`, `${weather[0]["id"]}`);
        appendTable(`Meteo`, `${weather[0]["main"]}`);
        appendTable(`Descrizione`, `${weather[0]["description"]}`);
        appendTable(`Temperatura`, `${main.temp}`);
        appendTable(`Temperatura percepita`, `${main.feels_like}`);
        appendTable(`Temperatura Minima rilevata`, `${main.temp_min}`);
        appendTable(`Temperatura Massima rilevata`, `${main.temp_max}`);
        appendTable(`Pressione`, `${main.pressure}`);
        appendTable(`Umidità`, `${main.humidity}`);
        appendTable(`Velocità vento`, `${wind.speed} m/s`);
        appendTable(`Direzione`, `${wind.deg} Gradi`);

        console.log("Reload Meteo +++!");
    })
    .catch((e) => {
        console.log("Please search for a valid city 😩\n" + e);
    });

window.setInterval(function() {
    var tbodyRef = document.getElementById('tbodu3');
    tbodyRef.innerHTML = "";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { coord, weather, main, wind } = data;
            appendTable(`Longitudine`, `${coord.lon}`);
            appendTable(`Latitudine`, `${coord.lat}`);
            appendTable(`ID (Identificativo Meteo)`, `${weather[0]["id"]}`);
            appendTable(`Meteo`, `${weather[0]["main"]}`);
            appendTable(`Descrizione`, `${weather[0]["description"]}`);
            appendTable(`Temperatura`, `${main.temp}`);
            appendTable(`Temperatura percepita`, `${main.feels_like}`);
            appendTable(`Temperatura Minima rilevata`, `${main.temp_min}`);
            appendTable(`Temperatura Massima rilevata`, `${main.temp_max}`);
            appendTable(`Pressione`, `${main.pressure}`);
            appendTable(`Umidità`, `${main.humidity}`);
            appendTable(`Velocità vento`, `${wind.speed} m/s`);
            appendTable(`Direzione`, `${wind.deg} Gradi`);

            console.log("Reload Meteo +++!");
        })
        .catch((e) => {
            console.log("Please search for a valid city 😩\n" + e);
        });
}, 20000);

function appendTable(one, two) {
    var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();

    // Insert a cell at the end of the row
    var newCell = newRow.insertCell();
    // Append a text node to the cell
    var newText = document.createTextNode(one);
    newCell.appendChild(newText);

    var newCell = newRow.insertCell();
    var newText = document.createTextNode(two);
    newCell.appendChild(newText);
}