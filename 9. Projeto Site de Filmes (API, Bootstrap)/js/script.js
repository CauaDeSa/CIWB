var element = document.querySelector("html");
var setToDark = document.querySelector("#setColor");
var setNav = document.querySelectorAll('.nav-link');
var changePage = document.querySelectorAll('#navButton');
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

changePage.forEach(element => {
    setTimeout(verify(), 1000000);
})

function verify(){
    if(!isDark){
        element.setAttribute('data-bs-theme', 'light');
        document.querySelector('#Header').setAttribute('class', 'black');
        setNav.forEach(element => {
            element.setAttribute('id', 'navButton2');
        });
    }
}