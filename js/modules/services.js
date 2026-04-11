const ServicesModule = (() => {
  const init = () => {
    console.log("✅ Services initialisé");
    const toggles = document.querySelectorAll(".srv-toggle");
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", toggleService);
    });
  };

  const toggleService = (e) => {
    const card = e.target.closest(".srv-card");
    if (card) {
      const body = card.querySelector(".srv-body");
      if (body) {
        body.classList.toggle("open");
      }
    }
  };

  return { init, toggleService };
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ServicesModule.init);
} else {
  ServicesModule.init();
}
