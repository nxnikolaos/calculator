let parentDiv = document.createElement('div');
document.body.appendChild(parentDiv);

let container = document.createElement('div');
container.classList.add("container");
parentDiv.appendChild(container);

let calculatorPanel = document.createElement('div');
calculatorPanel.classList.add("calculator-panel");
container.appendChild(calculatorPanel);

let displayPanel = document.createElement('div');
displayPanel.classList.add('display-panel');

let resultDisplay = document.createElement('p');
resultDisplay.classList.add('result-display');
displayPanel.appendChild(resultDisplay);
resultDisplay.textContent ='';

calculatorPanel.appendChild(displayPanel);

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
    return Math.round((a / b) * 100) / 100;//rounded decimals
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
        // if(b===0){
        //     resultDisplay.textContent='BRUH';
        //     return;
        // }
        result = divide(a,b);
    }
    return result;
}


let buttonBase = document.createElement('div');
buttonBase.classList.add('button-base');
calculatorPanel.appendChild(buttonBase);

let buttonArray = [];
for(let i =0;i<16;i++){
    buttonArray[i] = document.createElement('button');
    buttonArray[i].classList.add('panel-button');
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

let count =0;//counts the times compute function was called
let x = 0;

function displayResult(){
    if(x){
        resultDisplay.textContent=''; 
        x=0;
    }
    resultDisplay.textContent=resultDisplay.textContent+this.textContent;
}


let prev = 0;//number before operand
let next = 0;//number after operand
let prevop ='';
function compute(operand){
    count+=1;
    let symbol = operand.currentTarget.textContent;//operand
    prevop+=symbol;
    let displayNum = Number(resultDisplay.textContent);//curently displayed number
    x=1;
    if(count<=1){
        if(displayNum!=0){
            prev=displayNum;
        }
        if(symbol==='='){
            count=0;
            prevop='';
        }
    }
    if(count>1){
        resultDisplay.textContent=operate(prev,prevop[count-2],displayNum);
        if(resultDisplay.textContent==='Infinity'){
            resultDisplay.textContent='BRUH';
        }
        prev=Number(resultDisplay.textContent);
        x=1;
        if(symbol==='='||resultDisplay.textContent==='BRUH'){
            count=0;
            prev=0;
            prevop='';
        }
    }
}



//Numerics get the display function symbols the operation function
for(i=0;i<buttonArray.length;i++){
    if((buttonArray[i].textContent.match(/\d/))||(buttonArray[i].textContent==='.')){
        buttonArray[i].addEventListener("click",displayResult);
    }else if(buttonArray[i].textContent.match(/\D/)){
        buttonArray[i].addEventListener("click",compute);
    }
}

//Clear Button
let clearButton = document.createElement('button');
clearButton.classList.add('clear-button');
clearButton.textContent = "Clear";
clearButton.addEventListener("click",function(){
    resultDisplay.textContent='';
    x=0;
    prevop='';
    count=0;
    prev=0;
    displayNum=0;
})

displayPanel.appendChild(clearButton);
