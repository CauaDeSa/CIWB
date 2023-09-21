var number = prompt('Digite um número: ');

var result = factorial(number);

document.write('O fatorial de ' + number + '  é:  ' + result)

function factorial(number){
    if (number == 1)
        return 1;

    else{
        return factorial(number - 1) * number;
    }
}
