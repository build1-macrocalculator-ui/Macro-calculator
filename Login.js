const display = document.querySelectorAll('.button');
const login = document.querySelector('.login-screen');
const closed = document.querySelector('.close-button');
const container = document.querySelector('.home-container');
const feature = document.querySelectorAll('.column-item');
const icon = document.querySelectorAll('.icon');

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



feature.forEach(function(element, i) {
    element.addEventListener('mouseover', () => {
        icon[i].style.backgroundColor = 'rgb(101, 188, 114)';
        icon[i].style.color = 'white';
    })
});

feature.forEach(function(element, i) {
    element.addEventListener('mouseleave', () => {
        icon[i].style.backgroundColor = 'rgb(240, 240, 240)';
        icon[i].style.color = 'gray';
    })
});

