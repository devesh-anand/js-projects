let toggle = document.getElementById("toggle-btn");
let mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});