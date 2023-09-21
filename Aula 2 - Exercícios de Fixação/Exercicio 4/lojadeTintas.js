var metrosQuadrados = prompt('Digite o tamanho em m² da area a ser pintada');

tinta = metrosQuadrados / 3

var latas = tinta / 18;
latas = Math.ceil(latas);

var total = latas * 80;

document.write('Qtd de latas a serem compradas: ' + latas.toFixed(0) + '<br>Valor total: R$ ' + total);
