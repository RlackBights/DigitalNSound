const menuButton = document.getElementById("hamburger-icon");
const navbarMenu = document.getElementById("navbar-dropdown");

let isOpen = false;

menuButton.onclick = function () {
    isOpen = !isOpen;
    console.log(isOpen);

    if (isOpen) {
        navbarMenu.style.marginTop = "3.5rem"
    } else {
        navbarMenu.style.marginTop = "-13rem"
    }

    navbarMenu.style.transition = "margin-top 1s"
};