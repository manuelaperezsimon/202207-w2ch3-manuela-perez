/* 

1. Cuando el usuario haga click en el botón comenzar EVENTLISTENER--> 
    printo por pantalla la primera pregunta.
    inicio el temporizador.

2. el usuario deberá poner su respuesta en el input y apretar OK EVENT LISTENER-->
    - borrar el input
    verificar que si input es = a la respuesta 
        si es igual:
         - cambiar de color a verde la letra 
         - sumar a 1 el status
        si es diferente:
        - cambiar el color a roja la letra
        - cambiar a -1 el status
        - frenar el temporizador
        - alert con respuesta correcta

si aprieta el botón pasapalabra EVENT LISTENER
        - cambiar el color a amarilla, pero volver a preguntar
        - el status sigue en cero.

botón stop EVENT LISTENER
- todo a cero
- alert