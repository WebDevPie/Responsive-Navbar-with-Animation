$(document).ready(function() {
    const hamburger = $(".hamburger");
    const menu = $(".menu");
    const links = document.querySelectorAll(".menu li");

    hamburger.on("click", () => {
        menu[0].classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

    });


});