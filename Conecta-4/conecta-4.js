let tablero = [
    ['bl', 'bl','bl','bl','bl','bl', 'bl'], 
    ['bl', 'bl','bl','bl','bl','bl', 'bl'],
    ['bl', 'bl','bl','bl','bl','bl', 'bl'],
    ['bl', 'bl','bl','bl','bl','bl', 'bl'],
    ['bl', 'bl','bl','bl','bl','bl', 'bl'],
    ['bl', 'bl','bl','bl','bl','bl', 'bl']
];


let turnoFichaColor = 'red';

function clickInsertarFicha(indexColumna) {
               
    for (let i = tablero.length - 1 ; i >= 0; i--) {
        if (tablero[i][indexColumna] === 'bl') {
            tablero[i][indexColumna] = turnoFichaColor;
            document.getElementsByClassName('fila')[i].children[indexColumna].style.backgroundColor = turnoFichaColor;
            break; 
        }
    } 
    
    const todaLaColumnaEsBlanca = tablero.every((filaActual) => {
        if (filaActual[indexColumna] !== 'bl'){
            return true
        }else {
            return false
        }    
    })

    if (todaLaColumnaEsBlanca) {
        document.getElementsByClassName('insertar')[indexColumna].disabled = true;
    }

    verificacionCuatroEnLinea();
    verificacionCuatroEnColumna();
    verificacionCuatroEnDiagonal();
    verificarEmpate();
    

    if (turnoFichaColor === 'red') {
        turnoFichaColor = 'blue'
    } else {
        turnoFichaColor = 'red'
    }
}


document.getElementsByClassName('primera-columna')[0].addEventListener('click', () => clickInsertarFicha(0));
document.getElementsByClassName('segunda-columna')[0].addEventListener('click', () => clickInsertarFicha(1));
document.getElementsByClassName('tercera-columna')[0].addEventListener('click', () => clickInsertarFicha(2));
document.getElementsByClassName('cuarta-columna')[0].addEventListener('click', () => clickInsertarFicha(3));
document.getElementsByClassName('quinta-columna')[0].addEventListener('click', () => clickInsertarFicha(4));
document.getElementsByClassName('sexta-columna')[0].addEventListener('click', () => clickInsertarFicha(5));
document.getElementsByClassName('septima-columna')[0].addEventListener('click', () => clickInsertarFicha(6));

function preguntarVolverAJugar() {
    let volverAjugar = document.getElementsByClassName('volver-jugar')[0];
    volverAjugar.style.visibility = 'visible';
}

isSomeoneWin = false; 

function desactivarBotonesAlGanar () {

    if (isSomeoneWin) {
        let botonesInsertar = document.querySelectorAll('.insertar');
        botonesInsertar.forEach(boton => boton.disabled = true);
    }

    preguntarVolverAJugar();
}

function verificarEmpate() {
    let mensajeFinal = document.getElementsByClassName('mensaje-Final')[0];

   let hayEmpate = tablero.every(fila => {
        let filaSinBlancos = fila.every(celda => {
            if (celda !== 'bl') {
                return true
            } else {
                return false
            }
        }) 

        if (filaSinBlancos) {
            return true
        } else {
            return false
        }
    }) 

   if (hayEmpate && !isSomeoneWin) {
     mensajeFinal.innerText = 'Ha habido un empate!'
     preguntarVolverAJugar();
   }


}




function verificacionCuatroEnLinea() {

    for (let i = 0; i < tablero.length; i++) {
        let contador = 0;
        for (let j = 0; j < tablero[i].length; j++) {
            if (turnoFichaColor === tablero[i][j]) {
                contador++;
            } else {
                contador = 0;
            }

            verificarContador (contador);
        }
    }        
}




function verificacionCuatroEnColumna() {

    for (let columna = 0; columna < tablero[0].length; columna++) {
        let contador = 0;
        for (let fila = 0; fila < tablero.length; fila++) {
            if (turnoFichaColor === tablero[fila][columna]) {
                contador++;
            } else {
                contador = 0;
            }

            verificarContador (contador);
        }
    }    
}


function verificarContador (contador) {
    let mensajeFinal = document.getElementsByClassName('mensaje-Final')[0];
    
    
    if (contador === 4) {
        if (turnoFichaColor === 'red') {
            turnoFichaColor = 'rojo';
            mensajeFinal.innerText = `¡4 en línea! ¡Ha ganado el jugador con la ficha color ${turnoFichaColor}!`;
            isSomeoneWin = true;
            desactivarBotonesAlGanar ();
        }else if (turnoFichaColor === 'blue'){
            turnoFichaColor = 'azul';
            mensajeFinal.innerText = `¡4 en línea! ¡Ha ganado el jugador con la ficha color ${turnoFichaColor}!`
            isSomeoneWin = true;
            desactivarBotonesAlGanar ();
        }
    }
}


