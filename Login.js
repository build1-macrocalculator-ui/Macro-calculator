const display = document.querySelectorAll('.button');
const login = document.querySelector('.login-screen');
const exit = document.querySelector('.close-button');
const container = document.querySelector('.home-container');

let toggle = function() {
    container.classList.toggle('toggle');
    login.classList.toggle('login-hidden');
};

exit.addEventListener('click', () => {
    toggle();
});

display.forEach(function(element) {
    element.addEventListener('click', () => {
    toggle();
    })
});

const feature = document.querySelectorAll('.column-content');

feature.forEach(function(element) {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'lightgray';
    })
});

feature.forEach(function(element) {
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = 'white';
    })
});