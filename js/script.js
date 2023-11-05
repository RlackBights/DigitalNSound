const menuButton = document.getElementById("hamburger-icon");
const navbarMenu = document.getElementById("navbar-dropdown");
const mobileSzolg = document.getElementById("mobile-szolg");
const mobileRolam = document.getElementById("mobile-rolam");
const mobileKepek = document.getElementById("mobile-kepek");
const mobileKapcs = document.getElementById("mobile-kapcs");

function mobileNavMenu() {
    isOpen = !isOpen;
    console.log(isOpen);

    if (isOpen) {
        navbarMenu.style.marginTop = "5vh"
    } else {
        navbarMenu.style.marginTop = "-45vh"
    }

    navbarMenu.style.transition = "margin-top 1s"
};


let isOpen = false;

menuButton.onclick = mobileNavMenu;
mobileSzolg.onclick = mobileNavMenu;
mobileRolam.onclick = mobileNavMenu;
mobileKepek.onclick = mobileNavMenu;
mobileKapcs.onclick = mobileNavMenu;