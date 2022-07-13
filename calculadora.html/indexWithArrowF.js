let number1 = ""
let previousOperation = null
let result = ''

const clickDigit = (event) => {
    let digit = event.target.innerText
    let isIncluded = number1.includes('.')
    if (digit === '.' && isIncluded){
        return
    }

    number1 = number1 + digit;
    showNumber(number1);

    removeOperationStyle('operation-button');
}

const showNumber = (number) =>  {
    const displayElement = document.getElementById('display')
    displayElement.innerHTML = number  
}


const clickOperation = (event) => {
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

    console.log(result, number1, previousOperation)
}

document.querySelectorAll('.operation-button')
    .forEach((element) => element.addEventListener('click', clickOperation));

document.querySelectorAll('.number-button')
    .forEach((element) => element.addEventListener('click', clickDigit));


const executeOperation = () => {

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

    number1 = result;
    previousOperation = '';

    console.log(result, number1, previousOperation)
}

document.getElementsByClassName('button-igual')[0].addEventListener('click', executeOperation);

const removeOperationStyle = (className) => {
    Array
        .from(document.getElementsByClassName(className))
        .forEach(function(element) {
            element.style = null
        })
}


const clickAC = () => {
    number1 = ""
    previousOperation = null
    result = ''

    removeOperationStyle('operation-button');
    showNumber('0');
}

document.getElementsByClassName('button-AC')[0].addEventListener('click', clickAC);


const clickDel = () => {
    let numbersArray = number1.split('');
    numbersArray.pop();
    number1 = numbersArray.join('');

    showNumber(number1);  
}

document.getElementsByClassName('button-del')[0].addEventListener('click', clickDel);

