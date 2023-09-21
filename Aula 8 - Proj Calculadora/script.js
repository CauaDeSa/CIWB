let tela = document.querySelector('input');
let buttons = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let showResult = document.querySelector(".resultado");
let commands = document.querySelectorAll(".functions");
let point = document.querySelector(".point");

let value1 = '', value2 = '', operation = '', aux = '';

tela.value = '';

buttons.forEach(function(botao){
    
    botao.addEventListener('click', () =>{

        if (operation != '') {
            value2 += botao.textContent;
        }

        else{
            value1 += botao.textContent;
        }

        aux += botao.textContent;
        tela.value = aux;
    })
});

point.addEventListener('click', () => {
    
    if (operation != '') {

        value2 += point.textContent;
    }

    else{
        value1 += point.textContent;
    }

    aux += point.textContent;
    tela.value = aux;
});

operations.forEach(function(operador){
    
    operador.addEventListener('click', () =>{

        if (value1 != '' && value2 != '') {
            value1 = getResult(operation);  
            value2 = '';
        }
        
        operation = operador.textContent;
        aux += operation;
        tela.value = aux;
    })
});

function getResult(operation) {
    let result;

    switch (operation) {
        case '+':
            result = parseFloat(value1) + parseFloat(value2);
            break;

        case '-':
            result = parseFloat(value1) - parseFloat(value2);
            break;
            
        case 'X':
            result = parseFloat(value1) * parseFloat(value2);
            break;

        case '/':
            result = parseFloat(value1) / parseFloat(value2);
            break;
    
        default:
            result = '';
            break;
    }

    return result;
}

showResult.addEventListener('click', () =>{

    tela.value = getResult(operation);

    reset2();
});

commands.forEach(function(command){
    command.addEventListener('click', () =>{

    var facanha = command.textContent;

        console.log(facanha);
        
        switch (facanha) {
            case 'CE':
                tela.value = '';
                break;
            
            case 'C':
                reset();
                tela.value = '';
        
            default:
                tela.value = tela.value.slice(0, tela.value.length - 1);
                break;
        }
    })
});

function reset(){
    value1 = '';
    operation = '';
    value2 = '';
    tela.value = '';
    aux = '';
}

function reset2() {
    value1 = '';
    operation = '';
    value2 = '';
    aux = '';
}