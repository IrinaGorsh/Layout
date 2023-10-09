const menuActive = document.querySelector('.menu');
const burger = document.querySelector('.burger');

const menuClose = document.querySelector('.menu__hide');

function toggleMenu () {
   menuActive.classList.toggle('hidden__m');
}



burger.addEventListener('click', toggleMenu);

menuClose.addEventListener('click', toggleMenu);

