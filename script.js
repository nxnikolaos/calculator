let parentDiv = document.createElement('div');
document.body.appendChild(parentDiv);

let container = document.createElement('div');
container.classList.add("container");
parentDiv.appendChild(container);


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

