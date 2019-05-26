const display = document.querySelectorAll('.button');
const login = document.querySelector('.login-screen');
const closed = document.querySelector('.close-button');
const container = document.querySelector('.home-container');

let toggle = function() {
    container.classList.toggle('toggle');
    login.classList.toggle('login-hidden');
};

closed.addEventListener('click', () => {
    toggle();
});

display.forEach(function(element) {
    element.addEventListener('click', () => {
    toggle();
    })
});