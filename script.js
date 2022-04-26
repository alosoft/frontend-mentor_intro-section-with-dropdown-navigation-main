const mobile_menu = document.querySelector('.header__mobile');
const mobile_menu_close = document.querySelector('.header__nav-mobile__close');
const nav = document.querySelector('.header__nav');

mobile_menu.addEventListener('click', () => {
    nav.style.display = 'flex';
})
mobile_menu_close.addEventListener('click', () => {
    nav.style.display = 'none';
})

