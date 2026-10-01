document.addEventListener("DOMContentLoaded", function () {

    /* Load Header */
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            setupNavigation();
        })
        .catch(error => {
            console.error("Error loading header:", error);
        });


    /* Load Footer */
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;

            setupFooter();
        })
        .catch(error => {
            console.error("Error loading footer:", error);
        });
});


function setupNavigation() {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
        });
    }


    /* Highlight Current Page */

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }
    });
}


function setupFooter() {

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}