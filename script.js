document.getElementById("btnContact").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por tu mensaje. Te responderé pronto 🚀");
  e.target.reset();
});
