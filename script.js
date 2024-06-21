// script.js

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".sidebar ul li a");

    window.onscroll = () => {
        var current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach(a => {
            a.classList.remove("active");
            if (a.getAttribute("href") == `#${current}`) {
                a.classList.add("active");
            }
        });
    };
});
