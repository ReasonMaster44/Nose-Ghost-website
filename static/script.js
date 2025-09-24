document.addEventListener("DOMContentLoaded", () => {

    const ham_menu = document.getElementById("ham-menu");
    const social_links = document.getElementById("social-links");
    const nav_bar = document.getElementById("nav-bar");

    ham_menu.addEventListener("click", () => {
        ham_menu.classList.toggle("active");
        social_links.classList.toggle("active");
        nav_bar.classList.toggle("active");
    });


    document.getElementById("contact").addEventListener("submit", function(e) {
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            e.preventDefault(); // stop form from submitting
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            e.preventDefault();
            return;
        }
    })
});