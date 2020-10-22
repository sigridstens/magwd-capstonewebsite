const navButton = document.getElementsByClassName('menu-icon')[0];
const closeButton = document.getElementsByClassName('close-icon')[0];

const headerNav = document.getElementsByClassName("header-nav")[0];

navButton.addEventListener('click', function(headerNav) {
    headerNav.classList.toggle("nav-open");
});

closeButton.addEventListener('click', function(headerNav) {

  headerNav.classList.toggle("nav-open");
});



