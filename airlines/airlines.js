//Programa una interfaz de usuario para una aerolínea (por consola...)




let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];


function askForNameAndGreet (){
    const userName = prompt('¡Hola! te pediremos que nos digas tu nombre👇🏼');
    alert(`Hola ${userName}, te damos la bienvenida!`);
}



function printFlights () {
    flights.forEach(function(flight){
        let escala;
        if (flight.scale === true){
            escala = 'este vuelo tiene escala.';
        } else {
            escala = 'este vuelo no tiene escala.';
        }
        console.log(`El vuelo con origen: ${flight.from}, y destino: ${flight.to}, tiene un coste de ${flight.cost} y ${escala}`)
    })
}



function printAverageCostFlights (){
    let sumaVuelos = 0;
    flights.forEach(function (flight) {
        sumaVuelos = sumaVuelos + flight.cost
    })
    console.log(`El coste promedio de vuelos es ${(sumaVuelos / flights.length).toFixed(2)}`)
}


function flightsWithScale () {
    let flightsScale = [];
    flights.forEach(function(flight){

        if (flight.scale === true){
            flightsScale.push(flight);
        } 
        })
        console.log(`Hay ${flightsScale.length} vuelos que tienen escala.`);
    } 


function printlast5Flights () {
    let last5Flights = flights.slice(-5);
    let last5Destinations = [];
    
    last5Flights.forEach(function(flight) {
       last5Destinations.push(flight.to)    
    })
    
    console.log(`Los destinos de los últimos 5 vuelos del día son: ${last5Destinations.toString()}.`)
} 


function executeFlights() {
    askForNameAndGreet();
    printFlights();
    printAverageCostFlights();
    flightsWithScale();
    printlast5Flights();
}

executeFlights();