document.write('1°   --->' + '0' + '<br>' + '2°   --->' + '1');

var numero1 = 0;
var numero2 = 1;
var suporte = 0;

for(let index = 2; index <= 100; index++){
    suporte = numero1 + numero2;
    numero1 = numero2;
    numero2 = suporte;

    document.write('<br>' + index + '°   --->' + numero2);
}