const mobile_menu = document.querySelector('.header__mobile');
const mobile_menu_close = document.querySelector('.header__nav-mobile__close');
const nav = document.querySelector('.header__nav');
const mobile_menu_container = document.querySelector('.header__nav-mobile');
const nav_list = document.querySelector('.header__nav-list');
const features_dropdown = document.querySelector(`.dropdown[href='#features']+.dropdown__container`);
const features_link = document.querySelector(`.dropdown[href='#features']`);
const company_dropdown = document.querySelector(`.dropdown[href='#company']+.dropdown__container`);
const company_link = document.querySelector(`.dropdown[href='#company']`);

mobile_menu.addEventListener('click', () => {
    nav.style.display = 'flex';
})

mobile_menu_close.addEventListener('click', () => {
    nav_list.style.animationName = 'slide_menu_out';
    mobile_menu_container.style.animationName = 'slide_menu_out';
    setTimeout(() => {
        nav_list.style.animationName = 'slide_menu_in';
        mobile_menu_container.style.animationName = 'slide_menu_in';
        nav.style.display = 'none';
    }, 200);
})

features_link.addEventListener('click', () => features_dropdown.classList.toggle('show'))
company_link.addEventListener('click', () => company_dropdown.classList.toggle('show'))