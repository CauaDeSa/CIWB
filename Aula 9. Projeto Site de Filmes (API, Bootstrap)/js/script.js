var element = document.querySelector("html");
var setToDark = document.querySelector("#setColor");
var setNav = document.querySelectorAll('.nav-link');
var changePage = document.querySelectorAll('#navButton');
var cardSpace = document.querySelector('.row');
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
})

changePage.forEach(function (botao) {

    botao.addEventListener('click', () => {
        if (botao.textContent == 'Home') {
            find("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1");
        }
        else if (botao.textContent == 'Filmes') {
            find("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");
        }
        else {

        }
    })
});

async function find(url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1') {

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
        var enderecoImg = 'https://image.tmdb.org/t/p/original' + movie.poster_path;
        var backgroundImage = document.createElement('img');
        var title = document.createElement('p');

        card.style.backgroundImage = `url(${enderecoImg})`;
        // backgroundImage.setAttribute('src', 'https://image.tmdb.org/t/p/original' + movie.poster_path);

        title.textContent = movie.original_title;
        card.setAttribute('class', 'card');
        card.appendChild(title);
        card.appendChild(backgroundImage);
        cardSpace.appendChild(card);
    })
}

