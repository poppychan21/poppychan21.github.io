document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            // Hide all sections
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Show the selected section
            targetSection.style.display = "block";
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
