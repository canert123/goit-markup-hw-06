const modalMenu = document.getElementById("modal-menu");
const modalOpenButton = document.getElementById("modal-open-button");
const modalCloseButton = document.getElementById("modal-close-button");


modalOpenButton.addEventListener("click", function () {
    modalMenu.classList.remove("modal-close")
});


modalCloseButton.addEventListener("click", function(){
    modalMenu.classList.add("modal-close")
});




const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerMenuOpen = document.getElementById("hamburger-menu-open");
const hamburgerMenuExit = document.getElementById("hamburger-menu-exit");

hamburgerMenuOpen.addEventListener("click", function(){
    hamburgerMenu.classList.remove("modal-close");
})


hamburgerMenuExit.addEventListener("click", function(){
    hamburgerMenu.classList.add("modal-close");
})