const burgerMenuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu');

burgerMenuButton.addEventListener('click', function() {
  burgerMenuButton.classList.toggle('header__menu-button_type_close');
  menu.classList.toggle('header__menu_opened');
});
