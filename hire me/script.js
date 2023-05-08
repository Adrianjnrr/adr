let bugerBtn = document.querySelector(".buger-menu-btn");
let bugerMenu = document.querySelector(".buger-menu");

let isBugerOpen = false;

bugerBtn.onclick = function ( ) {
    if (!isBugerOpen) {
        bugerMenu.style.display = "block";
        bugerBtn.style.backgroundPosition = "center right 50px, center";
        isBugerOpen = true;
    }
    else if (isBugerOpen) {
        bugerMenu.style.display = "none";
        bugerBtn.style.backgroundPosition = "center, center right 50px";
        isBugerOpen = false;
    }
}