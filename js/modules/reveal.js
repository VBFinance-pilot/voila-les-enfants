const RevealModule = (() => {
  const init = () => {
    console.log("✅ Reveal animations initialisées");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll(".reveal").forEach((el) => {
        observer.observe(el);
      });
    }
  };

  return { init };
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", RevealModule.init);
} else {
  RevealModule.init();
}
