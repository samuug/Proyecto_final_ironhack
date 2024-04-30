const pilotosF1 = [
    {
        nombre: "Lewis Hamilton",
        equipo: "Mercedes",
        nacionalidad: "Británica",
        año_comienzo: 2007,
        victorias: 100,
        campeonatos: 7,
        abreviatura: "HAM"
    },
    {
        nombre: "George Russell",
        equipo: "Mercedes",
        nacionalidad: "Británica",
        año_comienzo: 2019,
        victorias: 2,
        campeonatos: 0,
        abreviatura: "RUS"
    },
    {
        nombre: "Max Verstappen",
        equipo: "Red Bull Racing",
        nacionalidad: "Neerlandesa",
        año_comienzo: 2015,
        victorias: 20,
        campeonatos: 1,
        abreviatura: "VER"
    },
    
    {
        nombre: "Sergio Pérez",
        equipo: "Red Bull Racing",
        nacionalidad: "Mexicana",
        año_comienzo: 2011,
        victorias: 2,
        campeonatos: 0,
        abreviatura: "PER"
    },
    {
        nombre: "Charles Leclerc",
        equipo: "Ferrari",
        nacionalidad: "Monegasca",
        año_comienzo: 2018,
        victorias: 2,
        campeonatos: 0, 
        abreviatura: "LEC"
    },
    {
        nombre: "Carlos Sainz",
        equipo: "Ferrari",
        nacionalidad: "Española",
        año_comienzo: 2015,
        victorias: 0,
        campeonatos: 0,
        abreviatura: "SAI"
    },
    {
        nombre: "Lando Norris",
        equipo: "McLaren",
        nacionalidad: "Británica",
        año_comienzo: 2019,
        victorias: 0,
        campeonatos: 0,
        abreviatura: "NOR"
    },
    {
        nombre: "Oscar Piastri",
        equipo: "McLaren",
        nacionalidad: "Australiana",
        año_comienzo: 2022,
        victorias: 1,
        campeonatos: 0,
        abreviatura: "PIA"
    },
    {
        nombre: "Fernando Alonso",
        equipo: "Aston Martin",
        nacionalidad: "Española",
        año_comienzo: 2001,
        victorias: 32,
        campeonatos: 2,
        abreviatura: "ALO"
    },
    {
        nombre: "Lance Stroll",
        equipo: "Aston Martin",
        nacionalidad: "Española",
        año_comienzo: 2018,
        victorias: 0,
        campeonatos: 0,
        abreviatura: "STR"
    },
    {
        nombre: "Esteban Ocon",
        equipo: "Alpine",
        nacionalidad: "Francesa",
        año_comienzo: 2016,
        victorias: 1,
        campeonatos: 0,
        abreviatura: "OCO"
    },
    {
        nombre: "Pierre Gasly",
        equipo: "Alpine",
        nacionalidad: "Francesa",
        año_comienzo: 2017,
        victorias: 1,
        campeonatos: 0,
        abreviatura: "GAS"
    },
    {
        nombre: "Yuki Tsunoda",
        equipo: "RB",
        nacionalidad: "Japonesa",
        año_comienzo: 2021,
        victorias: 0,
        campeonatos: 0,
        abreviatura: "TSU"
    },
    {
        nombre: "Daniel Ricciardo",
        equipo: "RB",
        nacionalidad: "Australiana",
        año_comienzo: 2011,
        victorias: 8,
        campeonatos: 0,
        abreviatura: "RIC"
    },
    {
        nombre: "Zhou Guanyu",
        equipo: "Kick Sauber",
        nacionalidad: "China",
        año_comienzo: 2022,
        victorias: 0,
        campeonatos: 0,
        abreviatura: "ZHO"
    },
    {
        nombre: "Valtteri Bottas",
        equipo: "Kick Sauber",
        nacionalidad: "Finlandesa",
        año_comienzo: 2013,
        victorias: 10,
        campeonatos: 0,
        abreviatura: "BOT"
    },
    {
        nombre: "Alexander Albon",
        equipo: "Williams",
        nacionalidad: "Tailandesa",
        año_comienzo: 2019,
        victorias: 0,
        campeonatos: 0,
        abreviatura: "ALB"
    },
    {
        nombre: "Logan Sargeant",
        equipo: "Williams",
        nacionalidad: "Estadounidense",
        año_comienzo: 2022,
        victorias: 0,
        campeonatos: 0,
        abreviatura: "SAR"
    },
    {
        nombre: "Kevin Magnussen",
        equipo: "Haas",
        nacionalidad: "Danesa",
        año_comienzo: 2021,
        victorias: 0,
        campeonatos: 0,
        abreviatura: "MAG"
    },
    {
        nombre: "Nico Hulkenberg",
        equipo: "Haas",
        nacionalidad: "Alemana",
        año_comienzo: 2021,
        victorias: 0,
        campeonatos: 0,
        abreviatura: "HUL"
    },
];

function cargarPilotos() {
    const selectPilotos = document.getElementById('selectPilotos');

    pilotosF1.forEach(piloto => {
        const option = document.createElement('option');
        option.textContent = piloto.nombre;
        selectPilotos.appendChild(option);
    });
}

// Función para mostrar la información de un piloto seleccionado
function mostrarInformacion(tipo, seleccion) {
    const contenido = document.getElementById(`info-${tipo}`);
    let datos = pilotosF1.find(piloto => piloto.nombre === seleccion);
    contenido.innerHTML = `
        <h3>${seleccion}, ${datos.abreviatura}</h3>
        <p>Equipo: ${datos.equipo}</p>
        <p>Nacionalidad: ${datos.nacionalidad}</p>
        <p>Año de comienzo: ${datos.año_comienzo}</p>
        <p>Victorias: ${datos.victorias}</p>
        <p>Campeonatos: ${datos.campeonatos}</p>
    `;
}

// Función para cargar los pilotos en el desplegable al cargar la página
window.onload = function() {
    cargarPilotos();
};