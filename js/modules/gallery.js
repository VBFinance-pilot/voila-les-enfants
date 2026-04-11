const GalleryModule = (() => {
  const init = () => {
    console.log("✅ Gallery initialisé");
    const galleryItems = document.querySelectorAll(".g-item");
    galleryItems.forEach((item) => {
      item.addEventListener("click", openLightbox);
    });
  };

  const openLightbox = (e) => {
    console.log("Galerie ouverte");
    const lb = document.getElementById("lb");
    if (lb) lb.classList.remove("hidden");
  };

  const closeLightbox = () => {
    const lb = document.getElementById("lb");
    if (lb) lb.classList.add("hidden");
  };

  return { init, openLightbox, closeLightbox };
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", GalleryModule.init);
} else {
  GalleryModule.init();
}
