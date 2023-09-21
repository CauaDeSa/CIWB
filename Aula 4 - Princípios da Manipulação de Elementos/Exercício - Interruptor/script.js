var lampada = document.querySelector('img');
var interruptor = document.querySelector('#botao');

interruptor.addEventListener('click',
() => {

    if(lampada.hasAttribute('apagada')){
        lampada.setAttribute('src', 'img/acesa.png');
        lampada.removeAttribute('apagada');
        interruptor.setAttribute('src', 'img/ligado.png');

    }

    else{
        lampada.setAttribute('src', 'img/apagada.png');
        lampada.setAttribute('apagada', '');
        interruptor.setAttribute('src', 'img/desligado.png');
    }
})