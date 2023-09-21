var minInput = document.querySelector('#minimo');
var maxInput = document.querySelector('#maximo');
const button = document.querySelector('#button');
const values = document.querySelector('#results');

minInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter')
        check();
})

maxInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter')
        check();
})

button.addEventListener('click', () => {
    check();
})

function check (){
    let result = 0;
    const minValue = minInput.value;
    const maxValue = maxInput.value;

    if (minValue < maxValue){
        result = multiples(minValue, maxValue);    
        alert('Existem ' + result + ' valores divisíveis por 2 e 3 no intervalo acima!');
        minInput.value = maxInput.value = '';
    }

    else{
        alert('Digita um valor direito, seu cavalo!');
        minInput.value = maxInput.value = '';
    }
}

function multiples(min, max){
    let result = 0;

    for(let index = min; index < max; index++){
        if (index % 2 == 0 && index % 3 == 0){
            result++;
        }
    }

    return result;
}