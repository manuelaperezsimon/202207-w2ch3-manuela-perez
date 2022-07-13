

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




function askAdminOrUser (){
    let role = prompt('¿Are you admin or user?');

    if (role === null) {
        role = askAdminOrUser();
    } else if (role.toUpperCase() !== 'ADMIN' && role.toUpperCase() !== 'USER') {
        alert("It's not valid. Try again");
        role = askAdminOrUser();
    } else {
        role = role.toUpperCase();
    }    
    return role;
}


function askForAction (){
    let action; 
    action = prompt('¿Do you want to create a flight or delete a flight? create/delete')
    console.log(action, action.toUpperCase() === 'CREATE', action.toUpperCase() !== 'DELETE')

    if (action == null){
        action = askForAction();
    } else if (action.toUpperCase() !== 'CREATE' && action.toUpperCase() !== 'DELETE'){
        action = askForAction();
    }
    return action.toUpperCase();
}


function adminActions (){
    const actionAsked = askForAction();
    if (actionAsked === 'CREATE'){
        createFlights();
    } else {
       flights = deletedFlights();
    }

}

function createFlights () {
    const newFlight = {};
    let scale;
    alert('We will ask you for information to create a new flight');
    
    let lastFlight = flights[flights.length-1];
    newFlight.id = lastFlight.id + 1;

    newFlight.to = prompt('¿What is the destination of the flight?');
    newFlight.from = prompt('¿What is the departure point of the trip?');
    newFlight.cost = +prompt('¿What is the price of the trip?');
    scale = prompt('¿Does the flight have a scale? Yes/No')
   
    if (scale.toUpperCase() === 'YES') {
        newFlight.scale = true;
    } else if (scale.toUpperCase() === 'NO'){
        newFlight.scale = false;
    }
    

    if (flights.length >= 15) {
        alert("You cannot enter more flights")
    } else {
        flights.push(newFlight);
    }

    printFlights(flights);
    askIfWantNewAction();

}

function askIfWantNewAction() {
    let wantNewAction = prompt('¿Do you want to do another action? YES/NO');

    if (wantNewAction.toLowerCase() === 'yes') {
        adminActions();
    } else {
        alert('Thank you. See you soon')
    }

}

function deletedFlights () {
    printFlights(flights);
    const id = +prompt('¿What is the ID you want to delete?');
    const newListOfFlights = flights.filter(
        (flight) => flight.id !== id
    );
    
    alert(`Your flight with ID ${id} has been deleted`);

    askIfWantNewAction();

    return newListOfFlights;
}



function printFlights (flights) {
    flights.forEach(function(flight){
        let escala;
        if (flight.scale === true){
            escala = 'este vuelo tiene escala.';
        } else {
            escala = 'este vuelo no tiene escala.';
        }
        console.log(`El vuelo con origen: ${flight.from}, y destino: ${flight.to}, tiene un coste de ${flight.cost} y ${escala}. Su ID es ${flight.id}.`)
    })
}

function buyFlightsByUser () {
    let userPrice = +prompt('What do you want the price of the flight to be?')
    
    let listForUser = flights.filter(
        (flight) => userPrice >= flight.cost
    );
    
    printFlights(listForUser);

    let selectedIDbyUser = +prompt('¿What is the ID of the flight you want to buy?');

    let isIdOk = listForUser.some(
        (flight) => flight.id === selectedIDbyUser
    );

    if (isIdOk){
        alert("Thank you for your purchase, come back soon.");
    } else if (!isIdOk){
        alert('The ID is not valid. Try again');
        isIdOk = buyFlightsByUser ();       
    }  

    return isIdOk
}




function executeFlights() {
    const role = askAdminOrUser();
    if (role === 'ADMIN'){
        adminActions ();
    } else {
        buyFlightsByUser ();
    }    
}

executeFlights();
