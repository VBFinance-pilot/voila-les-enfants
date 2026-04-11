const LangModule = (() => {
  const switchLang = (lang) => {
    console.log("Langue changée :", lang);
    localStorage.setItem("lang", lang);
  };
  return { switchLang };
})();
