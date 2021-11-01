const toggleButton = document.getElementById("toggle-button")[0];
const navbarLinks = document.getElementById("navbar-links")[0];

toggleButton.addEventListener("clink", () => {
  navbarLinks.classList.toggle("active");
});
