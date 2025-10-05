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

    const view_more = document.getElementById("view-more");
    const past_gigs = document.getElementById("past-gigs");
    view_more.addEventListener("click", () => {
        past_gigs.classList.toggle("active");

        if (view_more.textContent.includes("View more")) {
            view_more.innerHTML = 'View less <i class="fa-solid fa-chevron-up"></i>';
        } else {
            view_more.innerHTML = 'View more <i class="fa-solid fa-chevron-down"></i>';
        }
    })

    const expand_gig_icons = document.getElementsByClassName("expand-gig-icon");

    for (let i = 0; i < expand_gig_icons.length; i++) {
        expand_gig_icons[i].addEventListener("click", function() {
            this.classList.toggle("active");
            
            const parent = this.parentElement;
            parent.classList.toggle("active");
        });
    }
});