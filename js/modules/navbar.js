const NavbarModule = (() => {
  const init = () => {
    console.log("✅ Navbar initialisé");
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.addEventListener("click", handleNavClick);
    }
  };

  const handleNavClick = (e) => {
    console.log("Navigation cliquée");
  };

  const closeMobileNav = () => {
    const mobileNav = document.getElementById("mobileNav");
    if (mobileNav) mobileNav.classList.remove("active");
  };

  return { init, closeMobileNav };
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", NavbarModule.init);
} else {
  NavbarModule.init();
}
