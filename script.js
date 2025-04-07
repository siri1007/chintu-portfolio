// script.js
function toggleNav() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('show'); // Toggle the 'show' class






    

    // Adjust home-content margin-top based on nav visibility
    const homeContent = document.querySelector('.home-content');
    if (nav.classList.contains('show')) {
        homeContent.style.marginTop = '200px'; // Adjust margin to accommodate nav height
    } else {
        homeContent.style.marginTop = '10px'; // Reset margin when nav is hidden
    }
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';



    

    // Update active class on navbar items
    const navbarLinks = document.querySelectorAll('#navbarMenu a');
    navbarLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`#navbarMenu a[href="#${sectionId}"]`).classList.add('active');

    // Hide the menu after clicking on a link (for smaller screens)
    const nav = document.getElementById('nav');
    if (window.innerWidth <= 900) {
        nav.classList.remove('show');
        document.querySelector('.home-content').style.marginTop = '60px'; // Reset margin when section is shown
    }




}
