/*
- panel de 6x7 (7 columnas y 6 filas) vacío
- informando que es el turno de las piezas rojas.
- (clicando con el ratón en la columna que quiera) se colocará la ficha de su color en la columna correspondiente.
- turno al segundo jugador (piezas azules);
- En cualquier momento se podrá reiniciar la partida (clicando al botón "Reiniciar partida") o 
- salir (clicando al botón "Salir"). 

- si está llena la columna, no podrá tirar
- comprobará tras cada jugada si ha ganado alguno de los jugadores o han quedado empates.
TERMINADO EL JUEGO: 
- se informa al usuario
- se le pedirá si quiere volver a jugar, en ese caso la partida se reiniciará 
--> (borraremos el tablero y será el turno de las rojas de nuevo).  



- click en columna ADD LISTENER
    La primera vez que se clique una columna el color será rojo.
    se coloca la ficha de su color (rojo primera vez) en esa columna.
    segunda vez, pasa al color azul.


    cada vez que clique una columa:
    - si el color actual es rojo, el próximo será azul (y viceversa);

    PARA CADA VEZ QUE SE CLIQUE UNA COLUMNA:
    - ver si todos son color diferente a blanco. Si es diferente, no se puede poner más fichas.
        some... hay algún elemento que cumpla la condición de su valor es bl?
            si es true, se puede seguir poniendo fichas ahí
            sino, no se puede poner fichas ahí. 
    - ver si la posición anterior es diferente a color blanco poner la ficha encima.
        el primer elemento que aparezca con color blanco, se sobre escribe su color al color del turno correspondiente.
   
    Al finalizar cada click:
   - comprobar si ha ganado alguno de los juegadores o empate
    Para ganar tiene que haber:
         4 del mismo color seguidos en fila:
         iterar todo el array
            iterar la fila con un contador iniciado a 0.
            si turno color = valor de la posicion actual del array {
                contador++
            } else {
                contador = 0
            }
            cuando contador = 4 --> GANÓ turnoColor

         4 del mismo color seguidos en columna:
         
         4 del mismo color seguidos en diagonal



FINAL DE JUEGO:
- se avisa al usuario quién ganó.
- se le pregunta si quiere volver a jugar. (input? botón?)



- botón REINICIAR: ADD LISTENER
el tablero vuelve a  cero (todos el mismo color)

- botón SALIR: ADD LISTENER
alert/mensaje = ' muchas gracias bla bla'.


//VER TEMA EMPATE:
//cuando todos los elementos son diferentes a bl y no hay ganador...
//alert de empate;


//preguntar si quiere volver a jugar cuando alguien ganó:
// pregunta: botones si o no.
// si aprieta si, volvemos todo a cero
//si aprieta no: mensaje de hsta la próxima




Se tiene que añadir la opción de jugar contra la máquina. 
Antes de iniciar la partida se le pedirá al jugador:
Preguntar si quiere jugar contra la máquina o ya tiene compañero:
        - si ya tiene compañero {
            juego normal como hasta ahora
        }

     - si quiere jugar contra la máquina {
        .... 
     }


si jugadorYaTiró {
    activo la máquina

MAQUINA:
- se elige al azar un numero de columna entre el 0 y el 6.
     si la columna del random está llena, entonces generar un nuevo random.
     sino: 
        ver qué celda se tiene que poner del color de la ficha.
- cambiar el color en tablero.
- verficiar 4 en linea. 
- le toca el turno al jugador. 


















JUGAR CONTRA LA MÁQUINA:
- Empieza el jugador cuando ya tira el jugador,
-luego máquina y luego de nuevo el jugador (y sucesivamente)
--> si es jugador {
    ...
} else {
    maquina
}

Cuando es máquina:
- hacemos numero random para que seleccione una columna. del 0 6 y ese numero es donde va a tirar.
let indexColumna = Math.floor(Math.random()*6);
y se pinta el colorActual 







