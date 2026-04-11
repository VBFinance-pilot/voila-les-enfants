const ContactModule = (() => {
  const init = () => {
    console.log("✅ Contact form initialisé");
    const form = document.querySelector(".contact-form");
    if (form) {
      form.addEventListener("submit", handleSubmit);
      form.querySelectorAll("input").forEach((input) => {
        input.addEventListener("blur", validateField);
      });
    }
  };

  const validateField = (e) => {
    const field = e.target;
    const value = field.value.trim();
    if (value.length === 0) {
      field.classList.add("error");
    } else {
      field.classList.remove("error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis");
  };

  return { init, validateField, handleSubmit };
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ContactModule.init);
} else {
  ContactModule.init();
}
