/*

- Que el numero que seleccione el usuario tiene que aparecer en numeros-resultados.
Optcion a- mientras apriete numeros o coma pero no operadores --> concatenarlos y mostrarlos por pantalla. let numero = numero + nuevo numero.
Opcion b- si aprieta más de una tecla numero o coma (sin introducir operacion), concatenar esos numeros y guardarlos
hasta que apriete una operación. 
      para después  //- solamente se permite una coma por numero.
                    //- si la primera tecla que aprieta es coma, se cuenta como un 0,

- cuando apriete algun boton de operacion cambiarle a otro color (caso cuando solamente pone un numero y operacion)

- volver a hacer paso 1 y ejecutar la operación mostrando el resultado
- si vuelve a apretar algun boton de operacion y cuando apriete algun boton de operacion cambiarle a otro color.
- si aprieta =, mostrar resultado.

- si es AC el resultado es 0, borrando todo lo hecho anterior (el valor de la variable es 0). 

- ver que hacer con el DEL. 




EJECUCIÓN

- guardamos el primer numero en una variable: numero
- guardamos la operacion en otra variable: operacion
- guardamos el segundo numero en otra variable: numero2
- si da = ejecutar la operacion y mostrarlo por pantalla.
- si el usuario aprieta otra operacion, guardo el resultado de la anterior (numero) y espero al otro numero (numero2).
    numero = numero operacion numero2.
 



------------------------------------------------------------------------------------------

- el usuario me da un numero:
let numero1

- el usuario me da un operador:
let operador

- el usuario me da otro numero:
let numero 2

si el isuario pone =:
- hago la operación:

    si operador es +{
        resultado = numero1 operador numero2;
    }
    si operador es - {
        resultado = numero1 operador numero2;
    }
    .....
printo por pantalla

pero si el usuario pone otro operador:
- hago la operación, lo que me de lo guardo en resultado.
- guardo el nuevo operador
- espero el otro numero y lo guardo en nuevoNumero

    si operador es +{
        resultado = resultado + nuevo numero
    }
    si operador es - {
        resultado = resultado + nuevo numero
    }


si pone =:
repito

si pone operación repito


------------
tres problemas:
1. ui
2. digitos
3. operaciones


clica numero---> resultado = resultado (variable global) + digito
hasta que clica operacion o =;
si clica el punto y numero actual ya contiene el punto ---> no hacer nada. 

resultado = numero actual;

mientras tenga otra operación:
resultado = resultado operación numero actual;

resultado: aqui ingreso el primer numero
operador
nuevo numero: digitos;  parseFloat()
hago la operaciñon y sobreescribo resultado y nuevo numero queda en string vacío.
operador


funcion addDigits(digit) {

}


function operaciones {
    resultado = numero actual
    numero actual = digitos nuevos

    hago la operacion y pongo eso en resultado
    y numero actual lo pongo en cero
    y operacion toma un nuevo valor
}

funcion de igualdad {
    si el operador es = 
    printar el resultado
}

document.findElementByClass('zero').onclick(function () {addDigits('0')})

----------------------------------------- */

let number1 = ""
let previousOperation = null
let result = ''

function clickDigit(event) {
    let digit = event.target.innerText
    let isIncluded = number1.includes('.')
    if (digit === '.' && isIncluded){
        return
    }

    number1 = number1 + digit;
    showNumber(number1);

    removeOperationStyle('operation-button');
}

function showNumber(number) {
    const displayElement = document.getElementById('display')
    displayElement.innerHTML = number  
}


function clickOperation(event) {
    removeOperationStyle('operation-button');

    if (previousOperation) {
        result = parseFloat(result);
        number1 = parseFloat(number1);

        if (previousOperation === '/') {
            result = result / number1
            
        } else if (previousOperation === 'X') {
            result = result * number1

        } else if (previousOperation === '+') {
            result = result + number1

        } else if (previousOperation === '-') {
            result = result - number1
        }
    } else {
        result = number1;
    }

    previousOperation = event.target.innerText
    number1 = '';

    let operationClass = ''
    if (previousOperation === '/') {
        operationClass = 'button-division'
    } else if (previousOperation === 'X') {
        operationClass = 'button-multiplication'
    } else if (previousOperation === '+') {
        operationClass = 'suma'
    } else if (previousOperation === '-') {
        operationClass = 'resta'
    }

    const operationElement = document.getElementsByClassName(operationClass)[0]
    operationElement.style.backgroundImage = 'linear-gradient(45deg, red, red)' 
}

document.querySelectorAll('.operation-button')
    .forEach((element) => element.addEventListener('click', clickOperation));

document.querySelectorAll('.number-button')
    .forEach((element) => element.addEventListener('click', clickDigit));


function executeOperation (){

    result = parseFloat(result);
    number1 = parseFloat(number1);

    if (previousOperation === '/') {
        result = result / number1
        
    } else if (previousOperation === 'X') {
        result = result * number1

    } else if (previousOperation === '+') {
        result = result + number1

    } else if (previousOperation === '-') {
        result = result - number1
    }

    showNumber(result);
    removeOperationStyle('operation-button');
}

document.getElementsByClassName('button-igual')[0].addEventListener('click', executeOperation);

function removeOperationStyle(className) {
    Array
        .from(document.getElementsByClassName(className))
        .forEach(function(element) {
            element.style = null
        })
}


function clickAC() {
    number1 = ""
    previousOperation = null
    result = ''

    removeOperationStyle('operation-button');
    showNumber('0');
}

document.getElementsByClassName('button-AC')[0].addEventListener('click', clickAC);


function clickDel (){
    let numbersArray = number1.split('');
    numbersArray.pop();
    number1 = numbersArray.join('');

    showNumber(number1);  
}

document.getElementsByClassName('button-del')[0].addEventListener('click', clickDel);