function verificacionCuatroEnDiagonal() {
    let contador = 0; 
    
    for (let i = 0; i < 6; i++) {
        let j = i - 1;

        if (turnoFichaColor === tablero[i][i]) {
            contador++;
        } else {
            contador = 0;
        }
        verificarContador (contador);
    }


    contador = 0;
    for (let i = 1; i < 6; i++) {
         let j = i - 1;
       
        if (turnoFichaColor === tablero[i][j]) {
            contador++;
        } else {
            contador = 0;
        }
        verificarContador (contador);
    }

    contador = 0;
    for (let i = 2; i < 6; i++) {
        let j = i - 2;
      
       
       if (turnoFichaColor === tablero[i][j]) {
           contador++;
       } else {
           contador = 0;
       }
       verificarContador (contador);
    }

    contador = 0;
    for (let i = 0; i < 6; i++) {
        let j = i + 1;

        if (turnoFichaColor === tablero[i][j]) {
            contador++;
        } else {
            contador = 0;
        }
        verificarContador (contador);
    }

    contador = 0;
    for(let i = 0; i < 5; i++) {
        let j = i + 2;

        if (turnoFichaColor === tablero[i][j]) {
            contador++;
        } else {
            contador = 0;
        }
        verificarContador (contador);
    }

    contador = 0;
    for(let i = 0; i < 4; i++) {
        let j = i + 3;

        if (turnoFichaColor === tablero[i][j]) {
            contador++;
        } else {
            contador = 0;
        }
        verificarContador (contador);
    }

    contador = 0;
    let j = 3;
    for(let i = 0; i < 4; i++) {
    
        if (turnoFichaColor === tablero[i][j]) {
            contador++;
        } else {
            contador = 0;
        }
        verificarContador (contador);
        j--;
    }

    contador = 0;
    j = 4;
    for(let i = 0; i < 5; i++) {
    
        if (turnoFichaColor === tablero[i][j]) {
            contador++;
        } else {
            contador = 0;
        }
        verificarContador (contador);
        j--;
    }

    contador = 0;
    j = 5;
    for(let i = 0; i < 6; i++) {
    
        if (turnoFichaColor === tablero[i][j]) {
            contador++;
        } else {
            contador = 0;
        }
        verificarContador (contador);
        j--;
    }

    contador = 0;
    j = 6;
    for(let i = 1; i < 6; i++) {
    
        if (turnoFichaColor === tablero[i][j]) {
            contador++;
        } else {
            contador = 0;
        }
        verificarContador (contador);
        j--;
    }    

    contador = 0;
    j = 6;
    for(let i = 2; i < 6; i++) {
    
        if (turnoFichaColor === tablero[i][j]) {
            contador++;
        } else {
            contador = 0;
        }
        verificarContador (contador);
        j--;
    }    
}


function clickReiniciar() {

    tablero = tablero.map(() => {
        return ['bl', 'bl', 'bl', 'bl', 'bl', 'bl', 'bl', 'bl']   
    });

    let celdas = document.querySelectorAll('.celda');
    celdas.forEach(celda => celda.style.backgroundColor = 'white')
    
    turnoFichaColor = 'red';
    let botonesInsertar = document.querySelectorAll('.insertar');
    botonesInsertar.forEach(boton => boton.disabled = false)

    let mensajeFinal = document.getElementsByClassName('mensaje-Final')[0]
    mensajeFinal.innerText = '';

    let volverAjugar = document.getElementsByClassName('volver-jugar')[0];
    volverAjugar.style.visibility = 'hidden';
}

document.getElementsByClassName('reiniciar')[0].addEventListener('click', clickReiniciar)
document.getElementsByClassName('botton-si')[0].addEventListener('click', clickReiniciar)

function clickSalir() {
    let containerTablero = document.getElementById('tablero-container');
    containerTablero.style.visibility = 'hidden';

    let botonesInsertarFicha = document.querySelectorAll('#insertar-ficha');
    botonesInsertarFicha.forEach(boton => boton.style.visibility = 'hidden');

    let botonesSalirReiniciar = document.querySelectorAll('.botones');
    botonesSalirReiniciar.forEach(boton => boton.style.visibility = 'hidden');

    let mensaje = document.getElementsByClassName('mensaje')[0];
    mensaje.innerText = 'MUCHAS GRACIAS! HASTA LA PRÓXIMA 😊';
    mensaje.style.fontSize = '35px';

    let volverAjugar = document.getElementsByClassName('volver-jugar')[0];
    volverAjugar.style.visibility = 'hidden';
}

document.getElementsByClassName('salir')[0].addEventListener('click', clickSalir);
document.getElementsByClassName('botton-no')[0].addEventListener('click', clickSalir);