const productButton = document.querySelector('.navbar__button--product');
const productMenu = document.querySelector('.dropdown-menu--product');

const companyButton = document.querySelector('.navbar__button--company');
const companyMenu = document.querySelector('.dropdown-menu--company');

const connectButton = document.querySelector('.navbar__button--connect');
const connectMenu = document.querySelector('.dropdown-menu--connect');

const navbarLinks = document.querySelector('.navbar__links');

const hamburgerMenu = document.querySelector('.navbar__hamburger-menu');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');


const expand = dropdown => {
    if (!dropdown.classList.contains('open')) {
        dropdownMenus.forEach(menu => {
            menu.classList.remove('open');
        });
    }

    dropdown.classList.toggle('open');
};


hamburgerMenu.onclick = function() {
    hamburgerMenu.classList.toggle('hamburger-open');

    navbarLinks.classList.toggle('open');

    if (!navbarLinks.classList.contains('open')) {
        dropdownMenus.forEach(menu => {
            menu.classList.remove('open');
        });
    }
}

productButton.onclick = function() {
    expand(productMenu);
}

companyButton.onclick = function() {
    expand(companyMenu)
}

connectButton.onclick = function() {
    expand(connectMenu);
}
