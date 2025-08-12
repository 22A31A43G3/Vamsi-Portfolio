// Optional: Navbar background change on scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(15, 15, 26, 0.9)";
  } else {
    nav.style.background = "rgba(15, 15, 26, 0.6)";
  }
});
