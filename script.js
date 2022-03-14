let parentDiv = document.createElement('div');
document.body.appendChild(parentDiv);

let container = document.createElement('div');
container.classList.add("container");
parentDiv.appendChild(container);

let calculatorPanel = document.createElement('div');
calculatorPanel.classList.add("calculator-panel");
container.appendChild(calculatorPanel);

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(a,ope,b){
    let result =0;
    if(ope==='+'){
        result = add(a,b);
    }else if(ope==='-'){
        result = subtract(a,b);
    }else if(ope==='*'){
        result = multiply(a,b);
    }else if(ope==='/'){
        result = divide(a,b);
    }
    return result;
}

let displayPanel = document.createElement('div');
displayPanel.classList.add('display-panel');

let resultDisplay = document.createElement('p');
resultDisplay.classList.add('result-display');
displayPanel.appendChild(resultDisplay);
resultDisplay.textContent ='5+5=10';
let clearButton = document.createElement('button');
clearButton.classList.add('clear-button');
clearButton.textContent = "Clear";
displayPanel.appendChild(clearButton);
calculatorPanel.appendChild(displayPanel);



let buttonBase = document.createElement('div');
buttonBase.classList.add('button-base');
calculatorPanel.appendChild(buttonBase);

let buttonArray = [];
for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
        buttonArray[i] = document.createElement('button');
        buttonArray[i].classList.add('panel-button');
        buttonBase.appendChild(buttonArray[i]);
    }
}
