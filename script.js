
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("open");

  menuToggle.textContent = aberto ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

const chantBtn = document.getElementById("chantBtn");
const chant = document.getElementById("chant");

const gritos = [
  "UMA VEZ FLAMENGO, SEMPRE FLAMENGO! 🔴⚫",
  "VAMOS, FLAMENGO! ❤️🖤",
  "RAÇA, AMOR E PAIXÃO!",
  "A NAÇÃO RUBRO-NEGRA ESTÁ PRESENTE!"
];

let indice = 0;

chantBtn.addEventListener("click", () => {
  chant.textContent = gritos[indice];
  indice = (indice + 1) % gritos.length;
});
