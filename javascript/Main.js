const feature = document.querySelectorAll('.column-item');
const icon = document.querySelectorAll('.icon');

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