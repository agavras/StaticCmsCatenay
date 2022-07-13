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

const menuMobileRacine = document.getElementById("menuMobileRacine");
const mobileMenuMairie = document.getElementById("mobileMenuMairie");
const mobileMenuAssociations = document.getElementById("mobileMenuAssociations");
const mobileMenuEcole = document.getElementById("mobileMenuEcole");
const mobileMenuLoisirs = document.getElementById("mobileMenuLoisirs");
const mobileMenuPratique = document.getElementById("mobileMenuPratique");
const mobileMenuDemarches = document.getElementById("mobileMenuDemarches");
const mobileMenuProfessionnels = document.getElementById("mobileMenuProfessionnels");

const subMenuMobileMairie = document.getElementById("subMenuMobileMairie");
const subMenuMobileAssociations = document.getElementById("subMenuMobileAssociations");
const subMenuMobileEcole = document.getElementById("subMenuMobileEcole");
const subMenuMobileLoisirs = document.getElementById("subMenuMobileLoisirs");
const subMenuMobilePratique = document.getElementById("subMenuMobilePratique");
const subMenuMobileDemarches = document.getElementById("subMenuMobileDemarches");
const subMenuMobileProfessionnels = document.getElementById("subMenuMobileProfessionnels");

const divImg = document.getElementById("divImg");

let pbody = document.getElementById("pbody");

xtraLightBtn = document.getElementById("xtraLightBtn");
medLightBtn = document.getElementById("medLightBtn");
medDarkBtn = document.getElementById("medDarkBtn");
xtraDarkBtn = document.getElementById("xtraDarkBtn");

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
mobileMenuMairie.addEventListener("click", openSubMenuMobile.bind(null, 1));
mobileMenuAssociations.addEventListener("click", openSubMenuMobile.bind(null, 2));
mobileMenuEcole.addEventListener("click", openSubMenuMobile.bind(null, 3));
mobileMenuLoisirs.addEventListener("click", openSubMenuMobile.bind(null, 4));
mobileMenuPratique.addEventListener("click", openSubMenuMobile.bind(null, 5));
mobileMenuDemarches.addEventListener("click", openSubMenuMobile.bind(null, 6));
mobileMenuProfessionnels.addEventListener("click", openSubMenuMobile.bind(null, 7));

divImg.addEventListener("click", showMobileMenu);

xtraLightBtn.addEventListener("click", changeCSSVariables.bind(null, 1));
medLightBtn.addEventListener("click", changeCSSVariables.bind(null, 2));
medDarkBtn.addEventListener("click", changeCSSVariables.bind(null, 3));
xtraDarkBtn.addEventListener("click", changeCSSVariables.bind(null, 4));

document.documentElement.style.setProperty("--animate-duration", ".2s");

// MOBILE ****************************************
function showMobileMenu() {
    burger.style.display = "none";
    mobileMenu.style.display = "block";
    mobileMenu.className = "animate__animated animate__fadeInRight animate__1 animate__faster";
    pbody.style.overflow = "hidden";
    window.location.href = "#";
    closeMobileSubMenu()
}

function closeMobileMenu() {
    burger.style.display = "block";
    mobileMenu.className = "animate__animated animate__fadeOutLeft animate__1";
    pbody.style.overflow = "auto";
    menuMobileRacine.style.display = "block";
    closeMobileSubMenu()
}

function openSubMenuMobile(subMenuID) {
    menuMobileRacine.style.display = "none";
    subMenuMobileMairie.style.display = "none";
    subMenuMobileAssociations.style.display = "none";
    subMenuMobileEcole.style.display = "none";
    subMenuMobileLoisirs.style.display = "none";
    subMenuMobilePratique.style.display = "none";
    subMenuMobileDemarches.style.display = "none";
    subMenuMobileProfessionnels.style.display = "none";
    if (subMenuID === 1) {
        subMenuMobileMairie.style.display = "block";
        subMenuMobileMairie.className = "animate__animated animate__fadeInRight animate__1";
    }
    if (subMenuID === 2) {
        subMenuMobileAssociations.style.display = "block";
        subMenuMobileAssociations.className = "animate__animated animate__fadeInRight animate__1";
    }
    if (subMenuID === 3) {
        subMenuMobileEcole.style.display = "block";
        subMenuMobileEcole.className = "animate__animated animate__fadeInRight animate__1";
    }
    if (subMenuID === 4) {
        subMenuMobileLoisirs.style.display = "block";
        subMenuMobileLoisirs.className = "animate__animated animate__fadeInRight animate__1";

    }
    if (subMenuID === 5) {
        subMenuMobilePratique.style.display = "block";
        subMenuMobilePratique.className = "animate__animated animate__fadeInRight animate__1";

    }
    if (subMenuID === 6) {
        subMenuMobileDemarches.style.display = "block";
        subMenuMobileDemarches.className = "animate__animated animate__fadeInRight animate__1";

    }
    if (subMenuID === 7) {
        subMenuMobileProfessionnels.style.display = "block";
        subMenuMobileProfessionnels.className = "animate__animated animate__fadeInRight animate__1";
    }
}

