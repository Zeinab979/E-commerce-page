// Toggle responsive navigation menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Dummy search function (replace with actual search functionality)
function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    // Perform search based on input (to be implemented)
    console.log('Searching for:', input);
}
