document.getElementById("btnContact").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por tu mensaje. Te responderé pronto 🚀");
  e.target.reset();
});


const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// (Opcional) Cierra el menú al hacer clic en un enlace
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
