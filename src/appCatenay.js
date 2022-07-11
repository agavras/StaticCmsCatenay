const linkMairie = document.getElementById("linkMairie");
const subMenuMairie = document.getElementById("sub-menu-mairie");
const linkAssociations = document.getElementById("linkAssociations");
const subMenuAssociations = document.getElementById("sub-menu-associations");
const linkEcole = document.getElementById("linkEcole");
const subMenuEcole = document.getElementById("sub-menu-ecole");
const linkLoisirs = document.getElementById("linkLoisirs");
const subMenuLoisirs = document.getElementById("sub-menu-loisirs");
const linkPratique = document.getElementById("linkPratique");
const subMenuPratique = document.getElementById("sub-menu-pratique");
const linkDemarches = document.getElementById("linkDemarches");
const subMenuDemarches = document.getElementById("sub-menu-demarches");
const linkProfessionnels = document.getElementById("linkProfessionnels");
const subMenuProfessionnels = document.getElementById("sub-menu-professionnels");

const burger = document.getElementById("burger");
const burgerClose = document.getElementById("burgerClose");
const mobileMenu = document.getElementById("mobileMenu");

const mobileMenuMairie = document.getElementById("mobileMenuMairie");
const mobileMenuAssociations = document.getElementById("mobileMenuAssociations");
const mobileMenuEcole = document.getElementById("mobileMenuEcole");
const mobileMenuLoisirs = document.getElementById("mobileMenuLoisirs");
const mobileMenuPratique = document.getElementById("mobileMenuPratique");
const mobileMenuDemarches = document.getElementById("mobileMenuDemarches");
const mobileMenuProfessionnels = document.getElementById("mobileMenuProfessionnels");

let pbody = document.getElementById("pbody");

linkMairie.addEventListener("mouseover", showMenu.bind(null, 1));
linkAssociations.addEventListener("mouseover", showMenu.bind(null, 2));
linkEcole.addEventListener("mouseover", showMenu.bind(null, 3));
linkLoisirs.addEventListener("mouseover", showMenu.bind(null, 4));
linkPratique.addEventListener("mouseover", showMenu.bind(null, 5));
linkDemarches.addEventListener("mouseover", showMenu.bind(null, 6));
linkProfessionnels.addEventListener("mouseover", showMenu.bind(null, 7));

subMenuMairie.addEventListener("mouseleave", hideMenu.bind(null, 1));
subMenuAssociations.addEventListener("mouseleave", hideMenu.bind(null, 2));
subMenuEcole.addEventListener("mouseleave", hideMenu.bind(null, 3));
subMenuLoisirs.addEventListener("mouseleave", hideMenu.bind(null, 4));
subMenuPratique.addEventListener("mouseleave", hideMenu.bind(null, 5));
subMenuDemarches.addEventListener("mouseleave", hideMenu.bind(null, 6));
subMenuProfessionnels.addEventListener("mouseleave", hideMenu.bind(null, 7));

burger.addEventListener("click", showMobileMenu);
burgerClose.addEventListener("click", closeMobileMenu);
mobileMenuMairie.addEventListener("click", closeMobileMenu);
mobileMenuAssociations.addEventListener("click", closeMobileMenu);
mobileMenuEcole.addEventListener("click", closeMobileMenu);
mobileMenuLoisirs.addEventListener("click", closeMobileMenu);
mobileMenuPratique.addEventListener("click", closeMobileMenu);
mobileMenuDemarches.addEventListener("click", closeMobileMenu);
mobileMenuProfessionnels.addEventListener("click", closeMobileMenu);

document.documentElement.style.setProperty("--animate-duration", ".2s");

function showMobileMenu() {
    mobileMenu.style.display = "block";
    mobileMenu.className = "animate__animated animate__fadeInRight animate__1 animate__faster"
    pbody.style.overflow = "hidden";
}

function closeMobileMenu() {
    mobileMenu.className = "animate__animated animate__fadeOutLeft animate__1"
    pbody.style.overflow = "auto";
}

function showMenu(menuID) {
    if (menuID === 1) {
        subMenuMairie.style.display = "block";
        subMenuAssociations.style.display = "none";
        subMenuEcole.style.display = "none";
        subMenuLoisirs.style.display = "none";
        subMenuPratique.style.display = "none";
        subMenuDemarches.style.display = "none";
        subMenuProfessionnels.style.display = "none";
    }
    if (menuID === 2) {
        subMenuMairie.style.display = "none";
        subMenuAssociations.style.display = "block";
        subMenuEcole.style.display = "none";
        subMenuLoisirs.style.display = "none";
        subMenuPratique.style.display = "none";
        subMenuDemarches.style.display = "none";
        subMenuProfessionnels.style.display = "none";
    }
    if (menuID === 3) {
        subMenuMairie.style.display = "none";
        subMenuAssociations.style.display = "none";
        subMenuEcole.style.display = "block";
        subMenuLoisirs.style.display = "none";
        subMenuPratique.style.display = "none";
        subMenuDemarches.style.display = "none";
        subMenuProfessionnels.style.display = "none";
    }
    if (menuID === 4) {
        subMenuMairie.style.display = "none";
        subMenuAssociations.style.display = "none";
        subMenuEcole.style.display = "none";
        subMenuLoisirs.style.display = "block";
        subMenuPratique.style.display = "none";
        subMenuDemarches.style.display = "none";
        subMenuProfessionnels.style.display = "none";
    }
    if (menuID === 5) {
        subMenuMairie.style.display = "none";
        subMenuAssociations.style.display = "none";
        subMenuEcole.style.display = "none";
        subMenuLoisirs.style.display = "none";
        subMenuPratique.style.display = "block";
        subMenuDemarches.style.display = "none";
        subMenuProfessionnels.style.display = "none";
    }
    if (menuID === 6) {
        subMenuMairie.style.display = "none";
        subMenuAssociations.style.display = "none";
        subMenuEcole.style.display = "none";
        subMenuLoisirs.style.display = "none";
        subMenuPratique.style.display = "none";
        subMenuDemarches.style.display = "block";
        subMenuProfessionnels.style.display = "none";
    }
    if (menuID === 7) {
        subMenuMairie.style.display = "none";
        subMenuAssociations.style.display = "none";
        subMenuEcole.style.display = "none";
        subMenuLoisirs.style.display = "none";
        subMenuPratique.style.display = "none";
        subMenuDemarches.style.display = "none";
        subMenuProfessionnels.style.display = "block";
    }
}

function hideMenu() {
    subMenuMairie.style.display = "none";
    subMenuAssociations.style.display = "none";
    subMenuEcole.style.display = "none";
    subMenuLoisirs.style.display = "none";
    subMenuPratique.style.display = "none";
    subMenuDemarches.style.display = "none";
    subMenuProfessionnels.style.display = "none";
}

