/* =========================
   MENU MOBILE
========================= */

const menuButton = document.getElementById("menuButton");

const nav = document.getElementById("nav");


menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

    const icon = menuButton.querySelector("i");


    if (nav.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================
   FECHAR MENU AO CLICAR
========================= */

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================
   CARROSSEL
========================= */

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

const nextButton = document.getElementById("nextButton");

const prevButton = document.getElementById("prevButton");


let currentSlide = 0;

let carouselTimer;


/* MOSTRAR SLIDE */

function showSlide(index) {

    /*
       Se chegar depois do último,
       volta para o primeiro.
    */

    if (index >= slides.length) {

        currentSlide = 0;

    }

    /*
       Se voltar antes do primeiro,
       vai para o último.
    */

    else if (index < 0) {

        currentSlide = slides.length - 1;

    }

    else {

        currentSlide = index;

    }


    /* REMOVE ACTIVE DE TODOS */

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });


    dots.forEach((dot) => {

        dot.classList.remove("active");

    });


    /* ATIVA O SLIDE ATUAL */

    slides[currentSlide].classList.add("active");

    dots[currentSlide].classList.add("active");

}


/* PRÓXIMO */

function nextSlide() {

    showSlide(currentSlide + 1);

    restartCarousel();

}


/* ANTERIOR */

function previousSlide() {

    showSlide(currentSlide - 1);

    restartCarousel();

}


/* BOTÃO PRÓXIMO */

nextButton.addEventListener("click", nextSlide);


/* BOTÃO ANTERIOR */

prevButton.addEventListener("click", previousSlide);


/* CLICAR NAS BOLINHAS */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        restartCarousel();

    });

});


/* =========================
   CARROSSEL AUTOMÁTICO
========================= */

function startCarousel() {

    carouselTimer = setInterval(() => {

        showSlide(currentSlide + 1);

    }, 5000);

}


function restartCarousel() {

    clearInterval(carouselTimer);

    startCarousel();

}


startCarousel();


/* =========================
   PAUSAR AO PASSAR MOUSE
========================= */

const carousel = document.querySelector(".carousel");


carousel.addEventListener("mouseenter", () => {

    clearInterval(carouselTimer);

});


carousel.addEventListener("mouseleave", () => {

    startCarousel();

});


/* =========================
   INTERAÇÃO DO TÉCNICO
   NO CELULAR
========================= */

const technicianCard =
    document.querySelector(".technician-card");


technicianCard.addEventListener("click", () => {

    /*
       O computador utiliza hover.

       No celular não existe hover,
       então adicionamos a classe
       touch-active quando tocar.
    */

    if (window.innerWidth <= 600) {

        technicianCard.classList.toggle("touch-active");

    }

});


/* =========================
   ANIMAÇÃO AO ENTRAR NA TELA
========================= */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .product-category, .feature"
    );


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


animatedElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});
