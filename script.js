const menuItem = document.querySelectorAll('.dropdown__btn');
const closeMenuBtn = document.querySelector('.close__menu__btn');
const showMenuBtn = document.querySelector('.nav__icon');
const mobileMenu = document.querySelector('.mobile__menu');
const overlay = document.querySelector('.overlay ');


menuItem.forEach(el => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const item = e.target.closest('.dropdown__btn')

        //item is null return nothing
        if (!item) return;

        //else select
        const icon = item.querySelector('.icon');
        const menu = document.querySelector(`#${item.dataset.menu}`);

        if (menu.classList.contains('dropdown__show')) {
            item.classList.add('active')
            icon.src = '/images/icon-arrow-up.svg'
            menu.classList.remove('dropdown__show');

        } else {
            item.classList.remove('active')
            icon.src = '/images/icon-arrow-down.svg'
            menu.classList.add('dropdown__show')
        }
    })    
})

closeMenuBtn.addEventListener('click', function (e) {
    const clicked = e.target.closest('.nav__icon')
    if (!clicked) return;
    mobileMenu.classList.add('hidden');
    overlay.classList.add('hidden')
})

showMenuBtn.addEventListener('click', function (e) {
    const clicked = e.target.closest('.nav__icon')
    if (!clicked) return;
    mobileMenu.classList.remove('hidden');
    overlay.classList.remove('hidden');
})