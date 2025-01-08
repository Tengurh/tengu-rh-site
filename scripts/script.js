document.addEventListener("DOMContentLoaded", () => {
    console.log("Bienvenue sur TËNGU RH !");
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Merci de nous avoir contactés ! Nous reviendrons vers vous sous peu.");
            contactForm.reset();
        });
    }
});
