document.addEventListener("DOMContentLoaded", function() {
    const intentosMaximos = 6; // Número máximo de intentos
    let intentosRealizados = 1; // Número de intentos realizados
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
            año_comienzo: 2014,
            victorias: 0,
            campeonatos: 0,
            abreviatura: "MAG"
        },
        {
            nombre: "Nico Hulkenberg",
            equipo: "Haas",
            nacionalidad: "Alemana",
            año_comienzo: 2010,
            victorias: 0,
            campeonatos: 0,
            abreviatura: "HUL"
        },
    ];

    function llenarDesplegable() {
        const selectPilotos = document.getElementById("selectPilotos");
        pilotosF1.forEach(piloto => {
            const option = document.createElement("option");
            option.value = piloto.nombre;
            option.text = piloto.nombre;
            selectPilotos.appendChild(option);
        });
    }

    function iniciarJuego() {
        document.getElementById("introduction").style.display = "none";
        document.getElementById("game").style.display = "block";
        llenarDesplegable();
        // Obtener el piloto objetivo (por ahora, seleccionemos uno aleatoriamente)
        const pilotoObjetivo = pilotosF1[Math.floor(Math.random() * pilotosF1.length)];
        
        // Obtener el piloto seleccionado del desplegable
        const selectPilotos = document.getElementById("selectPilotos");
        const nombrePilotoSeleccionado = selectPilotos.value;
        const pilotoSeleccionado = pilotosF1.find(piloto => piloto.nombre === nombrePilotoSeleccionado);

        if (intentosRealizados !== 1) {
        // Mostrar la información del piloto seleccionado y el piloto objetivo
        mostrarInformacionPiloto(pilotoSeleccionado, pilotoObjetivo);
        }
        // Agregamos el evento change
        selectPilotos.addEventListener("change", function() {
            const nombreSeleccionado = this.value;
            const piloto = pilotosF1.find(piloto => piloto.nombre === nombreSeleccionado);
            mostrarInformacionPiloto(piloto, pilotoObjetivo);
            intentosRealizados++;
        });
    }
    
    
    function mostrarInformacionPiloto(pilotoSeleccionado, pilotoObjetivo) {
        const pilotoInfoList = document.createElement("ul");
        pilotoInfoList.classList.add("piloto-info");
    
        const nombresAtributos = Object.keys(pilotoSeleccionado).filter(atributo => atributo !== "abreviatura");
        for (const atributo of nombresAtributos) {
            const li = document.createElement("li");
            const spanValorAtributo = document.createElement("span");
    
            // Asignar colores según la comparación de valores
            let color = "inherit";
            if (atributo === "nombre" || atributo === "equipo" || atributo === "nacionalidad") {
                color = compararTexto(pilotoSeleccionado[atributo], pilotoObjetivo[atributo]);
            } else {
                const valorPilotoSeleccionado = pilotoSeleccionado[atributo];
                const valorPilotoObjetivo = pilotoObjetivo[atributo];
                color = compararNumeros(valorPilotoSeleccionado, valorPilotoObjetivo);
            }
    
            spanValorAtributo.style.backgroundColor = color;
            spanValorAtributo.textContent = pilotoSeleccionado[atributo];
            li.appendChild(spanValorAtributo);
            pilotoInfoList.appendChild(li);
        }
    
        const gameSection = document.getElementById("game");
        gameSection.insertBefore(pilotoInfoList, document.getElementById("selectPilotos"));

        if (pilotoObjetivo === pilotoSeleccionado) {
            // Mostrar mensaje de victoria y ocultar el desplegable
            const victoriaMensaje = document.createElement("p");
            victoriaMensaje.textContent = "¡Has ganado el juego!";
            document.getElementById("game").appendChild(victoriaMensaje);
            document.getElementById("selectPilotos").style.display = "none";
        } else if (intentosRealizados === intentosMaximos) {
            // Mostrar mensaje de derrota y la información del piloto objetivo
            const derrotaMensaje = document.createElement("p");
            derrotaMensaje.textContent = "¡Has perdido el juego! El piloto que tenías que adivinar era: " + pilotoObjetivo.nombre;
            document.getElementById("game").appendChild(derrotaMensaje);
            document.getElementById("selectPilotos").style.display = "none";
        }
    }

    function compararTexto(valorSeleccionado, valorObjetivo) {
        return valorSeleccionado === valorObjetivo ? "lightgreen" : "lightcoral";
    }
    
    function compararNumeros(valorSeleccionado, valorObjetivo) {
        if (valorSeleccionado === valorObjetivo) {
            return "lightgreen";
        } else if (valorSeleccionado > valorObjetivo) {
            return "lightcoral";
        } else {
            return "lightblue";
        }
    }
      
    document.getElementById("start-game").addEventListener("click", iniciarJuego);

});
