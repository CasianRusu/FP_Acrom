AOS.init();
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addHamburgerEvent() {
    const hamburger_menu = document.getElementById("hamburger-menu");
    const links = document.getElementById("links");
    if (hamburger_menu) {
        hamburger_menu.addEventListener("click", () => {
            hamburger_menu.classList.toggle("active");
            links.classList.toggle("hide");
        });
    }
}
function addLearnMoreEvent() {
    const learnMoreBtn = document.getElementById("learn-more-btn");
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", () => {
            document.getElementById("content").scrollIntoView({ behavior: "smooth" });
        });
    }
}


addHamburgerEvent();
addLearnMoreEvent();
