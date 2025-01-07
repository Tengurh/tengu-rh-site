// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Bienvenue sur TËNGU RH !");

    // 1. Animation de défilement pour les liens du menu
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Empêche le comportement par défaut
            const targetId = link.getAttribute("href").substring(1); // Récupère l'ID de la section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth" // Animation de défilement fluide
                });
            }
        });
    });

    // 2. Formulaire de contact : Afficher un message après l'envoi
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm
