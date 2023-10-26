var element = document.querySelector("html");
var setToDark = document.querySelector("#setColor");
var setNav = document.querySelectorAll('.nav-link');
var changePage = document.querySelectorAll('.pageSetter');
var cardSpace = document.querySelector('.row');
var searchLabel = document.querySelector('.cabecalho-pesquisa');
var cardsQuantity = 0;
var isDark = true;



setToDark.addEventListener("click", () => {
    if (!isDark) {
        element.setAttribute('data-bs-theme', 'dark');
        document.querySelector('#Header').setAttribute('class', 'white');
        setNav.forEach(element => {
            element.setAttribute('id', 'navButton');
        });
        isDark = true;
    }

    else {
        element.setAttribute('data-bs-theme', 'light');
        document.querySelector('#Header').setAttribute('class', 'black');
        setNav.forEach(element => {
            element.setAttribute('id', 'navButton2');
        });
        isDark = false;
    }
});

searchLabel.addEventListener("keydown", function (e) {

    if (e.code === "Enter") {

        clear();

        let word = searchLabel.value;
        let title = document.createElement('div');
        let titleContent = document.createElement('p');
        titleContent.textContent = 'Voce pesquisou por: "' + word + '"';
        title.setAttribute('class', 'pageTitle');
        cardSpace.appendChild(title);
        title.appendChild(titleContent);

        searchLabel.value = '';

        find('https://api.themoviedb.org/3/search/multi?query=' + word + '&include_adult=false&language=en-US&page=1');
    }
})

changePage.forEach(function (botao) {
    
    botao.addEventListener('click', () => {
        if (botao.textContent == 'Home') {
            clear();
            find('https://api.themoviedb.org/3/trending/movie/day?language=en-US', 1);
        }
        else if (botao.textContent == 'Filmes') {
            clear();
            find("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", 2);
        }
        else {
            clear();
            find("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", 3)
        }
    })
});

async function find(url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', key) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGQ5ZGFjYzAwNjA5NmM0YzcwYWM0NGViNmUxM2VmNSIsInN1YiI6IjY1MWYzY2Q1OTY3Y2M3MzQyN2YzZjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImorXfIr9sQNG0vBOP5slVmaT52N8kKl1zmfh5CnOUg'
        }
    };

    let dataBlock = await fetch(url, options)
    const data = await dataBlock.json();
    const ore = await data.results;

    ore.forEach(movie => {
        var card = document.createElement('div');
        var backgroundImage = document.createElement('img');
        var title = document.createElement('p');

        if (movie.poster_path != null) {
            backgroundImage.setAttribute('src', 'https://image.tmdb.org/t/p/original' + movie.poster_path);
            backgroundImage.setAttribute('class', 'img-card');
    
            card.setAttribute('class', 'card');
            card.appendChild(backgroundImage);
            card.appendChild(title);
            cardSpace.appendChild(card);
    
            cardsQuantity++;
        }
    })
}

function clear() {
    if (cardsQuantity > 0) {

        document.querySelector('.row').innerHTML = '';
    }
}