function closeMobileSubMenu() {
    subMenuMobileMairie.style.display = "none";
    subMenuMobileAssociations.style.display = "none";
    subMenuMobileEcole.style.display = "none";
    subMenuMobileLoisirs.style.display = "none";
    subMenuMobilePratique.style.display = "none";
    subMenuMobileDemarches.style.display = "none";
    subMenuMobileProfessionnels.style.display = "none";
}


// DESKTOP ****************************************
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

// CSS VARIABLES
function changeCSSVariables(cBind) {
    if (cBind === 1) {
        document.documentElement.style.setProperty("--bgColor", "rgb(255, 255, 255)");
        document.documentElement.style.setProperty("--accentColor", "rgb(64, 191, 149)");
        document.documentElement.style.setProperty("--whiteColor", "rgb(255, 255, 255)");
        document.documentElement.style.setProperty("--lFocusColor", "rgb(42, 54, 65)");
        document.documentElement.style.setProperty("--tFocusColor", "rgb(42, 54, 65)");
        document.documentElement.style.setProperty("--pgColor", "rgb(213, 243, 237)");
        document.documentElement.style.setProperty("--swColor1", "rgb(64, 191, 149)");
        document.documentElement.style.setProperty("--swColor2", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--swColor3", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--swColor4", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--snippetColor", "rgb(240, 220, 230)");
    }
    if (cBind === 2) {
        document.documentElement.style.setProperty("--bgColor", "rgb(214, 227, 236)");
        document.documentElement.style.setProperty("--accentColor", "rgb(64, 191, 149)");
        document.documentElement.style.setProperty("--whiteColor", "rgb(255, 255, 255)");
        document.documentElement.style.setProperty("--lFocusColor", "rgb(42, 54, 65)");
        document.documentElement.style.setProperty("--tFocusColor", "rgb(42, 54, 65)");
        document.documentElement.style.setProperty("--pgColor", "rgb(213, 243, 237)");
        document.documentElement.style.setProperty("--swColor1", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--swColor2", "rgb(64, 191, 149)");
        document.documentElement.style.setProperty("--swColor3", "rgb(128, 144, 163, 182)");
        document.documentElement.style.setProperty("--swColor4", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--snippetColor", "rgb(64, 191, 149)");
    }
    if (cBind === 3) {
        document.documentElement.style.setProperty("--bgColor", "rgb(42, 54, 65)");
        document.documentElement.style.setProperty("--accentColor", "rgb(64, 191, 149)");
        document.documentElement.style.setProperty("--whiteColor", "rgb(255, 255, 255)");
        document.documentElement.style.setProperty("--lFocusColor", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--tFocusColor", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--pgColor", "rgb(98, 109, 119)");
        document.documentElement.style.setProperty("--swColor1", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--swColor2", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--swColor3", "rgb(64, 191, 149)");
        document.documentElement.style.setProperty("--swColor4", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--snippetColor", "rgb(98, 109, 119)");
    }
    if (cBind === 4) {
        document.documentElement.style.setProperty("--bgColor", "rgb(0, 0, 0)");
        document.documentElement.style.setProperty("--accentColor", "rgb(64, 191, 149)");
        document.documentElement.style.setProperty("--whiteColor", "rgb(255, 255, 255)");
        document.documentElement.style.setProperty("--lFocusColor", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--tFocusColor", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--pgColor", "rgb(98, 109, 119)");
        document.documentElement.style.setProperty("--swColor1", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--swColor2", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--swColor3", "rgb(144, 163, 182)");
        document.documentElement.style.setProperty("--swColor4", "rgb(64, 191, 149)");
        document.documentElement.style.setProperty("--snippetColor", "rgb(42, 54, 65)");
    }
}

