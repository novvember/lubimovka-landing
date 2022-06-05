const burgerMenuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__links');


burgerMenuButton.addEventListener('click', function() {
  burgerMenuButton.classList.toggle('header__menu-button_type_close');
  menu.classList.toggle('header__links_opened');
});
