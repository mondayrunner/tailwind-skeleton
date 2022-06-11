const burger = document.querySelector('#navbar-burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', function() {
  menu.classList.toggle('hidden');
});