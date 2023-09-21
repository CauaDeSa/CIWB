var screenMessage = [ ];
var contador = 1, win = false, count = false, gameCondition = true, used = [], i = -1, wordCount = 0;
var gameWord = 'urubu';

resetGameWord();

var botao = document.querySelector('#botao');
botao.addEventListener('click', () => {
    
    var letter = document.querySelector('#campo').value;
    var achou = false;
    
    count = true;

    if (gameCondition == false)
        gameReset();
    
    if(gameCondition == true){

        for (let index = 0; index < used.length; index++){
            if (letter == used[index] && index != i - 1)
                repeatedWord();
        }
        
        if (count == true){
            i += 1;
            used[i] = letter;
            document.querySelector('#letrasusadas').textContent += used[i].toUpperCase() + ' ';

            for(let i = 0; i < gameWord.length; i++){
                if (gameWord[i] == letter)
                    achou = lettersUpdate(achou, letter, i);
            }
        
            if (achou == false)
                imgUpdate();
        }    

        if (contador == 7)
            loseCondition();

        for (let index = 0, count = -1; index <= gameWord.length && win == false; index++) {
            if(screenMessage[index] != '_ ')
                count += 1;
        
            if (count == gameWord.length)
                win = true;
        }
        
        if (win == true)
            winCondition();

            document.querySelector('#campo').value = ' ';
    }
});

document.querySelector('#letras').textContent = screenMessage.join(' ');

function resetGameWord() {
    for(let i = 0; i < 5; i++)
        screenMessage[i] = '_ ';
}

function repeatedWord() {
    alert('Letra repetida, insira uma nova letra');
    count = false;
}

function lettersUpdate(achou, letter, i) {
    screenMessage.splice(i, 1, letter);
    document.querySelector('#letras').textContent = screenMessage.join(' ');
    return achou = true;
}

function imgUpdate() {
    contador += 1;
    document.querySelector('#image').setAttribute('src', 'img/forca' + contador + '.png');
}

function loseCondition() {
    document.querySelector('#letras').textContent = "Você perdeu!";    
    document.querySelector('#botao').textContent = "Jogar novamente";
    gameCondition = false
}

function winCondition() {
    document.querySelector('#letras').textContent = "Você venceu!";    
    document.querySelector('#botao').textContent = "Jogar novamente";
    gameCondition = false
}

function gameReset() {
    gameCondition == true;
    document.querySelector('#botao').textContent = "Enviar"

    resetGameWord();

    document.querySelector('#letras').textContent = screenMessage.join(' ');

    used.length = 0;
    i = -1;
    contador = 1;
    wordCount++;

    document.querySelector('#letrasusadas').textContent = 'Letras usadas: ';
}