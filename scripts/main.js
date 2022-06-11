const burger = document.querySelector('#navbar-burger');
const menu = document.querySelector('#menu');

console.log(burger);

burger.addEventListener('click', function() {
    console.log('click');
    menu.classList.toggle('hidden');
});