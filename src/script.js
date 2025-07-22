let pre = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
  pre.classList.add("hidden");
});

let overlay = document.querySelector("[data-overlay]");
let nav = document.querySelector("[data-nav]");
let toggles = document.querySelectorAll("[data-toggle]");

// Toggle nav and overlay on menu button click
// Updated for opacity/pointer-events logic

toggles.forEach(function (toog) {
  toog.addEventListener("click", function () {
    nav.classList.toggle("opacity-100");
    nav.classList.toggle("pointer-events-auto");
    nav.classList.toggle("opacity-0");
    nav.classList.toggle("pointer-events-none");
    overlay.classList.toggle("opacity-100");
    overlay.classList.toggle("pointer-events-auto");
    overlay.classList.toggle("opacity-0");
    overlay.classList.toggle("pointer-events-none");
  });
});

// Hide nav and overlay when overlay is clicked
overlay.addEventListener("click", function () {
  nav.classList.remove("opacity-100", "pointer-events-auto");
  nav.classList.add("opacity-0", "pointer-events-none");
  overlay.classList.remove("opacity-100", "pointer-events-auto");
  overlay.classList.add("opacity-0", "pointer-events-none");
});

// Back to Top button logic
const toTopBtn = document.getElementById('toTopBtn');
if (toTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      toTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      toTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      toTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      toTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
  });
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
