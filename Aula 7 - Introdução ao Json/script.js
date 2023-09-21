let input = document.querySelector("input");
let botao = document.querySelector("button");
let nome = "https://api.agify.io/?name=";
let text = document.querySelector("p");

botao.addEventListener('click', () =>{

    fetch(nome + input.value)
    .then(function (respostaJson){
        return respostaJson.json();
    })

    .then(function(respostaDados){
            text.textContent = ('Quem chama ' + respostaDados['name'] + ' geralmente tem ' + respostaDados['age'] + ' anos.');
            
        }
    )

    input.style.display = "none";
    botao.style.display = "none";
})

text.addEventListener('click', () =>{
    text.textContent = '';
    input.style.display = "";
    botao.style.display = "";
})