var tamanhoBytes = prompt('Tamanho do arquivo: ');
var velocidadeBits = prompt('Velocidade do download: ');

var velocidadeBytes = velocidadeBits / 8;

var minutos = parseInt(tamanhoBytes / velocidadeBytes) / 60;

//to Fixed para mostrar apenas os minutos inteiros

var minutos = minutos.toFixed(0);


document.write(minutos + 'minuto(s)');

//formula para segundos
//var segundos = (tamanhoBytes / velocidadeBytes) % 60;
//segundos = segundos.toFixed(0);

//document.write(segundos + 'segundo(s)');