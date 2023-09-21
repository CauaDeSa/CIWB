var contador = 0;

for (var index = 911; index < 101000; index++) {
    if((index % 5 == 0) && (index % 11 == 0))
        contador += 1;
}

document.write("Quantidade de numeros divisores no intervalo:  " + contador);