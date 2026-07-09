document.addEventListener("DOMContentLoaded", () => {

    const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "ar";

languageBtn.addEventListener("click", () => {

    if (currentLanguage === "ar") {

        document.getElementById("pageTitle").textContent =
            translations.en.pageTitle;

        document.getElementById("pageSubtitle").textContent =
            translations.en.pageSubtitle;

        languageBtn.textContent = "AR";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        currentLanguage = "en";

    } else {

        document.getElementById("pageTitle").textContent =
            translations.ar.pageTitle;

        document.getElementById("pageSubtitle").textContent =
            translations.ar.pageSubtitle;

        languageBtn.textContent = "EN";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        currentLanguage = "ar";

    }

});
const cards = document.querySelectorAll(".policy-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "all .8s ease";

    observer.observe(card);

});

console.log("policies.js works");

});



// ===============================
// Language Switch
// ===============================

const languageBtn = document.getElementById("lang");

languageBtn.addEventListener("click", () => {

    languageBtn.textContent = "AR";

});