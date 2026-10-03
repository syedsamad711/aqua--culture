// ===============================
// Aqua Culture Website - app.js
// ===============================

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });
}


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks) {
            navLinks.classList.remove("open");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }
    });
});


// ===============================
// Survey Question Explanations
// ===============================

document.querySelectorAll(".explain-btn").forEach(button => {

    button.addEventListener("click", () => {

        const targetId = button.getAttribute("data-target");
        const target = document.getElementById(targetId);

        if (!target) return;

        target.classList.toggle("show");

        if (target.classList.contains("show")) {
            button.textContent = "Hide Explanation";
        } else {
            button.textContent = "Show Explanation";
        }

    });

});


// ===============================
// Back to Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }

    });


    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// ===============================
// Page Loaded Message
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    console.log("Aqua Culture Website loaded successfully!");
});
