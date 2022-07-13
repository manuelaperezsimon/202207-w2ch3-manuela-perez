const infoPlayers = [
    { name: 'Roberto López', points: 67},
    { name: 'Susana Gasol', points: 43},
    { name: 'Silvia Rodríguez', points: 17}
];


function askPlayerNameAndGreet (){
    const playerName = prompt('Hi! ¿What is your fullname?');
     alert(`¡Hey ${playerName}! 
     We have a point system to see what place you will be occupying in the global ranking.
     You start with a score of 90 and for each turn that is executed, one point will be deducted.
     The fewer laps you take to get to Bingo, you will have more points! ¡LET'S PLAY!`);

    
    const newPlayer = {name: playerName, points: 0};
    infoPlayers.push(newPlayer);
}
 

let bingoCard = [];

function introducingRandomNumbersInBingoCard () {
     bingoCard = [];
     while (bingoCard.length < 15){
      
         let randomNumber = Math.floor(Math.random()*90)+ 1;

        const numbersRepeated = bingoCard.filter((bingoNum) => bingoNum === randomNumber);

         if (numbersRepeated.length === 0){
             bingoCard.push(randomNumber)
         }
     }
     const cardToPrint = {
         firstLine: bingoCard.slice(0,5),
         secondLine: bingoCard.slice(5,10),
         thirdLine: bingoCard.slice(10,15)   
     }
     console.table(cardToPrint);

} 

 
let randomNumbersBombo;
function RandomNumbersRepeatedInBombo () {
    randomNumbersBombo = [];
    while (randomNumbersBombo.length < 90){
     
        let randomNumber = Math.floor(Math.random()*90)+ 1;

       const randomNumbersRepeated = randomNumbersBombo.filter((randomNumberBombo) => randomNumberBombo === randomNumber);

        if (randomNumbersRepeated.length === 0){
            randomNumbersBombo.push(randomNumber)
        }
    }
} 


  
 function askChangeOrNotBingoCard(){
    
    const wantToChange = prompt('¿Do you want to change this Bingo Card? Yes/No. If you put another answer we will consider it to start playing.');

    if (wantToChange.toUpperCase() === 'YES'){
        return true

    } else {
        return false
    }   
    return wantToChange;
}



function compareRandomNumberInBomboWithNumberInBingoCard(bingoCard, currentBomboNumber) {
    
    let isAMatch = false;
    let counter;
    bingoCard = bingoCard.map(function(element, index) {
    
        if (element === currentBomboNumber){
            isAMatch = true;
            bingoCard[index] = 'X';
            
            return 'X'
        }  else {
            return element
        }
        
        
    })  
    
    if(isAMatch){
        alert(`The number that came out is ${currentBomboNumber} and there was a MATCH.`);
    } else {
        alert(`The number that came out is ${currentBomboNumber} and there was NO a match.`);
    }

    console.table(bingoCard);      
} 


function askKeepPlaying () {
    let confirmKeepPlaying = confirm('¿Do you want to keep playing?');

    if (confirmKeepPlaying) {
        return true
    
    } else {
       return false
    }
    return confirmKeepPlaying
}


function hasLine (bingoCard) {

    let contador1 = 0;
    let linea1 = false;
    for (let i = 0; i <= 4; i++){
        if (bingoCard[i] === 'X'){
            contador1 ++;
        }
    }
    if (contador1 === 5){
        linea1 = true;
    }

    let contador2 = 0;
    let linea2 = false;
    for (let i = 5; i <= 9; i++){
        if (bingoCard[i] === 'X'){
            contador2++;
        }
    }
    if (contador2 === 5){
        linea2 = true;
    }

    let contador3 = 0;
    let linea3 = false;
    for (let i = 10; i <=14; i++){
        if(bingoCard[i] === 'X'){
            contador3++;
        }
    }
    if (contador3 === 5){
        linea3 = true;
    }

    if (linea1 || linea2 || linea3){
        return true  
    } else {
        return false
    }
}


function hasBingo (bingoCard){
    let contadorBingo = 0;

    for (let i = 0; i < bingoCard.length; i++){
        if (bingoCard[i] === 'X'){
            contadorBingo++;
        }
    }

    console.table(bingoCard);

    if (contadorBingo === bingoCard.length){
        alert('Wooww, You won: BINGO!')
        return true
    } else {
        return false
    } 
}


function showRankig (infoPlayers){
    infoPlayers.sort(function (a,b){
      return  b.points - a.points
    }) 
    console.table(infoPlayers); 
}


function executeBingo (){
    askPlayerNameAndGreet();
    introducingRandomNumbersInBingoCard();
    RandomNumbersRepeatedInBombo ();
    
   
    let wantToChange = askChangeOrNotBingoCard();
    
    if (wantToChange){
        introducingRandomNumbersInBingoCard();
    }


    let confirmKeepPlaying = askKeepPlaying ();
    let bingo = hasBingo(bingoCard);
    let index = 0;
    let showAlertLine = true;
    let counter = 0;
    let totalPoints = 90;


    while (confirmKeepPlaying && bingo !== true) { 
        
        
        compareRandomNumberInBomboWithNumberInBingoCard(bingoCard, randomNumbersBombo[index]);

        let linea = hasLine(bingoCard)
        if (linea && showAlertLine) {
            alert('Wooww, You have a LINE!');  
            showAlertLine = false;  
        } //semáforo

        confirmKeepPlaying = askKeepPlaying ();
        bingo = hasBingo(bingoCard);
        index++;
        counter++;   
    }

    let playersPoints = totalPoints - counter;
    infoPlayers[infoPlayers.length - 1].points = playersPoints;
    
    if (bingo){
        showRankig(infoPlayers);    
    } else if (!bingo){
        infoPlayers[infoPlayers.length - 1].points = 0;
        alert('Thank you for play! See you soon!');
    }
   
}

executeBingo ();