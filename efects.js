document.addEventListener('DOMContentLoaded', function() {
    let prevScrollPos = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    const headerText = document.querySelector('.header_text');
    const navbarHeight = navbar.offsetHeight;
    const headerTextHeight = headerText.offsetHeight;

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            // Pomik navzgor
            navbar.style.transform = 'translateY(0)';
            headerText.style.transform = 'translateY(0)'; // Prikaz napisa
        } else {
            // Pomik navdol
            navbar.style.transform = `translateY(-${headerTextHeight}px)`; // Skrij polovico menija
            headerText.style.transform = `translateY(-${headerTextHeight}px)`; // Skrij naslov
        }

        prevScrollPos = currentScrollPos;
    };
});
