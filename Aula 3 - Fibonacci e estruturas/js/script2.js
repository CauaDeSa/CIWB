for (let index = 56; index < 177; index++){
    ePrimo(index);
}

function ePrimo(value){
    let count = 1;

    for(let index = 2; index < (value / 2) + 1; index++){
        if(value % index == 0)
            count += 1;
    }

    if(count == 1)
        document.write(value + ' é primo<br>');
} 