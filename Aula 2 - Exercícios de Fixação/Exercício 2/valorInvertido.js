var valor = prompt('Digite o valor de até 3 digitos: ');

var a = parseInt(valor / 100);

valor = parseInt(valor % 100);

var b = parseInt(valor / 10);

var c = parseInt(valor % 10);

var resultado = (c * 100) + (b * 10) + a;

document.write(resultado);