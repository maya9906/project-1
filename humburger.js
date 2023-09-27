// Function to toggle the visibility of the hamburger menu
function hamburgerOpen() {
    // Get the element with the ID "menu-h"
    const menu = document.getElementById("menu-h");
    // Toggle the "humburger-open" class to show/hide the menu
    menu.classList.toggle("humburger-open");
}

// Initialize Swiper.js to create a slider
const swiper = new Swiper('.swiper', {
    // Set the slider's slide direction to horizontal
    direction: 'horizontal',
    // Enable looping for the slider
    loop: true,
  
    // Configuration for pagination (dots or page numbers)
    pagination: {
        // Specify the pagination element
        el: '.swiper-pagination',
    },
  
    // Configuration for navigation buttons (next and previous)
    navigation: {
        // Specify the element for the next button
        nextEl: '.swiper-button-next',
        // Specify the element for the previous button
        prevEl: '.swiper-button-prev',
    },
});
