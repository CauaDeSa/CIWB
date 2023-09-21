const button = document.querySelector('#button');
const input = document.querySelector('input');
const reset = document.querySelector('#reset');
let data = document.getElementsByTagName('li');
let alteration = false;
let wordInput;

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter')
        check();
})

button.addEventListener('click', () => {
    check();
})

reset.addEventListener('click', () => {
    input.value = '';

    if (alteration == false)
        alert("Quer apagar o que filho? Tá doido?");

    else{
        alteration = false;
        for (let index = 0; index <= 30; index++) {
            if (data[index].textContent.includes(input.value))
                data[index].removeAttribute("style");
        }
    }
})

function check() {

    wordInput = input.value.toLowerCase();

    if (wordInput != ''){
        alteration = true;
        
        for (let index = 0; index <= 30; index++) {

            if (data[index].textContent.toLowerCase().includes(wordInput))
                data[index].setAttribute("style", "font-weight:bold");
        }
    }

    else{
        alert("Põe alguma coisa primeiro né, vacilão!");
    }
}