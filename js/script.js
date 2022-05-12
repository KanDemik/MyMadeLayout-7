let headerBurger = document.querySelector('.header__burger');
let headerLinks = document.querySelector('.header__links');

headerBurger.addEventListener("click", headerBurgerOpen);

function headerBurgerOpen(e) {
    e.preventDefault();
    headerBurger.classList.toggle('open');
    headerLinks.classList.toggle('active');
}