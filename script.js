const mobile_menu = document.querySelector('.header__mobile');
const mobile_menu_close = document.querySelector('.header__nav-mobile__close');
const nav = document.querySelector('.header__nav');
const features_dropdown = document.querySelector(`.dropdown[href='#features']+.dropdown__container`);
const features_link = document.querySelector(`.dropdown[href='#features']`);
const company_dropdown = document.querySelector(`.dropdown[href='#company']+.dropdown__container`);
const company_link = document.querySelector(`.dropdown[href='#company']`);

mobile_menu.addEventListener('click', () => {
    nav.style.display = 'flex';
})
mobile_menu_close.addEventListener('click', () => {
    nav.style.display = 'none';
})

features_link.addEventListener('click', ()=> features_dropdown.classList.toggle('show'))
company_link.addEventListener('click', ()=> company_dropdown.classList.toggle('show'))