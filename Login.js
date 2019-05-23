const display = document.querySelector('.button');
const login = document.querySelector('.login-screen');
const exit = document.querySelector('.close-button');

let toggle = function() {
    return login.classList.toggle('login-hidden');
};

exit.addEventListener('click', () => {
    toggle();
});

display.addEventListener('click', () => {
    toggle();
});