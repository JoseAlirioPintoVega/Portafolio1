const menuHamburger = document.querySelector('.fa-solid');
const menu = document.querySelector('.menu');
function menuShow(){
    menu.classList.toggle('show_menu')
}

menuHamburger.addEventListener
('click', menuShow );

console.log(menu);