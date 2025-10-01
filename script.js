const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.checked = false;
  });
});

// Chiudi con ESC
const burger = document.querySelector("label.burger");

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Esc") {
    if (navToggle.checked) {
      navToggle.checked = false;
      if (burger) burger.focus();
    }
  }
});
