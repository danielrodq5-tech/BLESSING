// ===============================
// MENÚ RESPONSIVE
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("activo");
});

// ===============================
// BOTÓN VOLVER ARRIBA
// ===============================

const btnArriba = document.getElementById("arriba");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        btnArriba.style.display = "flex";
    } else {
        btnArriba.style.display = "none";
    }

});

btnArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// SOMBRA AL MENÚ AL HACER SCROLL
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,.4)";
    } else {
        nav.style.boxShadow = "none";
    }

});

// ===============================
// ANIMACIÓN DE LAS TARJETAS
// ===============================

const cards = document.querySelectorAll(".card");

const mostrarCards = () => {

    cards.forEach(card => {

        const posicion = card.getBoundingClientRect().top;
        const pantalla = window.innerHeight - 100;

        if (posicion < pantalla) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

};

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".7s";

});

window.addEventListener("scroll", mostrarCards);

mostrarCards();

// ===============================
// FORMULARIO
// ===============================

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Tu solicitud fue enviada correctamente. Nos comunicaremos contigo lo antes posible.");

    formulario.reset();

});