document.getElementsByTagName('h1')[0].textContent = "Meu cabeçalho";

document.getElementById('link').href = 'http://www.uol.com.br';

var class_dm = document.getElementsByClassName('dm');

class_dm[0].style.color = "red";
class_dm[1].style.color = "green";

//var link_a = document.querySelector('a #link');
//link_a.remove();

var tag_body = document.querySelector('body');
var tag_p = document.createElement('p');
var text_p = document.createTextNode('Curso Javascript');

tag_p.appendChild(text_p);
tag_body.appendChild(tag_p);

// function click_botao(){
//     alert('You FREAK!');
// }

// var botao = document.querySelector('#botao');
// botao.addEventListener('click', 
//     function (){
//         alert('YOU FREAK!');
// });

var botao = document.querySelector('#botao');
botao.addEventListener('click', 
    () => {
        alert('YOU SICK!');
});
