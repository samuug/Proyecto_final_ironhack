const equiposF1 = [
    {
        nombre: "Mercedes",
        año_comienzo: 1954,
        victorias: 116,
        campeonatos: 8
    },
    {
        nombre: "Red Bull Racing",
        año_comienzo: 2005,
        victorias: 72,
        campeonatos: 4
    },
    {
        nombre: "McLaren",
        año_comienzo: 1966,
        victorias: 182,
        campeonatos: 8
    },
    {
        nombre: "Ferrari",
        año_comienzo: 1950,
        victorias: 238,
        campeonatos: 16
    },
    {
        nombre: "Alpine",
        año_comienzo: 1977,
        victorias: 20,
        campeonatos: 2
    },
    {
        nombre: "Aston Martin",
        año_comienzo: 2020,
        victorias: 1,
        campeonatos: 0
    },
    {
        nombre: "RB",
        año_comienzo: 2006,
        victorias: 3,
        campeonatos: 0
    },
    {
        nombre: "Kick Sauber",
        año_comienzo: 1993,
        victorias: 10,
        campeonatos: 0
    },
    {
        nombre: "Williams",
        año_comienzo: 1977,
        victorias: 114,
        campeonatos: 9
    },
    {
        nombre: "Haas",
        año_comienzo: 2016,
        victorias: 0,
        campeonatos: 0
    }
];

function cargarEquipos() {
    const selectEquipos = document.getElementById('selectEquipos');

    equiposF1.forEach(equipo => {
        const option = document.createElement('option');
        option.textContent = equipo.nombre;
        selectEquipos.appendChild(option);
    });
}

// Función para mostrar la información de un equipo seleccionado
function mostrarInformacion(tipo, seleccion) {
    const contenido = document.getElementById(`info-${tipo}`);
    let datos = equiposF1.find(equipo => equipo.nombre === seleccion);
    contenido.innerHTML = `
        <h3>${seleccion}</h3>
        <p>Año de comienzo: ${datos.año_comienzo}</p>
        <p>Victorias: ${datos.victorias}</p>
        <p>Campeonatos: ${datos.campeonatos}</p>
    `;
}

// Función para cargar los equipos en el desplegable al cargar la página
window.onload = function() {
    cargarEquipos();
};