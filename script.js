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
resultDisplay.textContent ='';
let clearButton = document.createElement('button');
clearButton.classList.add('clear-button');
clearButton.textContent = "Clear";
clearButton.addEventListener("click",function(){
    resultDisplay.textContent='';
})
displayPanel.appendChild(clearButton);
calculatorPanel.appendChild(displayPanel);



let buttonBase = document.createElement('div');
buttonBase.classList.add('button-base');
calculatorPanel.appendChild(buttonBase);

let buttonArray = [];
for(let i =0;i<16;i++){
    buttonArray[i] = document.createElement('button');
    buttonArray[i].classList.add('panel-button');
    buttonArray[i].addEventListener("click",displayResult);
    buttonBase.appendChild(buttonArray[i]);
}
buttonArray[0].textContent='7';
buttonArray[1].textContent='8';
buttonArray[2].textContent='9';
buttonArray[3].textContent='/';

buttonArray[4].textContent='4';
buttonArray[5].textContent='5';
buttonArray[6].textContent='6';
buttonArray[7].textContent='*';

buttonArray[8].textContent='1';
buttonArray[9].textContent='2';
buttonArray[10].textContent='3';
buttonArray[11].textContent='-';

buttonArray[12].textContent='.';
buttonArray[13].textContent='0';
buttonArray[14].textContent='=';
buttonArray[15].textContent='+';

function displayResult(){
    resultDisplay.textContent=resultDisplay.textContent+this.textContent;
}

function operation(){
    console.log(resultDisplay.textContent);
    let temp = resultDisplay.textContent;
    let finalResult = 0;
    let a = 0;
    let operator = [];
    let rot=[];
    operator=temp.match(/\D/);
    console.log(operator);
    operator=operator[0];
    if(temp.includes(operator)){
        
        a = temp.split(operator);
        rot=a[1].match(/\D/);
        a[1] = a[1].split(rot);
        if((operator!='=')&&(Number(a[1][0]!=0))){
            console.log('2nd operator again');
            console.log(Number(a[1][0]));   
            finalResult = operate(Number(a[0]),operator,Number(a[1][0]));
            resultDisplay.textContent=/*resultDisplay.textContent+*/finalResult;
        }
        // finalResult = operate(Number(a[0]),operator,Number(a[1][0]));
    }
    // resultDisplay.textContent=/*resultDisplay.textContent+*/finalResult;
    
}
buttonArray[3].addEventListener("click",operation);
buttonArray[7].addEventListener("click",operation);
buttonArray[11].addEventListener("click",operation);
buttonArray[14].addEventListener("click",operation);
buttonArray[15].addEventListener("click",operation);